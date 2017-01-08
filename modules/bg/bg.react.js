import React, {Component} from 'react'

import devices from '../config/config.sizes.react'
import config from '../config/config.react'
import utils from '../utils/utils.react'

class Bg extends Component {
	constructor() {
		super()

		this.state = {
			sources: [],
			loaded: false,
			bg: null
		}
	}
	componentWillMount() {
		window.Modernizr.on('webp', result => {
			const webp = Object.keys(result).length > 0

			this.setState({
				bg: this._setBg(webp)
			})
		})
	}
	componentWillUnmount() {
		this.setState({
			sources: []
		})
	}
	_getSources(webp) {
		const { bg } = this.props
		const sources = []

		for (let device in devices) {
			const [width] = devices[device]
			const base = config.assets.images
			const ext = webp ? '.webp' : '$&'

			const srcset = [1, 2].map(dpi => {
				return `${base}${bg.replace(/\.\w{3,4}$/, `--${device}@${dpi}${ext}`)} ${dpi}x`
			})

			sources.push((
				<source
					key={srcset[0]}
					srcSet={srcset.join(',')}
					media={`(min-width: ${width - 1}px)`}
				/>
			))
		}
		sources.push((
			<img
				key={`bg__image--${bg}`}
				className="bg__image"
				src={config.assets.images + bg.replace(/\.(jpg|jpeg|png)$/i, '--desktop@1$&')}
				alt=""
				onLoad={::this._loaded}
			/>
		))

		return sources
	}
	_getDevice() {
		const vw = window.innerWidth
		return Object.keys(devices).find(device => {
			const [width] = devices[device]
			return vw > width
		}) || 'phone'
	}
	_setBg(webp) {
		const { bg } = this.props
		const BG = bg.split('.')

		return (
			<img
				className="bg__image"
				width={window.innerWidth}
				height={window.innerHeight}
				src={`${config.assets.images}${BG[0]}--${this._getDevice()}@${utils.getDPI()}.${webp ? 'webp' : BG[1]}`}
				alt=""
				onLoad={::this._loaded}
			/>
		)
	}
	_loaded () {
		const { onLoad } = this.props
		this.setState({
			loaded: true
		})

		if (onLoad) onLoad()
	}
	render() {
		const { className } = this.props
		return (
			<div className={`${className ? className : ''} bg ${this.state.loaded ? '_loaded' : '_loading'}`}>
				{this.state.bg}
			</div>
		)
	}
}

export default Bg
