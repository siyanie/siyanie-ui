module.exports = function (data) {
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
}
