const yaml = require('js-yaml')
const { readFileSync, mkdirSync, writeFileSync } = require('fs')
const stat = require('./utils/stat')

const tmpls = {
	'html': readFileSync(`${__dirname}/tmpls/.html`).toString(),
	'scss': readFileSync(`${__dirname}/tmpls/.scss`).toString(),
	'js': readFileSync(`${__dirname}/tmpls/.js`).toString()
}
const modules = yaml.safeLoad(readFileSync('modules.yml'))

for (let name in modules) {
	stat(`modules/${name}`)
		.catch(() => {
			mkdirSync(`modules/${name}`)
			writeFileSync(`modules/${name}/${name}.scss`, eval(`\`${tmpls.scss}\``))
			writeFileSync(`modules/${name}/${name}.html`, eval(`\`${tmpls.html}\``))
			if (modules[name] && modules[name].js)
				writeFileSync(`modules/${name}/${name}.js`, eval(`\`${tmpls.js}\``))
			console.log(`Module ${name} created`)
		})
}
