/**
 * Thin wrapper around the real `mc-build` compiler front-end.
 *
 * The formatter is driven entirely by the AST that MCB itself produces, so that
 * it can never disagree with the compiler about what a file means.
 */
import { Parser, Tokenizer } from 'mc-build'
import type { AstNode } from 'mc-build/dist/mcl/AstNode'
import type { PosInfo, Token } from 'mc-build/dist/mcl/Tokenizer'

export type { AstNode, PosInfo, Token }

/** File kinds MCB knows how to parse. */
export type McbFileKind = 'mcb' | 'mcbt'

/**
 * Tokenises and parses MCB source into an AST.
 *
 * Throws whatever `mc-build` throws on invalid input - callers are expected to
 * treat a throw as "this file cannot be formatted right now".
 */
export function parseMcb(source: string, kind: McbFileKind): AstNode[] {
	// `Tokenizer` registers the source under this name; it is otherwise unused.
	const tokens = Tokenizer.tokenize(source, kind === 'mcb' ? 'format.mcb' : 'format.mcbt')
	return kind === 'mcb' ? Parser.parseMcbFile(tokens) : Parser.parseMcbtFile(tokens)
}
