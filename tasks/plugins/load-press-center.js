module.exports = function (data) {
	return $ => {
		const slide = $('#press-center .section__slide').clone()
		$('#press-center .section__slide').remove()
		const wrapper = $('#press-center .section__wrapper')

		for (let subsection in data) {
			data[subsection].content.forEach(item => {
				const newSlide = slide.clone()
				newSlide.find('.section__date').text(item.date)
				newSlide.find('.section__title').text(item.title)
				newSlide.find('.section__text').text(item.text)
				newSlide.find('.quote__text').text(item.quote)
				if (item.author) {
					newSlide.find('.quote__author').text(item.author)
				} else {
					newSlide.find('.quote__author').remove()
				}
				newSlide.find('.section__bg').css('background-image', `url(assets/images/${item.bg})`)

				wrapper.append(newSlide)
			})
		}
	}
}
