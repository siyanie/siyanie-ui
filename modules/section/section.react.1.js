import { Component } from 'react'
import Slider from 'react-slick'

// import Slide from '../slide/slide.react'
import Arrow from '../arrow/arrow.react'

import store from '../store/store.react'

export default class Section extends Component {
	// constructor () {
	// 	super()

	// 	this.state = {
	// 		activeSlide: 0
	// 	}
	// }
	// _select (activeSlide) {
	// 	return () => {
	// 		if (activeSlide !== this.state.activeSlide) {
	// 			this.setState({
	// 				activeSlide
	// 			})

	// 			const event = new CustomEvent('dot', {
	// 				detail: activeSlide
	// 			})
	// 			window.dispatchEvent(event)
	// 		}
	// 	}
	// }
	// componentWillReceiveProps (nextProps) {
	// 	const { section, subsection } = nextProps.params

	// 	if (this.section && this.section !== section ||
	// 		this.subsection && this.subsection !== subsection
	// 	) {
	// 		this.setState({
	// 			activeSlide: 0
	// 		})
	// 	}
	// }
	// componentDidMount () {
	// 	Object.assign(this.pag.style, {
	// 		transform: `translateY(-${this.footer.clientHeight}px)`
	// 	})
	// 	this.sectionElement.classList.add('_active')
	// }
	render () {
		const {
			section,
			subsection
		} = this.props.params
		const slides = store.sections[section].subsections[subsection].content
		return (
			<div
				className="section _active"
				ref={section => this.sectionElement = section}>
				<div className="section__wrapper">
					<Slider
						slidesToShow={1}
						slidesToScroll={1}
						initialSlide={0}
						speed={500}
						infinite={false}
						dots={false}
						swipe={false}
						nextArrow={<Arrow />}
						prevArrow={<Arrow />}
					>
						{
							slides.map((data, slideIndex) => {
								return this.slide({
									data,
									slideIndex,
									params: this.props.params
								})
							})
						}
					</Slider>
				</div>
			</div>
		)
	}
	slide (props) {
		const {
			data,
			activeSlide,
			params: {
				section,
				subsection
			}
		} = props

		let Author, Text
		if (data.quote && data.quote.author) {
			Author = <div className="quote__author">{data.quote.author}</div>
		}
		if (data.main && data.main.type === 'text' && data.main.content) {
			Text = <div
				className="section__text"
				dangerouslySetInnerHTML={
					{
						__html: data.main.content
					}
				}
			></div>
		}
		if (!data.bg) {
			data.bg = `${section}_${subsection}_${activeSlide + 1}.jpg`
		}

		return (
			<div className="section__slide">
				<div
					className="section__bg"
					style={
						{
							backgroundImage: `url(assets/images/${data.bg})`
						}
					}
				></div>
				<div className="section__info">
					<div className="section__title">{data.title}</div>
					{Text}
				</div>
				<div className="section__footer">
					<div className="quote section__footer-content">
						<div className="quote__content">
							<span
								className="quote__text"
								dangerouslySetInnerHTML={
									{
										__html: data.quote.text
									}
								}
							></span>
						</div>
						{Author}
					</div>
				</div>
			</div>
		)
	}
}
