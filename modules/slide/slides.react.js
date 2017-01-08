import React, {Component} from 'react'
import { Link } from 'react-router'
import Hammer from 'hammerjs'

import config from '../config/config.react'
import Slide from './slide.react'
import Timeline from '../timeline/timeline.react'

class Slides extends Component {
	constructor() {
		super()

		this._prev = this._prev.bind(this)
		this._next = this._next.bind(this)
	}
	_prev() {
		const {
			activeSlide,
			selectSlide
		} = this.props

		console.log('LEFT')

		selectSlide(activeSlide - 1)()
	}
	_next() {
		const {
			activeSlide,
			selectSlide
		} = this.props

		selectSlide(activeSlide + 1)()
	}
	componentDidMount() {
		const { section, subsection } = this.props.params

		if (!(section === 'about' && subsection === 'history')) {
			this.hammer = new Hammer(this.refs.slides)
			this.hammer.on('swipeleft', this._next)
			this.hammer.on('swiperight', this._prev)
		}
	}
	componentWillUnmount() {
		const { section, subsection } = this.props.params

		if (!(section === 'about' && subsection === 'history')) {
			this.hammer.off('swipeleft', this._next)
			this.hammer.off('swiperight', this._prev)
		}
	}
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
			<div
				className="slides section__wrapper"
				ref="slides"
			>
			{
				video
					? (
						<div className="slides__video">
							<div className="slide__mask"></div>
							<video
								src={`${config.assets.videos}${video}.mp4`}
								className="slides__video-source"
								autoPlay
								loop
								muted
							></video>
						</div>
					)
					: null
			}
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
			</div>
		)
	}
}

export default Slides
