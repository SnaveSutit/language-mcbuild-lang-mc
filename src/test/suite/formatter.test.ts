import * as assert from 'assert'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import * as vscode from 'vscode'

// Fixtures are TS-adjacent data, not compiled - read them from `src`.
const FIXTURES_DIR = path.resolve(__dirname, '../../../src/test/fixtures')

/**
 * Writes `content` to a temp file with `ext`, opens it as a real document and
 * runs the registered document formatter, returning the resulting text.
 */
async function formatDocument(content: string, ext: string): Promise<string> {
	const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mcb-format-'))
	const file = path.join(dir, `fixture${ext}`)
	fs.writeFileSync(file, content)

	try {
		const doc = await vscode.workspace.openTextDocument(vscode.Uri.file(file))
		await vscode.window.showTextDocument(doc)

		const edits = await vscode.commands.executeCommand<vscode.TextEdit[]>(
			'vscode.executeFormatDocumentProvider',
			doc.uri,
			{ tabSize: 4, insertSpaces: false }
		)

		if (!edits || edits.length === 0) return doc.getText()

		const workspaceEdit = new vscode.WorkspaceEdit()
		for (const edit of edits) workspaceEdit.replace(doc.uri, edit.range, edit.newText)
		const applied = await vscode.workspace.applyEdit(workspaceEdit)
		assert.ok(applied, 'workspace edit should apply')

		return doc.getText()
	} finally {
		await vscode.commands.executeCommand('workbench.action.closeAllEditors')
		fs.rmSync(dir, { recursive: true, force: true })
	}
}

function readFixture(name: string, prefix: 'input' | 'expected'): { text: string; ext: string } {
	const dir = path.join(FIXTURES_DIR, name)
	const file = fs.readdirSync(dir).find(f => f.startsWith(`${prefix}.`))
	if (!file) throw new Error(`fixture "${name}" is missing a ${prefix} file`)
	return { text: fs.readFileSync(path.join(dir, file), 'utf8'), ext: path.extname(file) }
}

suite('MCB formatter', () => {
	const fixtures = fs
		.readdirSync(FIXTURES_DIR)
		.filter(name => fs.statSync(path.join(FIXTURES_DIR, name)).isDirectory())

	assert.ok(fixtures.length > 0, 'there should be fixtures to run')

	for (const name of fixtures) {
		test(`formats fixture: ${name}`, async () => {
			const input = readFixture(name, 'input')
			const expected = readFixture(name, 'expected')

			const formatted = await formatDocument(input.text, input.ext)
			assert.strictEqual(formatted, expected.text, `fixture "${name}" formatted output`)
		})

		test(`is idempotent: ${name}`, async () => {
			const expected = readFixture(name, 'expected')
			const formatted = await formatDocument(expected.text, expected.ext)
			assert.strictEqual(formatted, expected.text, `fixture "${name}" is not idempotent`)
		})
	}

	test('leaves an unparseable file untouched', async () => {
		const broken = 'function oops {\n\tsay hi\n' // missing closing brace
		const result = await formatDocument(broken, '.mcb')
		assert.strictEqual(result, broken)
	})

	test('produces no edits for an already-formatted file', async () => {
		const { text, ext } = readFixture('already-formatted', 'expected')
		const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mcb-noop-'))
		const file = path.join(dir, `noop${ext}`)
		fs.writeFileSync(file, text)
		try {
			const doc = await vscode.workspace.openTextDocument(vscode.Uri.file(file))
			const edits = await vscode.commands.executeCommand<vscode.TextEdit[]>(
				'vscode.executeFormatDocumentProvider',
				doc.uri,
				{ tabSize: 4, insertSpaces: false }
			)
			assert.ok(!edits || edits.length === 0, 'expected no edits')
		} finally {
			await vscode.commands.executeCommand('workbench.action.closeAllEditors')
			fs.rmSync(dir, { recursive: true, force: true })
		}
	})

	test('formats both .mcb and .mcbt documents', async () => {
		const mcb = await formatDocument('function a{\nsay hi\n}\n', '.mcb')
		assert.strictEqual(mcb, 'function a {\n\tsay hi\n}\n')

		const mcbt = await formatDocument('template t{\nwith{\nsay hi\n}\n}\n', '.mcbt')
		assert.strictEqual(mcbt, 'template t {\n\twith {\n\t\tsay hi\n\t}\n}\n')
	})

	test('keeps CRLF line endings', async () => {
		const crlf = 'function a{\r\n\tsay hi\r\n\r\n\tsay bye\r\n}\r\n'
		const result = await formatDocument(crlf, '.mcb')
		assert.strictEqual(result, 'function a {\r\n\tsay hi\r\n\r\n\tsay bye\r\n}\r\n')
	})
})
