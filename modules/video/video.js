const video = document.querySelector('.video__source')
const button = document.querySelector('.video__button')
const preview = document.querySelector('.video__preview')

const className = '_hidden'

const play = () => {
	video.play()
	preview.classList.add(className)
}
const pause = () => {
	video.pause()
	preview.classList.remove(className)
}

module.exports = {
	init () {
		button.addEventListener('click', play)
		video.addEventListener('click', pause)
	}
}
