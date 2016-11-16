const { readFileSync, readFile } = require('fs')
const yaml = require('js-yaml')
const postxml = require('postxml')
const plugins = require('postxml-pack-alanev')

const { subsections: data} = yaml.safeLoad(readFileSync('data/services.yml').toString())

plugins.push((function () {
	return $ => {
		const slide = $('#services .section__slide').clone()
		$('#services .section__slide').remove()
		const wrapper = $('#services .section__wrapper')

		for (let subsection in data) {
			data[subsection].content.forEach((item, index) => {
				const newSlide = slide.clone()
				newSlide.find('.section__title').text(item.title)
				newSlide.find('.section__text').text(item.text)
				newSlide.find('.quote__text').text(item.quote)
				if (item.author) {
					newSlide.find('.quote__author').text(item.author)
				} else {
					newSlide.find('.quote__author').remove()
				}
				newSlide.find('.section__bg').css('background-image', `url(assets/images/uslugi_${subsection}_${index + 1}.jpg)`)

				wrapper.append(newSlide)
			})
		}
	}
})())

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
