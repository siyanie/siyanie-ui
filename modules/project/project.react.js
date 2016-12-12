import { Component } from 'react'
import { Link } from 'react-router'

import Icon from '../icon/icon.react'

class Project extends Component {
	constructor () {
		super()

		// this._loadImage = this._loadImage.bind(this)
		this._handleDot = this._handleDot.bind(this)
		this.data = {
			bg: [
				'//placeimg.com/1920/1080/any',
				'//placeimg.com/1920/1080/animals',
				'//placeimg.com/1920/1080/arch',
				'//placeimg.com/1920/1080/nature',
				'//placeimg.com/1920/1080/people',
				'//placeimg.com/1920/1080/tech'
			],
			logo: 'rzhd',
			square: '1100 кв.м.',
			date: 'май 2009 - сентябрь 2009',
			text: 'Проектные   работы систем: холодоснабжения прецизионных кондиционеров, системы вентиляции. Монтажные работы по прокладке трубопроводов системы холодоснабжения, монтаж прецизионных кондиционеров, монтаж сухих охладителей. Монтажные работы  системы вентиляции. Пусконаладочные работы.',
			address: 'г. Москва, ул. 8 Марта, д. 14 . стр. 1. , Центр обработки данных.',
			slogan: 'Блеск профессионализма'
		}
		this.state = {
			loaded: false,
			bgIndex: 0
		}
	}
	_loadImage (index = this.state.bgIndex) {
		const newUrl = this.data.bg[index]
		const oldUrl = this.data.bg[this.state.bgIndex]

		this.refs.bgNew.classList.remove('_active')
		this.refs.bgOld.classList.remove('_active')

		const images = this.data.bg.map(bg => {
			const image = new Image()
			image.src = bg
			return image
		})
		images[0].addEventListener('load', () => {
			this.setState({
				loaded: true,
				bgIndex: index
			})
			Object.assign(this.refs.bgNew.style, {
				backgroundImage: `url(${newUrl})`
			})
			Object.assign(this.refs.bgOld.style, {
				backgroundImage: `url(${oldUrl})`
			})
			this.refs.bgNew.classList.add('_active')
			this.refs.bgOld.classList.add('_active')
		})
	}
	_loadImages () {
		console.log('loaded')
		const image = new Image()
		image.src = this.data.bg[0]

		image.addEventListener('load', () => {
			this.setState({
				loaded: true,
				bgIndex: 0
			})
			this.refs.bg.style.backgroundImage = `url(${image.src})`
		})
	}
	_handleDot (index) {
		return () => {
			this.setState({
				bgIndex: index
			})
		}
	}
	render () {
		const {
			bg,
			logo,
			square,
			date,
			text,
			address,
			slogan
		} = this.data
		const {
			loaded,
			bgIndex
		} = this.state

		return (
			<div
				className={`project ${loaded ? '_loaded' : '_no_loaded' }`}
			>
				{
					bg.map((bg, index) => (
						<div
							className={`project__bg ${index === bgIndex ? '_active' : ''}`}
							key={`project__bg--${index}`}
							style={
								{
									backgroundImage: `url(${bg})`
								}
							}
						></div>
					))
				}
				<div className="project__content">
					<div className="project__info">
						<Icon
							className="project__logo"
							icon={`logo-${logo}`}
						/>
						<div className="project__square">{square}</div>
						<div className="project__date">{date}</div>
						<div className="project__text">{text}</div>
						<div className="project__address">{address}</div>
					</div>
					<div className="project__footer">
						<div className="project__slogan">{slogan}</div>
						<div className="project__dots">
							{
								bg.map((url, index) =>
									<div
										key={`project__dot${index}`}
										className={`project__dot ${index === bgIndex ? '_active' : ''}`}
										onClick={this._handleDot(index)}
									></div>
								)
							}
						</div>
						<div className="project__nav">
							<Icon
								className="project__arrow _prev"
								icon="arrow"
							/>
							<Link
								to="/projectsAll"
								className="project__all"
							>Все проекты</Link>
							<Icon
								className="project__arrow _next"
								icon="arrow"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Project
