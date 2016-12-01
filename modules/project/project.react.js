import { Component } from 'react'

import Icon from '../icon/icon.react'

class Project extends Component {

	render () {
		const bg = 'http://placehold.alanev.ru/1920x1080'
		const logo = 'rzd'
		const square = '1100 кв.м.'
		const date = 'май 2009 - сентябрь 2009'
		const text = 'Проектные   работы систем: холодоснабжения прецизионных кондиционеров, системы вентиляции. Монтажные работы по прокладке трубопроводов системы холодоснабжения, монтаж прецизионных кондиционеров, монтаж сухих охладителей. Монтажные работы  системы вентиляции. Пусконаладочные работы.'
		const address = 'г. Москва, ул. 8 Марта, д. 14 . стр. 1. , Центр обработки данных.'
		const title = 'Блеск профессионализма'

		console.log(this.props)

		return (
			<div className="project">
				<div
					className="project__bg"
					style={
						{
							backgroundImage: `url(${bg})`
						}
					}
				></div>
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
						<div className="project__title">{title}</div>
						<div className="project__dots">
							<div className="project__dot"></div>
						</div>
						<div className="project__nav">
							<span className="project__arrow _prev">
								<Icon
									icon="arrow"
								/>
							</span>
							<span className="project__all">Все проекты</span>
							<span className="project__arrow _next">
								<Icon
									icon="arrow"
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Project
