import React, {Component} from 'react'
import { Link } from 'react-router'

import Slide from './slide.react'

class Slides extends Component {
	render() {
		const {
			slides,
			activeSlide,
			params,
			params: {
				subsection
			}
		} = this.props

		return (
			<div className="slides section__wrapper" ref="slides">
			{
				slides.map((slide, index) => (
					<Slide
						key={`section__slide--${this.subsection}-${index}`}
						data={slide}
						slideIndex={index}
						params={params}
						active={activeSlide === index}
					/>
				))
			}
			{
				subsection === 'work'
					? <Link to="/callback?resume=true" className="person__button">Отправить резюме</Link>
					: null
			}
			</div>
		)
	}
}

export default Slides
