const { readFileSync, readFile } = require('fs')
const yaml = require('js-yaml')
const postxml = require('postxml')
let plugins = require('postxml-pack-alanev')

const { subsections: dataServices } = yaml.safeLoad(readFileSync('data/services.yml').toString())
const { subsections: dataPressCenter } = yaml.safeLoad(readFileSync('data/press-center.yml').toString())

plugins = plugins.concat([
	require('./plugins/load-services.js')(dataServices),
	require('./plugins/load-press-center.js')(dataPressCenter)
])

const writeFile = require('./utils/writeFile')

const task = (
		input = 'src/index.html',
		output = 'build/index.html',
		callback = () => console.log('Templates processed')
) => {
	readFile(input, (err, data) => {
		if (err) throw new Error(err)
		let html = postxml(plugins).process(data)
		writeFile(output, html, callback)
	})
}

module.exports = task
