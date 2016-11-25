import { Component } from 'react'
import Icon from '../icon/icon.react'

import store from '../store/store.react'

export default class Section extends Component {
	constructor () {
		super()

		this.state = {
			activeSlide: 0
		}
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
	componentWillReceiveProps (nextProps) {
		const { section, subsection } = nextProps.params

		if (this.section && this.section !== section ||
			this.subsection && this.subsection !== subsection
		) {
			this.setState({
				activeSlide: 0
			})
		}
	}
	componentDidMount () {
		Object.assign(this.pag.style, {
			transform: `translateY(-${this.footer.clientHeight}px)`
		})
		// this.sectionElement.classList.add('_active')
	}
	render () {
		const { section, subsection } = this.props.params
		this.section = section
		this.subsection = subsection
		this.slides = store.sections[section].subsections[subsection].content
		const slide = this.slides[this.state.activeSlide]
		const { activeSlide } = this.state

		let Author, Text
		if (slide.author) {
			Author = <div className="quote__author">{slide.author}</div>
		}
		if (slide.text) {
			Text = <div className="section__text">{slide.text}</div>
		}
		if (!slide.bg) {
			slide.bg = `${this.section}_${this.subsection}_${activeSlide + 1}.jpg`
		}

		return (
			<div
				className="section _active"
				ref={section => this.sectionElement = section}>
				<div className="section__wrapper">
					<div className="section__slide">
						<div
							className="section__bg"
							style={{backgroundImage: `url(assets/images/${slide.bg})`}}></div>
						<div className="section__info">
							<div className="section__title">{slide.title}</div>
							{Text}
						</div>
						<div className="section__footer" ref={footer => this.footer = footer}>
							<div className="quote section__footer-content">
								<div className="quote__content">
									<span className="quote__text">{slide.quote}</span>
								</div>
								{Author}
							</div>
						</div>
					</div>
				</div>
				<div className="section__pag" ref={pag => this.pag = pag}>
					{this.slides.map((item, index) => {
						let activeClass = ''
						if (index === activeSlide) {
							activeClass = '_active'
						}
						return (<div
								key={index}
								className={`section__dot ${activeClass}`}
								onClick={this._select(index)} />)
					})}
				</div>
				<div className="section__buttons">
					<div
						className="section__button section__button--prev"
						onClick={this._prev.bind(this)}>
						<Icon className="section__button-icon" icon="arrow" />
					</div>
					<div
						className="section__button section__button--next"
						onClick={this._next.bind(this)}>
						<Icon className="section__button-icon" icon="arrow" />
					</div>
				</div>
			</div>
		)
	}
}
