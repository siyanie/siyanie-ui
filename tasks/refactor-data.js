const readFile = require('./utils/readFile')
const writeFile = require('./utils/writeFile')
const { assign } = Object
const file = 'services'

readFile(`data/${file}.json`)
	.then(DATA => {
		const { subsections: data, name } =JSON.parse(DATA)

		for(let key in data) {
			const { content } = data[key]
			content.map((item, index) => {
				const { bg } = item
				if (!bg)
					assign(item, {
						bg: `${file}_${key}_${index + 1}.jpg`
					})

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
