const Swiper = require('swiper')

module.exports = {
	init (pageName) {

		const pagination = document.querySelector(`#${pageName} .swiper-pagination`)
		const quotes = [...document.querySelectorAll(`#${pageName} .section__footer`)]

		const changeHeight = (index = 0) => {
			pagination.style.transform = `translateY(-${quotes[index].clientHeight}px)`
		}
		const setSlideHeight = () => {
			document.querySelector(`#${pageName} .section__wrapper`).style.height = `${document.querySelector('.section._active').clientHeight}px`
		}
		const aboutSlider = new Swiper(`#${pageName}.swiper-container`, {
			loop: true,

			pagination: `#${pageName}.swiper-pagination`,
			paginationClickable: true,

			nextButton: `#${pageName} .swiper-button-next`,
			prevButton: `#${pageName} .swiper-button-prev`
		})

		setSlideHeight()
		changeHeight()
		aboutSlider.on('onSlideChangeStart', () => changeHeight(aboutSlider.realIndex))
		window.addEventListener('resize', setSlideHeight)
	}
}
