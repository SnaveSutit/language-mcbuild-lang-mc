import * as vscode from 'vscode'
// import * as path from 'path'
// import { Compiler, Parser, SyncIo, Tokenizer } from 'mc-build'
// import { AstNode } from 'mc-build/dist/mcl/AstNode'

// function getRelativeSourcePath(filePath: vscode.Uri): string {
// 	const parts = filePath.fsPath.split(path.sep)
// 	const srcIndex = parts.lastIndexOf('src')
// 	if (srcIndex !== -1) {
// 		return path.join(...parts.slice(srcIndex + 1))
// 	}
// 	return path.join(...parts.slice(srcIndex))
// }

// function formatMCBuildAST(
// 	document: vscode.TextDocument,
// 	options: vscode.FormattingOptions,
// 	token: vscode.CancellationToken,
// 	ast: AstNode[]
// ): vscode.TextEdit[] {
// 	const edits: vscode.TextEdit[] = []

// 	for (const node of ast) {
// 		switch (node.type) {
// 			case 'FunctionDef': {
// 				const expected = `function ${node.name} {`
// 				const line = document.lineAt(node.pos.line - 1)
// 				if (line.text !== expected) {
// 					edits.push(vscode.TextEdit.replace(line.range, expected))
// 				}
// 				edits.push(...formatMCBuildAST(document, options, token, node.body))
// 				break
// 			}
// 		}
// 	}

// 	return edits
// }

export async function activate(context: vscode.ExtensionContext) {
	console.log('MC-Build Extension Activated!')

	vscode.languages.registerDocumentFormattingEditProvider('mc-build', {
		provideDocumentFormattingEdits(document, options, token) {
			const edits: vscode.TextEdit[] = []

			const code = document.getText()
			const lines = code.split(/\r?\n/g)

			const indentRegex = RegExp(`^([ \t]+)(.*)`)
			for (const line of lines) {
				const indentMatch = indentRegex.exec(line)
				if (!indentMatch) continue

				if (indentMatch[2].length === 0) {
					// Remove empty indented lines
					const range = new vscode.Range(
						new vscode.Position(lines.indexOf(line), 0),
						new vscode.Position(lines.indexOf(line), indentMatch[0].length)
					)
					edits.push(vscode.TextEdit.delete(range))
				} else if (indentMatch[1].includes(' ')) {
					// Replace spaces with tabs
					const range = new vscode.Range(
						new vscode.Position(lines.indexOf(line), 0),
						new vscode.Position(lines.indexOf(line), indentMatch[1].length)
					)
					const replacementTabs = indentMatch[1]
						.replaceAll(' '.repeat(options.tabSize), '\t')
						.replaceAll(' ', '')
					console.log(
						`Replacing spaces with tabs: "${indentMatch[1]}" -> "${replacementTabs}"`
					)
					edits.push(vscode.TextEdit.replace(range, replacementTabs))
				}
			}

			// const fileName = document.fileName
			// const srcPath = getRelativeSourcePath(document.uri)
			// console.log(`Formatting ${srcPath}`)
			// try {
			// 	const tokens = Tokenizer.tokenize(code, srcPath)
			// 	const ast = Parser.parseMcbFile(tokens)
			// 	console.log(ast)
			// 	edits.push(...formatMCBuildAST(document, options, token, ast))
			// } catch (e) {
			// 	vscode.window.showErrorMessage(`Tokenizer Error: ${(e as Error).message}`)
			// 	return edits
			// }

			return edits
		},
	})
}
