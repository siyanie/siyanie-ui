import { Component } from 'react'

import Slide from '../slide/slide.react'
import Arrow from '../arrow/arrow.react'

import store from '../store/store.react'

const defaultState = {
	activeSlide: 0
}

export default class Section extends Component {
	constructor () {
		super()

		this.state = defaultState
	}
	_select (activeSlide) {
		return () => {
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
		const footer = this.refs.section.querySelector('.slide__footer')
		let offset = null
		if (footer) {
			offset = `translateY(-${footer.clientHeight}px)`
		}
		if (this.refs.pag) {
			Object.assign(this.refs.pag.style, {
				transform: offset
			})
		}
	}
	componentWillReceiveProps (nextProps) {
		const { section, subsection } = nextProps.params

		if (
			this.section && this.section !== section ||
			this.subsection && this.subsection !== subsection
		) {
			this.setState(defaultState)
		}

		this._footer()

	}
	componentDidMount () {
		this._footer()
	}
	render () {
		const { section, subsection } = this.props.params
		this.section = section
		this.subsection = subsection
		this.slides = store.sections[section].subsections[subsection].content
		// const slide = this.slides[this.state.activeSlide]
		const {
			activeSlide
		} = this.state

		return (
			<div
				className="section _active"
				ref="section"
			>
				<div className="section__wrapper">
				{
					this.slides.map((slide, index) => (
						<Slide
							key={`section__slide--${subsection}-${index}`}
							data={slide}
							slideIndex={index}
							params={this.props.params}
							active={activeSlide === index}
						/>
					))
				}
				</div>
				{
					this.slides.length > 1
						? (
							<div className="section__nav">
								<div className="section__pag" ref="pag">
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
							</div>
						)
						: null
				}
			</div>
		)
	}
}
