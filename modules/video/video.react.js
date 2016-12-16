import React, { Component } from 'react'

import Icon from '../icon/icon.react'

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
