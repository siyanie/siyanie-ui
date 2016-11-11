const className = '_active'
const defaultPage = 'main'

const { subsections: { about: { content: data}}} = require('../../data/about.yml')
const pAbout = require('../p-about/p-about.js')

const openSlide = () => {
	// const { title, text, quote, author } = data[index]

	// document.querySelector('.section__title').innerHTML = title
	// document.querySelector('.section__text').innerHTML = text
	// document.querySelector('.quote__text').innerHTML = quote
	// document.querySelector('.quote__author').innerHTML = author

	document.querySelector('.section._active').classList.remove(className)
	setTimeout(function() {
		document.querySelector('.section').classList.add(className)
	}, 5000)
}

module.exports = {
	openPage (pageName = defaultPage) {
		if (pageName === '') pageName = defaultPage
		document.querySelector('.section._active').classList.remove(className)
		document.querySelector(`.section#${pageName}`).classList.add(className)

		if (pageName === 'about') pAbout.init()
	},
	carouselInit () {
		const pag = document.querySelector('.section__pag')

		data.forEach((i, index) => {
			const dot = document.createElement('div')
			dot.classList.add('section__pag-item')
			dot.addEventListener('click', () => openSlide(index))
			pag.appendChild(dot)
		})
	}
}
