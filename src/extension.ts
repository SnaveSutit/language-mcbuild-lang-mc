import * as vscode from 'vscode'
import { formatMcb } from './formatter'
import type { McbFileKind } from './mcb'

const LANGUAGE_KINDS: Record<string, McbFileKind> = {
	'mc-build': 'mcb',
	'mc-build-template': 'mcbt',
}

export function activate(context: vscode.ExtensionContext) {
	console.log('MC-Build Extension Activated!')

	const provider: vscode.DocumentFormattingEditProvider = {
		provideDocumentFormattingEdits(document) {
			const kind = LANGUAGE_KINDS[document.languageId]
			if (!kind) return []

			const original = document.getText()
			let formatted: string
			try {
				formatted = formatMcb(original, kind)
			} catch (error) {
				// A parse error usually just means the file is mid-edit - leave it alone.
				console.warn(`MC-Build: skipped formatting ${document.fileName}:`, error)
				return []
			}

			if (formatted === original || formatted === '') return []

			const fullRange = new vscode.Range(
				document.positionAt(0),
				document.positionAt(original.length)
			)
			return [vscode.TextEdit.replace(fullRange, formatted)]
		},
	}

	for (const language of Object.keys(LANGUAGE_KINDS)) {
		context.subscriptions.push(
			vscode.languages.registerDocumentFormattingEditProvider(language, provider)
		)
	}
}

export function deactivate() {
	// nothing to clean up
}
