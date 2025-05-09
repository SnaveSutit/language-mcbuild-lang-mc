import * as childProcess from 'child_process'
import * as vscode from 'vscode'

const log = vscode.window.createOutputChannel('MC-Build')

export class MCBuildProcess {
	public process: childProcess.ChildProcess | null = null
	public constructor() {}

	public startWatching(cwd: string, args: string[]) {
		if (this.process) {
			this.process.kill()
		}

		log.clear()
		log.show()
		log.appendLine('Starting MC-Build watcher...')

		this.process = childProcess.spawn('mcb', args, {
			stdio: 'pipe',
			shell: true,
			cwd,
		})

		this.process.stdout!.on('data', data => {
			const lines = data.toString().split('\n')
			for (const line of lines) {
				if (line.trim() === '') continue
				log.appendLine(line)
			}
		})

		this.process.stderr!.on('data', data => {
			const lines = data.toString().split('\n')
			for (const line of lines) {
				if (line.trim() === '') continue
				log.appendLine(line)
			}
		})

		this.process.on('exit', code => {
			if (code !== 0) {
				vscode.window.showErrorMessage('MC-Build process exited with code ' + code)
			}
		})
	}

	public build(cwd: string, args: string[]) {
		if (this.process) {
			this.process.kill()
		}

		log.clear()
		log.show()
		log.appendLine('Building with MC-Build...')

		this.process = childProcess.spawn('mcb', args, {
			stdio: 'pipe',
			shell: true,
			cwd,
		})

		this.process.stdout!.on('data', data => {
			const lines = data.toString().split('\n')
			for (const line of lines) {
				if (line.trim() === '') continue
				log.appendLine(line)
			}
		})

		this.process.stderr!.on('data', data => {
			const lines = data.toString().split('\n')
			for (const line of lines) {
				if (line.trim() === '') continue
				log.appendLine(line)
			}
		})

		this.process.on('exit', code => {
			if (code !== 0) {
				vscode.window.showErrorMessage('MC-Build process exited with code ' + code)
			}
		})
	}
}
