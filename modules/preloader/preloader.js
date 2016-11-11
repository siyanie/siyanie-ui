const preloader = document.querySelector('.preloader')
const className = '_hidden'
const hide = () => {
	preloader.classList.add(className)
}

module.exports = {
	init () {
		setTimeout(function () {
			hide()
		}, 500)
	}
}
