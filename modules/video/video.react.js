import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import config from '../config/config.react'
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
		this.setState({
			open: !this.state.open
		})
	}
	_close() {
		const { video } = this.refs
		video.pause()
		this._toggle()
	}
	_open() {
		const { video } = this.refs
		video.currentTime = 0
		video.play()
		this._toggle()
	}
	render () {
		const { open } = this.state

		return (
			<div
				ref="wrap"
				className={`video ${open ? 'video--open' : 'video--closed'}`}
			>
				<MediaQuery query="(min-width: 1025px)">
					<video
						className="video__bg"
						width="1280"
						height="506"
						preload="none"
						loop
						muted
						autoPlay
					>
						<source src={`${config.assets.videos}siyanie.mp4`} type="video/mp4" />
					</video>
				</MediaQuery>
				<div
					className="video__full"
					onClick={::this._close}
				>
					<video
						ref="video"
						width="1280"
						height="506"
						className="video__source"
					>
						<source src={`${config.assets.videos}fullvideo.mp4`} type="video/mp4" />
					</video>
				</div>
				<div
					className="video__preview"
					onClick={::this._open}
				>
					<div className="video__info">
						<div className="video__title">
							<MediaQuery query="(min-width: 1024px)">
								Дела важнее слов
							</MediaQuery>
							<MediaQuery query="(max-width: 1023px)">
								Сияние<br />генподряд
							</MediaQuery>
						</div>
						<div className="video__button _hidden">
							<Icon className="video__icon" icon="play" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
