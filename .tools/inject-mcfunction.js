const fs = require('fs')

const MC_LANG_URL =
	'https://raw.githubusercontent.com/MinecraftCommands/syntax-mcfunction/main/mcfunction.tmLanguage.json'

const SYNTAX_OUT_PATH = './syntaxes/syntax-mcfunction/mcfunction.tmLanguage.json'

function inject_lang_mc_syntax(json) {
	delete json.fileTypes
	json.scopeName = 'source.injected-mcfunction'
	json.uuid = 'a339b5ad-d627-4019-a062-1fec13f43274'
	json.repository['inline-js'] = {
		patterns: [
			{
				captures: {
					1: {
						name: 'punctuation.definition.template-expression.begin.lang-mc',
					},
					2: {
						name: 'inline-js',
						patterns: [
							{
								include: 'source.js',
							},
						],
					},
					3: {
						name: 'punctuation.definition.template-expression.end.lang-mc',
					},
				},
				match: '(<%)(.+?)(%>)',
				name: 'meta.inline-js',
			},
		],
	}
	const INCLUDE_INLINE_JS = { include: '#inline-js' }
	// Add inline-js to all patterns that need it.
	json.repository['root'].patterns.unshift(INCLUDE_INLINE_JS)
	json.repository['literals_string-single'].patterns.splice(1, 0, INCLUDE_INLINE_JS)
	json.repository['names'].patterns.splice(7, 0, INCLUDE_INLINE_JS)
	json.repository['property'].patterns.forEach(pattern => {
		pattern.patterns.unshift(INCLUDE_INLINE_JS)
	})
	// FIXME These will need to change every time they are updated in the original mcfunction syntax.
	json.repository['resource-name'].patterns[0].match = '#?[a-z_][a-z\\_\\.\\-]*:((<%)(.+?)(%>))?[a-z0-9_\\.\\/\\-]+'

	const doubleQuotesString = json.repository['literals'].patterns.find(
		v => v.captures && v.captures[0] && v.captures[0].name === 'string.quoted.double.mcfunction'
	)
	if (!doubleQuotesString) {
		throw new Error('Could not find doubleQuotesString')
	}
	doubleQuotesString.patterns.unshift(INCLUDE_INLINE_JS)

	const singleQuotesString = json.repository['literals'].patterns.find(
		v => v.captures && v.captures[0] && v.captures[0].name === 'string.quoted.single.mcfunction'
	)
	if (!singleQuotesString) {
		throw new Error('Could not find singleQuotesString')
	}
	singleQuotesString.patterns.unshift(INCLUDE_INLINE_JS)

	// Fix inline comments incorrectly ignoring inline-js blocks.
	json.repository.comments.patterns[1].match = '$#(?!<%).*$'
}

async function main() {
	const data = await fetch(MC_LANG_URL)
	const json = await data.json()
	inject_lang_mc_syntax(json)
	fs.writeFileSync(SYNTAX_OUT_PATH, JSON.stringify(json, null, '\t'))
}

void main()
