import * as path from 'path'
import Mocha from 'mocha'
import glob from 'glob'

export function run(): Promise<void> {
	const mocha = new Mocha({ ui: 'tdd', color: true, timeout: 20000 })
	const testsRoot = path.resolve(__dirname, '..')

	for (const file of glob.sync('**/*.test.js', { cwd: testsRoot })) {
		mocha.addFile(path.resolve(testsRoot, file))
	}

	return new Promise((resolve, reject) => {
		mocha.run(failures => {
			if (failures > 0) reject(new Error(`${failures} tests failed.`))
			else resolve()
		})
	})
}
