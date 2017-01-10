const yaml = require('js-yaml')
const { readFileSync, mkdirSync, writeFileSync } = require('fs')
const stat = require('./utils/stat')

const tmpls = {
	'jsx': readFileSync(`${__dirname}/tmpls/.jsx`).toString(),
	'scss': readFileSync(`${__dirname}/tmpls/.scss`).toString()
}
const modules = yaml.safeLoad(readFileSync('modules.yml'))

for (let name in modules) {
	stat(`modules/${name}`)
		.catch(() => {
			mkdirSync(`modules/${name}`)
			writeFileSync(`modules/${name}/${name}.scss`, eval(`\`${tmpls.scss}\``))
			writeFileSync(`modules/${name}/${name}.react.js`, eval(`\`${tmpls.jsx}\``))
			console.log(`Module ${name} created`)
		})
}
