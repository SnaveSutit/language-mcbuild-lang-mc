import * as vscode from 'vscode'
// import * as fs from 'fs'
// import * as pathjs from 'path'
// import { VariableMap } from 'mc-build/dist/mcl/Compiler'
// import * as childProcess from 'child_process'

export async function activate(context: vscode.ExtensionContext) {
	console.log('MC-Build Extension Activated!')

	// const process = childProcess
	// 	.spawn('mcb', {
	// 		stdio: 'pipe',
	// 		shell: true,
	// 	})
	// 	.on('exit', code => {
	// 		if (code !== 0) {
	// 			vscode.window.showErrorMessage(
	// 				'MC-Build is not installed!\nPlease install it by running `npm i -g mc-build@latest`'
	// 			)
	// 		} else {
	// 			console.log('MC-Build is installed!')
	// 		}
	// 	})
	// 	.on('error', err => {
	// 		vscode.window.showErrorMessage(
	// 			'MC-Build is not installed!\nPlease install it by running `npm i -g mc-build@latest`'
	// 		)
	// 	})

	// vscode.commands.registerCommand('mc-build.select-project', async () => {
	// 	vscode.window.showQuickPick(['a', 'b', 'c'], {
	// 		placeHolder: 'Select the folder for your mcbuild project',
	// 	})
	// })

	// vscode.commands.registerCommand('mc-build.build', async () => {
	// 	if (!vscode.workspace.workspaceFolders) {
	// 		vscode.window.showErrorMessage('No workspace folder found!')
	// 		return
	// 	}

	// 	const workspaceFolder = vscode.workspace.workspaceFolders[0]

	// 	// const rootFolder = workspaceFolder.uri.fsPath

	// 	// console.log('Build complete!')
	// 	// vscode.window.showInformationMessage('Build complete!')
	// })

	// vscode.commands.registerCommand('mc-build.watch', async () => {
	// 	console.log('Watching...')
	// })
}
