import * as vscode from 'vscode'
import * as fs from 'fs'
import * as pathjs from 'path'
import { VariableMap } from 'mc-build/dist/mcl/Compiler'
import * as childProcess from 'child_process'
// import * as crypto from 'crypto'

function runMCB(args: string[]) {
	const process = childProcess.spawn('mcb', args, {
		stdio: 'pipe',
		shell: true,
	})
}

export async function activate(context: vscode.ExtensionContext) {
	console.log('MCBuild Activated!')

	// const process = childProcess
	// 	.spawn('npm', ['i', '-g', 'mc-build@latest'], {
	// 		stdio: 'pipe',
	// 		shell: true,
	// 	})
	// 	.on('exit', code => {
	// 		if (code !== 0) {
	// 			vscode.window.showErrorMessage('Failed to install mc-build!')
	// 		}
	// 	})
	// 	.on('error', err => {
	// 		vscode.window.showErrorMessage('Failed to install mc-build!')
	// 	})

	// process.stdout!.on('data', data => {
	// 	console.log(data.toString())
	// })

	// process.stderr!.on('data', data => {
	// 	console.log(data.toString())
	// })

	vscode.commands.registerCommand('mc-build.build', async () => {
		if (!vscode.workspace.workspaceFolders) {
			vscode.window.showErrorMessage('No workspace folder found!')
			return
		}

		const workspaceFolder = vscode.workspace.workspaceFolders[0]
		const rootFolder = workspaceFolder.uri.fsPath

		// childProcess.ex

		console.log('Build complete!')
		vscode.window.showInformationMessage('Build complete!')
	})

	vscode.commands.registerCommand('mc-build.watch', async () => {
		console.log('Watching...')
	})
}
