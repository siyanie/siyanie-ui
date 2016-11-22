import React, { Component } from 'react'

import Icon from '../icon/icon.react'

export default class Video extends Component {
	constructor () {
		super()

		this.className = '_hidden'
		this.state = {
			paused: true
		}
	}
	_toggle () {
		this.setState({
			paused: !this.state.paused
		})
		if (this.video.paused) {
			this.video.play()
		} else {
			this.video.pause()
		}
	}
	render () {
		const { paused } = this.state

		return (
			<div className="video section _active">
				<video
					className="video__source"
					width="1280"
					height="506"
					ref={video => this.video = video}
					onClick={this._toggle.bind(this)}>
					<source src="assets/video/siyanie.mp4" type="video/mp4" />
				</video>
				<div
					className={`video__preview ${!paused ? this.className : ''}`}>
					<div className="video__title">Дела важнее слов</div>
					<div
					className="video__button _hidden"
					onClick={this._toggle.bind(this)}>
						<Icon className="video__icon" icon="play" />
					</div>
				</div>
			</div>
		)
	}
}
