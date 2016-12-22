import { Component } from 'react'

import Arrow from '../arrow/arrow.react'
import ProjectsProject from './projects.project.react'

import store from '../store/store.react'
const { projects: { content: initialProjects } } = store

class ProjectsCarousel extends Component {
	constructor () {
		super()

		this.state = {
			current: 0,
			shift: 0,
			items: 4,
			projects: initialProjects.slice(0, 8)
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
				<div className="projects__wrap">
					<div
						className="projects__list _carousel"
						style={
							{
								transform: `translateX(-${all ? 0 : current * shift}px)`
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
			</div>
		)
	}
}

export default ProjectsCarousel
