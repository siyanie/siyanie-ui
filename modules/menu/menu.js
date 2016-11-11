const { openPage } = require('../section/section.js')

const items = [...document.querySelectorAll('.menu__link')]
const logo = document.querySelector('.header__logo')
const className = '_active'

const removeActive = () => {
	const active = document.querySelector('.menu__link._active')
	if (active) active.classList.remove(className)
}

const handler = (e) => {
	e.preventDefault()

	removeActive()
	e.target.classList.add(className)

	let href = e.target.getAttribute('href')
	if (href) openPage(href.replace('#', ''))
	else openPage()
}

module.exports = {
	init () {
		logo.addEventListener('click', handler)
		items.forEach(item => item.addEventListener('click', handler))
		items[0].addEventListener('click', handler)
	}
}
