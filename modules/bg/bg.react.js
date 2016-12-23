import React, {Component} from 'react'

import devices from '../config/config.sizes.react'
import config from '../config/config.react'

class Bg extends Component {
	constructor() {
		super()

		this.state = {
			sources: [],
			loaded: false
		}
	}
	componentWillMount() {
		window.Modernizr.on('webp', result => {
			let webp = false
			if (Object.keys(result).length > 0)webp = true

			this.setState({
				sources: this._getSources(webp)
			})
		})
	}
	componentWillUnmount() {
		this.setState({
			sources: []
		})
	}
	_getSources(webp) {
		const bg = this.props.bg
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
				src={bg}
				alt=""
				onLoad={::this._loaded}
			/>
		))

		return  sources
	}
	_loaded () {
		this.setState({
			loaded: true
		})
	}
	render() {
		return (
			<picture className={`bg ${this.state.loaded ? '_loaded' : '_loading'}`}>
				{this.state.sources}
			</picture>
		)
	}
}

export default Bg
