import { Component } from 'react'

import Arrow from '../arrow/arrow.react'
import ProjectsProject from './projects.project.react'

import config from '../config/config.react'

class ProjectsCarousel extends Component {
	constructor () {
		super()

		this.state = {
			current: 0,
			shift: 0,
			items: 4,
			projects: []
		}
	}
	_next () {
		let { current } = this.state
		if (++current <= this.state.projects.length - this.state.items) {
			this.setState({
				current
			})
		}
	}
	_prev () {
		let { current } = this.state
		if (--current >= 0) {
			this.setState({
				current
			})
		}
	}
	_setShift () {
		const item = this.refs.projects.querySelector('.projects__project')
		if (item) {
			this.setState({
				shift: item.offsetWidth
			})
		}
	}
	componentWillMount() {
		fetch(`${config.assets.data}projects.json`)
			.then(res => {
				return res.json()
			})
			.then(data => {
				this.setState({
					projects: data.content.slice(0, 8)
				})
			})
	}
	componentDidMount() {
		this._setShift()
		window.addEventListener('resize', ::this._setShift)
	}
	componentWillUnmount() {
		window.removeEventListener('resize', ::this._setShift)
	}
	render () {
		const {
			current,
			shift,
			items,
			projects
		} = this.state
		const { all } = this.props

		return (
			<div
				className="projects _carousel"
				ref="projects"
			>
				<div
					className="projects__list _carousel"
					style={
						{
							transform: `${all ? null : `translateX(-${all ? 0 : current * shift}px)`}`
						}
					}
				>
				{
					projects.map(({ id, preview_mid: preview }) => (
						<ProjectsProject
							id={id}
							preview={preview}
							key={`project--${id}`}
						/>
					))
				}
				</div>
				{
					!all
						? (
							<div className="projects__nav">
								<Arrow
									className={`slick-prev ${current === 0 ? 'slick-disabled' : ''}`}
									onClick={::this._prev}
								/>
								<Arrow
									className={`slick-next ${current === projects.length - items ? 'slick-disabled' : ''}`}
									onClick={::this._next}
								/>
							</div>
						)
						: null
				}
			</div>
		)
	}
}

export default ProjectsCarousel
