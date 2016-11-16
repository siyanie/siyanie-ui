const Swiper = require('swiper')

let slider

module.exports = {
	init (pageName) {

		if (slider) {
			slider.destroy(false)
		}

		const pagination = document.querySelector(`#${pageName} .swiper-pagination`)
		const quotes = [...document.querySelectorAll(`#${pageName} .section__footer`)]

		const changeHeight = (index = 0) => {
			pagination.style.transform = `translateY(-${quotes[index].clientHeight}px)`
		}
		const setSlideHeight = () => {
			document.querySelector(`#${pageName} .section__wrapper`).style.height = `${document.querySelector('.section._active').clientHeight}px`
		}
		slider = new Swiper(`#${pageName}.swiper-container`, {

			pagination: `#${pageName} .swiper-pagination`,
			paginationClickable: true,

			nextButton: `#${pageName} .swiper-button-next`,
			prevButton: `#${pageName} .swiper-button-prev`
		})

		setSlideHeight()
		changeHeight()
		slider.on('onSlideChangeStart', () => changeHeight(slider.realIndex))
		window.addEventListener('resize', setSlideHeight)
	}
}
