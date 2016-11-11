const Swiper = require('swiper')

const pagination = document.querySelector('.swiper-pagination')
const quotes = [...document.querySelectorAll('.section__footer')]

const changeHeight = (index = 0) => {
	pagination.style.transform = `translateY(-${quotes[index].clientHeight}px)`
}
const setSlideHeight = () => {
	document.querySelector('.section__wrapper').style.height = `${document.querySelector('.section._active').clientHeight}px`
}

module.exports = {
	init () {
		const aboutSlider = new Swiper('.swiper-container', {
			loop: true,

			// If we need pagination
			pagination: '.swiper-pagination',
			paginationClickable: true,

			// Navigation arrows
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})

		setSlideHeight()
		changeHeight()
		aboutSlider.on('onSlideChangeStart', () => changeHeight(aboutSlider.realIndex))
		window.addEventListener('resize', setSlideHeight)
	}
}
