import { Component } from 'react'
import MediaQuery from 'react-responsive'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import config from '../config/config.react'
import Slides from '../slide/slides.react'
import Arrow from '../arrow/arrow.react'

import store from '../store/store.react'

const defaultState = {
	activeSlide: 0,
	footerHeight: null
}

export default class Section extends Component {
	constructor () {
		super()

		this.state = defaultState
	}
	_select (activeSlide) {
		return () => {
			if (activeSlide < 0) return
			if (activeSlide >= this.slides.length) return

			if (activeSlide !== this.state.activeSlide) {
				this.setState({
					activeSlide
				})

				const event = new CustomEvent('dot', {
					detail: activeSlide
				})
				window.dispatchEvent(event)
			}
		}
	}
	_prev () {
		let { activeSlide } = this.state
		if (activeSlide-- <= 0) return
		this._select(activeSlide)()
	}
	_next () {
		let { activeSlide } = this.state
		if (++activeSlide >= this.slides.length) return
		this._select(activeSlide)()
	}
	_footer () {
		const footer = document.querySelector('.slides.anim-enter .slide__footer')
		const unicFooter = document.querySelector('.slides:only-child .slide__footer')
		this.setState({
			footerHeight: footer ? footer.clientHeight : unicFooter ? unicFooter.clientHeight: 0
		})
	}
	componentWillReceiveProps (nextProps) {
		const { section, subsection } = nextProps.params

		if (
			this.section && this.section !== section ||
			this.subsection && this.subsection !== subsection
		) {
			this._select(defaultState.activeSlide)()
		}

		// Хак для позионирования точек
		// пришлось использовать, т.к. не смог подключиться к событиям анимации (
		setTimeout(::this._footer, config.trs)
	}
	componentDidMount() {
		this._footer()
	}
	render () {
		const {
			params,
			params: {
				section,
				subsection
			}
		} = this.props
		this.section = section
		this.subsection = subsection
		this.subsectionData = store.sections[section].subsections[subsection]
		this.slides = this.subsectionData.content

		const video = this.subsectionData.videoBg
		const {
			activeSlide,
			footerHeight
		} = this.state

		return (
			<div
				className="section _active"
				ref="section"
			>
				<ReactCSSTransitionGroup
					component="div"
					className="g-page__wrapper"
					transitionName="anim"
					transitionEnterTimeout={config.trs * 2}
					transitionLeaveTimeout={config.trs * 2}
				>
					<Slides
						ref="slides"
						key={`slides--${subsection}`}
						slides={this.slides}
						video={video}
						activeSlide={activeSlide}
						params={params}
						selectSlide={::this._select}
					/>
				</ReactCSSTransitionGroup>
				{
					this.slides.length > 1 && (!(section == 'about' && subsection == 'history'))
						? (
							<div className="section__nav">
								<div
									className="section__pag"
									style={
										footerHeight
										? {
											transform: `translateY(-${footerHeight}px)`
										}
										: null
									}
								>
								{
									this.slides.map((item, index) => {
										let activeClass = ''
										if (index === activeSlide) {
											activeClass = '_active'
										}
										return (
											<div
												key={index}
												className={`section__dot ${activeClass}`}
												onClick={this._select(index)}
											/>
										)
									})
								}
								</div>
								<MediaQuery query="(min-width: 1024px)">
									<div className="section__arrows">
										<Arrow
											className={`_prev ${activeSlide === 0 ? '_disabled' : ''}`}
											onClick={this._prev.bind(this)}
										/>
										<Arrow
											className={`_next ${activeSlide === this.slides.length - 1 ? '_disabled' : ''}`}
											onClick={this._next.bind(this)}
									/>
									</div>
								</MediaQuery>
							</div>
						)
						: null
				}
			</div>
		)
	}
}
