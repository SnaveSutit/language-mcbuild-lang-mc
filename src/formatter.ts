/**
 * MCB source formatter.
 *
 * The formatter parses a file with the `mc-build` parser and re-prints the
 * AST in a canonical style (tabs, one statement per line, `keyword name {` brace
 * style). Because the MCB tokenizer is lossy - it drops blank lines, strips the
 * indentation inside `<%% %%>` blocks and merges `\` line continuations - a few
 * constructs are reconstructed from the original source text instead of the AST:
 *
 *  - blank lines between siblings are restored from the source (max 2)
 *  - `\` line continuations are detected in the source and preserved
 *  - `<%% %%>` script bodies are re-formatted with Prettier
 *  - JSON file bodies (`advancement`, `worldgen`, ...) are re-formatted with
 *    Prettier's JSON printer (the parser discards their internal whitespace), with
 *    embedded `<%...%>` expressions protected across the round-trip
 *
 * If anything about the file cannot be formatted safely the formatter throws;
 * callers should treat that as "leave the file untouched".
 */
import type { Options as PrettierOptions } from 'prettier'
import { format as prettierFormat } from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'
import { parseMcb } from './mcb'
import type { AstNode, McbFileKind } from './mcb'

export class FormatError extends Error {}

const MAX_BLANK_LINES = 2

/**
 * Prettier options for `<%% %%>` script bodies. Tabs, to line up with MCB's own
 * indentation; the rest mirrors this project's `.prettierrc`.
 */
const SCRIPT_PRETTIER_OPTIONS: PrettierOptions = {
	parser: 'babel',
	plugins: [parserBabel],
	useTabs: true,
	tabWidth: 4,
	semi: false,
	singleQuote: true,
	printWidth: 100,
}

/** Prettier options for JSON file bodies (`advancement`, `worldgen`, ...). */
const JSON_PRETTIER_OPTIONS: PrettierOptions = {
	parser: 'json',
	plugins: [parserBabel],
	useTabs: true,
	tabWidth: 4,
	printWidth: 100,
}

/** Maps a `JsonFile` AST kind to the MCB keyword that introduces it. */
const JSON_FILE_KEYWORDS: Record<string, string> = {
	Advancement: 'advancement',
	Enchantment: 'enchantment',
	ItemModifier: 'item_modifier',
	LootTable: 'loot_table',
	Predicate: 'predicate',
	Recipe: 'recipe',
	ChatType: 'chat_type',
	DamageType: 'damage_type',
	Dimension: 'dimension',
	DimensionType: 'dimension_type',
}

/**
 * Formats an MCB (`kind: 'mcb'`) or MCB template (`kind: 'mcbt'`) source string.
 *
 * @throws {FormatError} when a construct cannot be formatted safely.
 * @throws whatever `mc-build` throws when the source does not parse.
 */
export function formatMcb(source: string, kind: McbFileKind): string {
	const ast = parseMcb(source, kind)
	if (ast.length === 0) return ''

	const eol = /\r\n/.test(source) ? '\r\n' : '\n'
	const printer = new Printer(source.split(/\r?\n/))
	printer.printSequence(ast, 0)

	const lines = trimBlankEdges(printer.lines).map(line => line.replace(/[ \t]+$/, ''))
	return lines.join(eol) + eol
}

class Printer {
	readonly lines: string[] = []

	constructor(private readonly src: string[]) {}

	private push(depth: number, text: string): void {
		this.lines.push('\t'.repeat(depth) + text)
	}

	/** Prints a list of sibling nodes, restoring blank lines between them. */
	printSequence(nodes: AstNode[], depth: number): void {
		const flat = flatten(nodes)

		for (let i = 0; i < flat.length; i++) {
			const node = flat[i]

			// Preserve (up to `MAX_BLANK_LINES`) blank lines the author left before
			// this node - but never at the very start of a body.
			const start = nodeStartLine(node)
			if (i > 0 && start !== null) {
				const blanks = this.blankLinesBefore(backslashStart(this.src, start))
				for (let b = 0; b < blanks; b++) this.lines.push('')
			}

			this.printNode(node, depth)
		}
	}

	/** Number of blank source lines immediately above `line` (1-based), capped. */
	private blankLinesBefore(line: number): number {
		let count = 0
		for (let l = line - 1; l >= 1 && (this.src[l - 1] ?? '').trim() === ''; l--) count++
		return Math.min(count, MAX_BLANK_LINES)
	}

	private printNode(node: AstNode, depth: number): void {
		switch (node.type) {
			case 'Comment': {
				// A comment can be split across lines with `\`, just like a command.
				const firstLine = backslashStart(this.src, node.pos.line)
				const continued = firstLine < node.pos.line
				const firstText = (this.src[firstLine - 1] ?? '').trimStart()
				if (continued && firstText.startsWith('#')) {
					this.printCommand(node, depth, node.value)
				} else {
					this.push(depth, node.value)
				}
				return
			}

			case 'Import':
				this.push(depth, `import ${node.name.trim()}`)
				return

			case 'FunctionDef': {
				const append = node.appendTo ? ` ${node.appendTo.trim()}` : ''
				this.printContainer(`function ${node.name.trim()}${append} {`, node.body, depth)
				return
			}

			case 'Directory':
				this.printContainer(`dir ${node.name.trim()} {`, node.body, depth)
				return

			case 'ClockExpr':
				this.printContainer(`clock ${node.name} ${node.time} {`, node.body, depth)
				return

			case 'TickBlock':
				this.printContainer('tick {', node.body, depth)
				return

			case 'LoadBlock':
				this.printContainer('load {', node.body, depth)
				return

			case 'TemplateDef':
				this.printContainer(`template ${node.name} {`, node.body, depth)
				return

			case 'TemplateOverload': {
				const args = node.args.replace(/\s+/g, ' ').trim()
				this.printContainer(args ? `with ${args} {` : 'with {', node.body, depth)
				return
			}

			case 'ScheduleBlock': {
				const mode = this.explicitToken(node, node.blockType)
				this.printContainer(
					`${macroPrefix(node)}schedule ${node.delay}${mode} {`,
					node.body,
					depth
				)
				return
			}

			case 'CompileTimeLoop': {
				// `expression` is compile-time JS (`REPEAT(...)`); leave it untouched.
				const as = node.as && node.as.length > 0 ? ` as ${node.as.join(', ')}` : ''
				this.printContainer(`${node.expression}${as} {`, node.body, depth)
				return
			}

			case 'CompileTimeIf': {
				this.push(depth, `IF ${node.expression} {`)
				this.printSequence(node.body, depth + 1)
				for (const branch of node.elseExpressions) {
					const head =
						branch.condition === null ? '} ELSE {' : `} ELSE IF ${branch.condition} {`
					this.push(depth, head)
					this.printSequence(branch.node, depth + 1)
				}
				this.push(depth, '}')
				return
			}

			case 'Block':
				this.printContainer(this.blockOpen(node) + dataSuffix(node.data), node.body, depth)
				return

			case 'ExecuteBlock': {
				this.printBlockHeader(
					node,
					depth,
					`${macroPrefix(node)}${node.execute} {${dataSuffix(node.data)}`
				)
				this.printSequence(node.body, depth + 1)
				for (const cont of node.continuations ?? []) {
					if (cont.type === 'Block') {
						this.push(depth, `} else ${macroPrefix(cont)}run {${dataSuffix(cont.data)}`)
						this.printSequence(cont.body, depth + 1)
					} else if (cont.type === 'ExecuteBlock') {
						this.printBlockHeader(
							cont,
							depth,
							`} else ${macroPrefix(cont)}${cont.execute} {${dataSuffix(cont.data)}`
						)
						this.printSequence(cont.body, depth + 1)
					} else {
						throw new FormatError(`Unexpected execute continuation: ${cont.type}`)
					}
				}
				this.push(depth, '}')
				return
			}

			case 'ReturnRun': {
				const prefix = `${macroPrefix(node)}return run `
				if (node.value.type === 'Block') {
					this.push(depth, `${prefix}{${dataSuffix(node.value.data)}`)
					this.printSequence(node.value.body, depth + 1)
					this.push(depth, '}')
				} else {
					this.printCommand(node, depth, prefix + inlineRender(node.value))
				}
				return
			}

			case 'Execute': {
				// `execute ... run block foo { ... }` - the run target is itself a block.
				if (node.value.type === 'Block') {
					const block = node.value
					this.printBlockHeader(
						node,
						depth,
						`${macroPrefix(node)}${node.command} ${this.blockOpen(block)}${dataSuffix(
							block.data
						)}`
					)
					this.printSequence(block.body, depth + 1)
					this.push(depth, '}')
					return
				}
				this.printCommand(
					node,
					depth,
					`${macroPrefix(node)}${node.command} ${inlineRender(node.value)}`
				)
				return
			}

			case 'FunctionCall': {
				const data = node.data ? ` ${node.data}` : ''
				this.printCommand(node, depth, `${macroPrefix(node)}function ${node.name}${data}`)
				return
			}

			case 'ScheduleCall': {
				const mode = this.explicitToken(node, node.mode)
				this.printCommand(
					node,
					depth,
					`${macroPrefix(node)}schedule function ${node.target} ${node.delay}${mode}`
				)
				return
			}

			case 'ScheduleClear':
				this.printCommand(node, depth, `${macroPrefix(node)}schedule clear ${node.target}`)
				return

			case 'EqCommand':
				this.printCommand(node, depth, `eq ${node.command}`)
				return

			case 'MultiLineScript':
				this.printScriptBlock(node, depth)
				return

			case 'JsonFile':
				this.printJsonFile(node, depth)
				return

			case 'Raw':
				this.printRaw(node, depth)
				return

			case 'Void':
				return

			default:
				throw new FormatError(
					`Cannot format node of type "${(node as { type: string }).type}"`
				)
		}
	}

	/**
	 * The opening of a block, up to and including `{`: either a bare `{` (an
	 * anonymous block written without the keyword) or `block[ name] {`.
	 */
	private blockOpen(block: AstNode & { type: 'Block' }): string {
		if (!block.isMacro && this.srcCharAt(block) === '{') return '{'
		return `${macroPrefix(block)}block${block.name ? ` ${block.name}` : ''} {`
	}

	/** Prints `header` then an indented body then a closing brace. */
	private printContainer(header: string, body: AstNode[], depth: number): void {
		this.push(depth, header)
		this.printSequence(body, depth + 1)
		this.push(depth, '}')
	}

	/**
	 * Prints the opening line of a block statement (`... {`), keeping a `\`-split
	 * header: continuation lines sit one level in (plus any hanging indent the
	 * author added), and the final `... {` line drops back to the statement's own
	 * indent so the body reads cleanly beneath it. Falls back to `canonical` for a
	 * single-line header.
	 */
	private printBlockHeader(node: AstNode, depth: number, canonical: string): void {
		const lastLine = nodeStartLine(node)
		if (lastLine === null) {
			this.push(depth, canonical)
			return
		}

		const firstLine = backslashStart(this.src, lastLine)
		const lastText = (this.src[lastLine - 1] ?? '').trim()
		const braceIdx = lastText.indexOf('{')
		if (firstLine >= lastLine || braceIdx === -1) {
			this.push(depth, canonical)
			return
		}

		const baseIndent = leadingWhitespace(this.src[firstLine - 1] ?? '')
		const defaultIndent = baseIndent + '\t'
		this.push(depth, (this.src[firstLine - 1] ?? '').trim())
		for (let line = firstLine + 1; line < lastLine; line++) {
			const source = this.src[line - 1] ?? ''
			const extra = hangingExtra(leadingWhitespace(source), baseIndent, defaultIndent)
			this.push(depth + 1, extra + source.trim())
		}

		const command = lastText.slice(0, braceIdx).trimEnd()
		const data = lastText.slice(braceIdx + 1).trim()
		this.push(depth, `${command} {${data ? ` ${data}` : ''}`)
	}

	/**
	 * Prints a single-line statement. If the original source split it across
	 * several lines with `\`, the continuation is kept: each continuation line
	 * sits one level in from the statement, plus any indentation the author added
	 * beyond that (so hanging-indented arguments stay lined up). The final line
	 * may instead sit back at the statement's own indent - a common way to write
	 * the closing `run` clause of an `execute` chain.
	 */
	private printCommand(node: AstNode, depth: number, canonical: string): void {
		const lastLine = nodeStartLine(node)
		if (lastLine === null) {
			this.push(depth, canonical)
			return
		}

		const firstLine = backslashStart(this.src, lastLine)
		if (firstLine >= lastLine) {
			this.push(depth, canonical)
			return
		}

		const baseIndent = leadingWhitespace(this.src[firstLine - 1] ?? '')
		const defaultIndent = baseIndent + '\t'
		this.push(depth, (this.src[firstLine - 1] ?? '').trim())

		for (let line = firstLine + 1; line <= lastLine; line++) {
			const source = this.src[line - 1] ?? ''
			const indent = leadingWhitespace(source)

			if (
				line === lastLine &&
				!indent.startsWith(defaultIndent) &&
				baseIndent.startsWith(indent)
			) {
				this.push(depth, source.trim())
				return
			}

			this.push(depth + 1, hangingExtra(indent, baseIndent, defaultIndent) + source.trim())
		}
	}

	private printRaw(node: AstNode & { type: 'Raw' }, depth: number): void {
		const continuations = node.continuations ?? []
		if (continuations.length === 0) {
			this.printCommand(node, depth, `${macroPrefix(node)}${node.value}`)
			return
		}

		// `value <block> [text] <block> ...` - e.g. `sequence { ... }`.
		let line = '\t'.repeat(depth) + macroPrefix(node) + node.value
		for (const cont of continuations) {
			if (cont.type === 'Block') {
				this.lines.push(line + ` {${dataSuffix(cont.data)}`)
				this.printSequence(cont.body, depth + 1)
				line = '\t'.repeat(depth) + '}'
			} else if (cont.type === 'Raw') {
				line += ` ${macroPrefix(cont)}${cont.value}`
			} else {
				throw new FormatError(`Unexpected raw continuation: ${cont.type}`)
			}
		}
		this.lines.push(line)
	}

	private printScriptBlock(node: AstNode & { type: 'MultiLineScript' }, depth: number): void {
		const openIdx = node.pos.line - 1
		let closeIdx = openIdx + 1
		while (closeIdx < this.src.length && this.src[closeIdx].trim() !== '%%>') closeIdx++
		if (closeIdx >= this.src.length) {
			throw new FormatError('Unterminated <%% %%> block')
		}

		const rawBody = this.src.slice(openIdx + 1, closeIdx)
		const bodyLines = this.formatScript(rawBody.join('\n'))

		this.push(depth, '<%%')
		for (const bodyLine of bodyLines) {
			this.lines.push(bodyLine === '' ? '' : '\t'.repeat(depth + 1) + bodyLine)
		}
		this.push(depth, '%%>')
	}

	/** Runs the JS body of a script block through Prettier, with a verbatim fallback. */
	private formatScript(body: string): string[] {
		if (body.trim() === '') return []
		try {
			return prettierFormat(body, SCRIPT_PRETTIER_OPTIONS).replace(/\n$/, '').split('\n')
		} catch {
			return dedent(body.split('\n'))
		}
	}

	private printJsonFile(node: AstNode & { type: 'JsonFile' }, depth: number): void {
		const info = node.info

		if (info.kind === 'Tag') {
			const replace = info.replace ? ' replace' : ''
			this.printContainer(`tag ${info.subType} ${node.name}${replace} {`, info.entries, depth)
			return
		}

		const keyword =
			info.kind === 'WorldGen'
				? `worldgen ${info.subType} ${info.name}`
				: `${JSON_FILE_KEYWORDS[info.kind] ?? throwKind(info.kind)} ${node.name}`

		const span = this.jsonBodySpan(node)
		const sourceBody = this.src.slice(span.start, span.end)
		const formatted = formatJson(sourceBody.join('\n'))

		// MCB needs the `{` to open a block, so an empty body is `{` then `}`.
		this.push(depth, `${keyword} {`)
		if (formatted === null) {
			// Not valid JSON - re-indent the body verbatim.
			for (const bodyLine of dedent(sourceBody)) {
				this.lines.push(bodyLine === '' ? '' : '\t'.repeat(depth + 1) + bodyLine)
			}
		} else if (formatted !== '{}') {
			// `formatted` is a whole `{ ... }` object; keep its inner lines (already
			// indented one level by Prettier) and shift them under the keyword.
			for (const bodyLine of formatted.split('\n').slice(1, -1)) {
				this.lines.push(bodyLine === '' ? '' : '\t'.repeat(depth) + bodyLine)
			}
		}
		this.push(depth, '}')
	}

	/** Source line indices (0-based, end-exclusive) of a JSON file's body. */
	private jsonBodySpan(node: AstNode & { type: 'JsonFile' }): { start: number; end: number } {
		const openLine = node.pos.line - 1
		const openCol = this.src[openLine]?.indexOf('{') ?? -1
		if (openCol === -1) throw new FormatError('Could not find "{" for JSON file body')

		const close = matchBrace(this.src, openLine, openCol)
		if (!close) throw new FormatError('Unbalanced braces in JSON file body')

		// Body is the lines strictly between the `{` line and the `}` line.
		const start = openLine + 1
		const end = close.line
		// If the `{` and `}` share a line there is no body.
		return start > end ? { start, end: start } : { start, end }
	}

	/**
	 * Returns ` <token>` if the node's source line actually contains `token` as a
	 * word, otherwise `''`. Used for tokens MCB makes optional (`append` /
	 * `replace` on `schedule`) so the formatter never adds one the author omitted.
	 */
	private explicitToken(node: AstNode, token: string): string {
		const line = this.src[(nodePos(node)?.line ?? 0) - 1] ?? ''
		return new RegExp(`\\b${token}\\b`).test(line) ? ` ${token}` : ''
	}

	private srcCharAt(node: AstNode): string | undefined {
		const pos = nodePos(node)
		return pos ? this.src[pos.line - 1]?.[pos.col] : undefined
	}
}

/* -------------------------------------------------------------------------- */
/*  helpers                                                                    */
/* -------------------------------------------------------------------------- */

function flatten(nodes: AstNode[]): AstNode[] {
	const out: AstNode[] = []
	for (const node of nodes) {
		if (node.type === 'Group') out.push(...flatten(node.body))
		else if (node.type === 'Void') continue
		else out.push(node)
	}
	return out
}

function nodePos(node: AstNode): { line: number; col: number } | undefined {
	return (node as { pos?: { line: number; col: number } }).pos
}

function nodeStartLine(node: AstNode): number | null {
	return nodePos(node)?.line ?? null
}

function macroPrefix(node: { isMacro?: boolean }): string {
	return node.isMacro ? '$' : ''
}

function dataSuffix(data: string | null | undefined): string {
	return data ? ` ${data}` : ''
}

/**
 * Renders a node that appears inline after `run` / `return run` (never a block).
 */
function inlineRender(node: AstNode): string {
	switch (node.type) {
		case 'Raw': {
			const rest = (node.continuations ?? [])
				.map(cont => {
					if (cont.type === 'Raw') return ` ${macroPrefix(cont)}${cont.value}`
					throw new FormatError(`Cannot inline raw continuation: ${cont.type}`)
				})
				.join('')
			return `${macroPrefix(node)}${node.value}${rest}`
		}
		case 'FunctionCall':
			return `${macroPrefix(node)}function ${node.name}${node.data ? ` ${node.data}` : ''}`
		case 'Execute':
			return `${macroPrefix(node)}${node.command} ${inlineRender(node.value)}`
		case 'ReturnRun':
			return `${macroPrefix(node)}return run ${inlineRender(node.value)}`
		case 'EqCommand':
			return `eq ${node.command}`
		case 'ScheduleCall':
			return `${macroPrefix(node)}schedule function ${node.target} ${node.delay} ${node.mode}`
		case 'ScheduleClear':
			return `${macroPrefix(node)}schedule clear ${node.target}`
		default:
			throw new FormatError(`Cannot inline node of type "${node.type}"`)
	}
}

/** The leading run of spaces and tabs on a line. */
function leadingWhitespace(line: string): string {
	return /^[ \t]*/.exec(line)?.[0] ?? ''
}

/**
 * The whitespace a `\`-continuation line carries *beyond* one level of indent -
 * i.e. the author's hanging indent, measured relative to the statement's own
 * indent so the result stays stable when the file is formatted again.
 */
function hangingExtra(indent: string, baseIndent: string, defaultIndent: string): string {
	if (indent.startsWith(defaultIndent)) return indent.slice(defaultIndent.length)
	if (indent.startsWith(baseIndent)) return indent.slice(baseIndent.length)
	return ''
}

/**
 * Given the last physical line of a statement, walks back over `\`-continued
 * lines and returns the first physical line of the statement.
 */
function backslashStart(src: string[], lastLine: number): number {
	let first = lastLine
	while (first > 1 && (src[first - 2] ?? '').trimEnd().endsWith('\\')) first--
	return first
}

/** Removes the largest common leading-whitespace prefix from a block of lines. */
function dedent(lines: string[]): string[] {
	const trimmed = trimBlankEdges(lines)
	let common = Infinity
	for (const line of trimmed) {
		if (line.trim() === '') continue
		common = Math.min(common, line.length - line.replace(/^[ \t]+/, '').length)
	}
	if (!isFinite(common) || common === 0) return trimmed
	return trimmed.map(line => (line.trim() === '' ? '' : line.slice(common)))
}

function trimBlankEdges(lines: string[]): string[] {
	let start = 0
	let end = lines.length
	while (start < end && lines[start].trim() === '') start++
	while (end > start && lines[end - 1].trim() === '') end--
	return lines.slice(start, end)
}

/**
 * Finds the `}` that matches the `{` at `src[line][col]`, skipping over
 * `"`/`'` delimited strings. Line/col are 0-based.
 */
function matchBrace(
	src: string[],
	line: number,
	col: number
): { line: number; col: number } | null {
	let depth = 0
	let stringDelim: string | null = null

	for (let l = line; l < src.length; l++) {
		const text = src[l]
		for (let c = l === line ? col : 0; c < text.length; c++) {
			const ch = text[c]
			if (stringDelim) {
				if (ch === '\\') c++
				else if (ch === stringDelim) stringDelim = null
				continue
			}
			if (ch === '"' || ch === "'") stringDelim = ch
			else if (ch === '{') depth++
			else if (ch === '}' && --depth === 0) return { line: l, col: c }
		}
		stringDelim = null
	}
	return null
}

function throwKind(kind: string): never {
	throw new FormatError(`Unknown JSON file kind "${kind}"`)
}

/**
 * Pretty-prints a JSON file body (passed as the text between the outer braces).
 * Returns the whole `{ ... }` object as a string, `'{}'` when empty, or `null`
 * when the body is not valid JSON (caller falls back to a verbatim re-indent).
 *
 * `<%...%>` expressions outside of strings are swapped for placeholder strings
 * before formatting and put back afterwards, so datapack JSON that interpolates
 * MCB values still formats.
 */
function formatJson(body: string): string | null {
	if (body.trim() === '') return '{}'

	const expressions: string[] = []
	let guarded = ''
	let inString = false
	for (let i = 0; i < body.length; i++) {
		const ch = body[i]
		if (inString) {
			guarded += ch
			if (ch === '\\') guarded += body[++i] ?? ''
			else if (ch === '"') inString = false
			continue
		}
		if (ch === '"') {
			inString = true
			guarded += ch
		} else if (ch === '<' && body[i + 1] === '%') {
			const end = body.indexOf('%>', i + 2)
			if (end === -1) return null
			expressions.push(body.slice(i, end + 2))
			guarded += `"__mcb_expr_${expressions.length - 1}__"`
			i = end + 1
		} else {
			guarded += ch
		}
	}

	let out: string
	try {
		// The surrounding newlines make Prettier keep the object expanded
		// (one member per line) rather than collapsing a short body to one line.
		out = prettierFormat(`{\n${guarded}\n}`, JSON_PRETTIER_OPTIONS).trimEnd()
	} catch {
		return null
	}
	return out.replace(
		/"__mcb_expr_(\d+)__"/g,
		(match, index: string) => expressions[+index] ?? match
	)
}
