import { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'

import config from '../config/config.react'
import store from '../store/store.react'
import Icon from '../icon/icon.react'
import Arrow from '../arrow/arrow.react'

const projects = store.projects.content

class Project extends Component {
	constructor (props) {
		super(props)

		const projectId = props.id || props.params.project
		const project = projects.find(({ id }) => id === projectId)
		this.state = {
			bgIndex: 0,
			bgs: null,
			current: projects.indexOf(project)
		}
	}
	_handleDot (index) {
		return () => {
			this.setState({
				bgIndex: index
			})
		}
	}
	_nextBg () {
		if (this.state.bgIndex >= this.state.bgs.length - 1) {
			this._handleDot(0)()
		} else {
			this._handleDot(this.state.bgIndex + 1)()
		}
	}
	_setBgs () {
		window.Modernizr.on('webp', result => {
			let bgs = projects[this.state.current].bgs
			if (Object.keys(result).length > 0)
				bgs = bgs.map(bg => bg.replace(/(jpg|jpeg|png)$/, 'webp'))

			this.setState({
				bgs
			})
		})
	}
	_toggle(index) {
		this.setState({
			current: index,
			bgIndex: 0
		})
		this._setBgs()
	}
	_next () {
		let { current } = this.state
		if (++current <= projects.length) {
			this._toggle(current)
		}
	}
	_prev () {
		let { current } = this.state
		if (--current >= 0) {
			this._toggle(current)
		}
	}
	componentDidMount() {
		this._setBgs()
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}
	render () {
		const {
			loaded,
			bgIndex,
			bgs,
			current
		} = this.state
		const {
			id,
			square,
			date,
			text,
			address,
			title
		} = projects[current]

		return (
			<ReactCSSTransitionGroup
				component="div"
				className="project__wrap"
				transitionName="anim"
				transitionLeaveTimeout={config.trs * 2}
				transitionEnterTimeout={config.trs * 2}
			>
				<div
					key={`project--${id}`}
					className={`project ${loaded ? '_loaded' : '_no_loaded' }`}
				>
					{
						bgs
						? bgs.map((bg, index) => (
							<div
								className={`project__bg ${index === bgIndex ? '_active' : ''}`}
								key={`project__bg--${index}`}
								style={
									{
										backgroundImage: `url(assets/images/${bg})`
									}
								}
							></div>
						))
						: null
					}
					<Arrow
						className="slick-next project__nextBg"
						onClick={::this._nextBg}
					/>
					<div className="project__content">
						<div className="project__info">
							<div className="project__logotype">
								<Icon
									className="project__logo"
									icon={`logo-${id}`}
								/>
							</div>
							<div className="project__square">{square}</div>
							<div className="project__date">{date}</div>
							<div className="project__text">{text}</div>
							<div className="project__address">{address}</div>
						</div>
						<div className="project__footer">
							<div className="project__slogan">{title}</div>
							<div className="project__dots">
								{
									bgs
									? bgs.map((url, index) =>
										<div
											key={`project__dot${index}`}
											className={`project__dot ${index === bgIndex ? '_active' : ''}`}
											onClick={::this._handleDot(index)}
										></div>
									)
									: null
								}
							</div>
							<div className="project__nav">
								<div
									className={`project__arrow _prev ${current === 0 ? '_disabled' : ''}`}
									onClick={::this._prev}
								>
									<Icon
										className="project__arrow-icon"
										icon="arrow"
									/>
								</div>
								<Link
									to="/projects?all=true"
									className="project__all"
								>Все проекты</Link>
								<div
									className={`project__arrow _next ${current === projects.length ? '_disabled' : ''}`}
									onClick={::this._next}
								>
									<Icon
										className="project__arrow-icon"
										icon="arrow"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
}

export default Project
