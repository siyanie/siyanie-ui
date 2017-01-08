import React, {Component} from 'react'
import { hashHistory } from 'react-router'

import config from '../config/config.react'
import Icon from '../icon/icon.react'

class ProjectsProject extends Component {
	constructor () {
		super()

		this.state = {
			preview: ''
		}
	}
	componentWillMount() {
		window.Modernizr.on('webp', result => {
			const preview = this.props.preview
			let webp = false
			if (Object.keys(result).length > 0)
				webp = true

			this.setState({
				preview: preview.replace(/\.(jpg|jpeg|png)$/i, `--phone@1${webp ? '.webp': '$&'}`)
			})
		})
	}
	_click() {
		const elRect = this.refs.link.getBoundingClientRect()
		this.bg = this.refs.bg.cloneNode()

		Object.assign(this.bg.style, {
			maxWidth: `${elRect.width}px`,
			maxHeight: `${elRect.height}px`,
			top: `${elRect.top}px`,
			left: `${elRect.left}px`
		})
		document.body.appendChild(this.bg)

		setTimeout(() => {
			this.bg.classList.add('_open')
		}, config.transtion)
		setTimeout(() => {
			this.bg.classList.add('_hidden')

			setTimeout(() => {
				this.bg.remove()
				delete this.bg
			}, config.transtion * 2)
		}, config.trs)

		hashHistory.push(`/project/${this.props.id}`)
	}
	render() {
		const {
			id
		} = this.props
		const {
			preview
		} = this.state

		return (
			<span
				className="projects__project"
				to={`/project/${id}`}
				onClick={::this._click}
				ref="link"
			>
				<div
					className="projects__bg"
					ref="bg"
					style={
						preview
						? {
							backgroundImage: `url(${config.assets.images}${preview})`
						}
						: null
					}
				></div>
				<Icon
					className="projects__logo"
					icon={`logo-${id}`}
				/>
				<div className="projects__loupe">
					<Icon
						className="projects__icon"
						icon="search"
					/>
				</div>
			</span>
		)
	}
}

export default ProjectsProject
