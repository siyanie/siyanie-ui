const {readFile} = require('fs')

const postcss = require('postcss')
const parser = require('postcss-scss')
const plugins = require('./plugins/postcss')
const writeFile = require('./utils/writeFile')

const callback = () => console.log('Styles processed')

const task = (
	input = 'src/styles.scss',
	output = 'build/styles.css'
) => {
	readFile(input, (err, data) => {
		if (err) throw new Error(err)
		postcss(plugins)
			.process(data.toString(), {
				parser,
				from: input,
				to: output
			})
			.then(({css}) => {
				writeFile(output, css)
					.then(callback)
			})
			.catch(console.error)
	})
}

module.exports = task
