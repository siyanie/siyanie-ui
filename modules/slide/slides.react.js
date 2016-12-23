import React, {Component} from 'react'
import { Link } from 'react-router'

import config from '../config/config.react'
import Slide from './slide.react'
import Timeline from '../timeline/timeline.react'

class Slides extends Component {
	render() {
		const {
			props: {
				video,
				slides,
				activeSlide,
				params,
				params: {
					section,
					subsection
				},
				selectSlide
			}
		} = this

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
				section === 'about' && subsection === 'work'
					? <Link to="/callback?resume=true" className="person__button">Отправить резюме</Link>
					: null
			}
			{
				section === 'about' && subsection === 'history'
					? <Timeline
						selectSlide={selectSlide}
					/>
					: null
			}
			{
				video
					? (
						<video
							src={`${config.assets.videos}${video}.mp4`}
							className="slides__video"
							autoPlay
							loop
							muted
						></video>
					)
					: null
			}
			</div>
		)
	}
}

export default Slides
