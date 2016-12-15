const yaml = require('js-yaml')

const readFile = require('./tasks/utils/readFile')
const writeFile = require('./tasks/utils/writeFile')
const { assign } = Object
const file = 'about'

readFile(`data/${file}.yml`)
	.then(DATA => {
		const { subsections: data, name } = yaml.safeLoad(DATA)

		for(let key in data) {
			const { content } = data[key]
			content.map(item => {
				const { quote, author, text } = item

				if (text || text === null) {
					assign(item, {
						main: {
							type: 'text',
							content: text
						}
					})
					delete item.text
				}
				if (quote) {
					assign(item, {
						quote: {
							text: quote
						}
					})
					if (author || author === null) {
						assign(item.quote, {
							author
						})
						delete item.author
					}
				}
				return item
			})
		}
		writeFile(
			`data/${file}.json`,
			JSON.stringify(
				{
					name,
					subsections: data
				},
				'',
				'\t'
			)
		).then(() => console.log('DONE!'))
	})
