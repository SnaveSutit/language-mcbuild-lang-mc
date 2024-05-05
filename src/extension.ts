import * as vscode from 'vscode'
import * as mcbuild from 'mc-build'
import * as fs from 'fs'
import * as pathjs from 'path'
import { VariableMap } from 'mc-build/dist/mcl/Compiler'
// import * as crypto from 'crypto'

export async function activate(context: vscode.ExtensionContext) {
	console.log('MCBuild Activated!')

	vscode.commands.registerCommand('mc-build.build', async () => {
		if (!vscode.workspace.workspaceFolders) {
			vscode.window.showErrorMessage('No workspace folder found!')
			return
		}

		const workspaceFolder = vscode.workspace.workspaceFolders[0]
		const rootFolder = workspaceFolder.uri.fsPath
		const configJsFile = pathjs.join(rootFolder, 'mcb.config.js')
		const configJSONFile = pathjs.join(rootFolder, 'mcb.config.json')
		const srcFolder = pathjs.join(rootFolder, 'src')
		// const mcbFolder = pathjs.join(rootFolder, '.mcb')
		// const mcbFsCache = pathjs.join(mcbFolder, 'fs-cache.txt')

		if (!fs.existsSync(srcFolder)) {
			vscode.window.showErrorMessage(`No src folder found!`)
			return
		}

		let config: any = {}
		try {
			if (fs.existsSync(configJsFile)) {
				config = eval(await fs.promises.readFile(configJsFile, 'utf8'))
			} else if (fs.existsSync(configJSONFile)) {
				config = JSON.parse(await fs.promises.readFile(configJSONFile, 'utf8'))
			} else {
				vscode.window.showErrorMessage(`No config file found!`)
				return
			}
		} catch (e) {
			vscode.window.showErrorMessage(`Error parsing MCBuild config file: ${e}`)
			return
		}
		console.log('Config:', config)

		console.log('Building...')
		const compiler = new mcbuild.Compiler(srcFolder, config)

		const fileCache = new Map<string, string>()
		const customIO = new mcbuild.SyncIo()
		customIO.write = (localPath, content) => {
			const writePath = pathjs.join(rootFolder, localPath)
			console.log('Write:', writePath)
			fileCache.set(writePath, content)
		}
		compiler.io = customIO

		async function recurseSrc(path: string) {
			console.log('Recurse:', path)
			if (!fs.existsSync(path)) return
			const stat = await fs.promises.stat(path)
			if (stat.isDirectory()) {
				const files = await fs.promises.readdir(path)
				for (const file of files) {
					await recurseSrc(pathjs.join(path, file))
				}
			} else {
				const content = await fs.promises.readFile(path, 'utf8')
				const tokens = mcbuild.Tokenizer.tokenize(content, path)
				switch (pathjs.extname(path)) {
					case '.mcb': {
						const ast = mcbuild.Parser.parseMcbFile(tokens)
						compiler.addFile(path, ast)
						break
					}
					case '.mcbt': {
						const ast = mcbuild.Parser.parseMcbtFile(tokens)
						compiler.addFile(path, ast)
						break
					}
				}
			}
		}

		await recurseSrc(srcFolder)
		console.log('Compiling...')
		try {
			compiler.compile(VariableMap.fromObject({}))
		} catch (e) {
			vscode.window.showErrorMessage(`Encountered error compiling MCBuild Project: ${e}`)
			return
		}
		console.log('Compiled!')

		console.log('File cache:', fileCache)
		console.log('Writing files...')

		const folderCache = new Set<string>()
		for (const [path, content] of fileCache) {
			const dirName = pathjs.dirname(path)
			if (!folderCache.has(dirName)) {
				await fs.promises.mkdir(dirName, { recursive: true })
				folderCache.add(dirName)
			}
			await fs.promises.writeFile(path, content, 'utf8')
		}

		console.log('Build complete!')
		vscode.window.showInformationMessage('Build complete!')
	})

	vscode.commands.registerCommand('mc-build.watch', async () => {
		console.log('Watching...')
	})
}
