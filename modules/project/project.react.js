import { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import MediaQuery from 'react-responsive'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Hammer from 'hammerjs'

import config from '../config/config.react'
import store from '../store/store.react'
import Bg from '../bg/bg.react'
import Icon from '../icon/icon.react'
import Arrow from '../arrow/arrow.react'

const projects = store.projects.content

class Project extends Component {
	constructor (props) {
		super(props)

		const projectId = props.id || props.params.project

		this.project = projects.find(({ id }, index) => {
			if (id === projectId) {
				this.current = index
				return true
			}
			return false
		})

		this.state = {
			loaded: false,
			bgIndex: 0,
			firstBg: null,
			bgs: null
		}
		this._prevBg = this._prevBg.bind(this)
		this._nextBg = this._nextBg.bind(this)
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
	_prevBg () {
		if (this.state.bgIndex <= 0) {
			this._handleDot(this.state.bgs.length - 1)()
		} else {
			this._handleDot(this.state.bgIndex - 1)()
		}
	}
	_setBgs () {
		window.Modernizr.on('webp', result => {
			let { bgs } = this.project
			if (Object.keys(result).length > 0)
				bgs = bgs.map(bg => bg.replace(/(jpg|jpeg|png)$/, 'webp'))

			this.setState({
				firstBg: bgs[0]
			})
			this.bgs = bgs
		})
	}
	_toggle(index) {
		hashHistory.push(`/project/${projects[index].id}`)
	}
	_next () {
		let { current } = this
		if (++current < projects.length) {
			this._toggle(current)
		} else {
			this._toggle(0)
		}
	}
	_prev () {
		let { current } = this
		if (--current >= 0) {
			this._toggle(current)
		} else {
			this._toggle(projects.length - 1)
		}
	}
	_onLoad() {
		this.setState({
			bgs: this.bgs
		})
	}
	componentDidMount() {
		this._setBgs()
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})

		this.hammer = new Hammer(this.refs.bgs)
		this.hammer.on('swipeleft', this._nextBg)
		this.hammer.on('swiperight', this._prevBg)
	}
	componentWillUnmount() {
		this.hammer.off('swipeleft', this._nextBg)
		this.hammer.off('swiperight', this._prevBg)
	}
	render () {
		const {
			current,
			state: {
				loaded,
				bgIndex,
				firstBg,
				bgs
			},
			project: {
				id,
				square,
				date,
				text,
				address,
				title
			}
		} = this

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
					<div
						className="project__bgs"
						ref="bgs"
					>
					{
						firstBg
							? (
								<div
									key={`project__bg--${firstBg}`}
									className={`project__bg ${0 === bgIndex ? '_active' : ''}`}
								>
									<Bg bg={firstBg} onLoad={::this._onLoad} />
								</div>
							)
							: null
					}
					{
						bgs
							? bgs.slice(1).map((bg, index) => (
								<div
									key={`project__bg--${bg}`}
									className={`project__bg ${index + 1 === bgIndex ? '_active' : ''}`}
								>
									<Bg bg={bg} />
								</div>
							))
							: null
					}
					</div>
					<MediaQuery query="(max-width:1023px)">
						<Arrow
							className="slick-prev project__prevBg"
							onClick={this._prevBg}
						/>
					</MediaQuery>
					<Arrow
						className="slick-next project__nextBg"
						onClick={this._nextBg}
					/>
					<div className="project__content">
						<div className="project__info">
							<div className="project__logotype">
								<MediaQuery query="(max-width: 1023px)">
									<div
										className={`project__arrow _prev ${current === 0 ? '_disabled' : ''}`}
										onClick={::this._prev}
									>
										<Icon
											className="project__arrow-icon"
											icon="arrow"
										/>
									</div>
								</MediaQuery>
								<Icon
									className="project__logo"
									icon={`logo-${id}`}
								/>
								<MediaQuery query="(max-width: 1023px)">
									<div
										className={`project__arrow _next ${current === projects.length ? '_disabled' : ''}`}
										onClick={::this._next}
									>
										<Icon
											className="project__arrow-icon"
											icon="arrow"
										/>
									</div>
								</MediaQuery>
							</div>
							<div className="project__data">
								<div className="project__square">{square}</div>
								<div className="project__date">{date}</div>
							</div>
							<MediaQuery query="(min-width: 1024px)">
								<div className="project__text">{text}</div>
								<div className="project__address">{address}</div>
							</MediaQuery>
						</div>
							<div className="project__footer">
								<MediaQuery query="(min-width: 1024px)">
									<div className="project__slogan">{title}</div>
								</MediaQuery>
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
								<MediaQuery query="(min-width: 1024px)">
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
								</MediaQuery>
							</div>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
}

export default Project
