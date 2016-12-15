const { readFile } = require('fs')
const postxml = require('postxml')
const plugins = require('postxml-pack-alanev')

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
