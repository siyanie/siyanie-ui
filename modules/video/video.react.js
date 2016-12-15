import React, { Component } from 'react'

import Icon from '../icon/icon.react'

const videoRect = {
	width: 1280,
	height: 500
}
const getSize = (fullSize, videoSize) => {
	if (fullSize.height / videoSize.height > fullSize.width / videoSize.width) {
		return {
			width: 'auto',
			height: '100%'
		}
	}
	return {
		width: '100%',
		height: 'auto'
	}
}

export default class Video extends Component {
	constructor () {
		super()

		this.className = '_hidden'
		this.state = {
			open: false
		}
	}
	_toggle () {
		const { video } = this.refs
		if (video.paused) {
			video.currentTime = 0
			video.play()
		} else {
			video.pause()
		}
		this.setState({
			open: !this.state.open
		})
	}
	_videoSize () {
		Object.assign(
			this.refs.bg.style,
			getSize({
				width: this.refs.wrap.clientWidth,
				height: this.refs.wrap.clientHeight,
			}, videoRect)
		)
	}
	componentDidMount () {
		this._videoSize()

		window.addEventListener('resize', ::this._videoSize())
	}
	componentWillUnmount () {
		window.removeEventListener('resize', ::this._videoSize())
	}
	render () {
		const { open } = this.state

		return (
			<div
				ref="wrap"
				className={`video ${open ? 'video--open' : 'video--closed'}`}
			>
				<video
					className="video__bg"
					width="1280"
					height="506"
					loop
					muted
					autoPlay
					ref="bg"
				>
					<source src="assets/video/siyanie.mp4" type="video/mp4" />
				</video>
				<div
					className="video__full"
					onClick={::this._toggle}
				>
					<video
						ref="video"
						className="video__source"
					>
						<source src="assets/video/fullvideo.mp4" type="video/mp4" />
					</video>
				</div>
				<div
					className="video__preview"
					onClick={::this._toggle}
				>
					<div className="video__info">
						<div className="video__title">Дела важнее слов</div>
						<div className="video__button _hidden">
							<Icon className="video__icon" icon="play" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
