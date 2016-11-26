import React, { Component } from 'react'

import Icon from '../icon/icon.react'

const videoDelay = 300
const videoRect = {
	width: 1280,
	height: 506
}

export default class Video extends Component {
	constructor () {
		super()

		this.className = '_hidden'
		this.state = {
			paused: true,
			width: '100%',
			height: 'auto'
		}
	}
	_toggle () {
		this.setState({
			paused: !this.state.paused
		})
		if (this.video.paused) {
			setTimeout(() => {
				this.video.play()
			}, videoDelay)
		} else {
			this.video.pause()
		}
	}
	_videoSize () {
		const { clientWidth: width, clientHeight: height } = this.wrap
		let size = {}

		if (height / videoRect.height > width / videoRect.width) {
			size.width = 'auto'
			size.height = '100%'
		} else {
			size.width = '100%',
			size.height = 'auto'
		}
		Object.assign(this.video.style, size)
	}
	componentDidMount () {
		this._videoSize()

		window.addEventListener('resize', () => this._videoSize())
	}
	render () {
		const { paused } = this.state

		return (
			<div
				ref={wrap => this.wrap = wrap}
				className={`video section _active ${paused ? 'video--paused' : 'video--played'}`}
			>
				<video
					className="video__source"
					width="1280"
					height="506"
					ref={video => this.video = video}
					onClick={this._toggle.bind(this)}
				>
					<source src="assets/video/siyanie.mp4" type="video/mp4" />
				</video>
				<div
					className="video__preview"
					onClick={this._toggle.bind(this)}>
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
