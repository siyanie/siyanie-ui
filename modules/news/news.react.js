import React, {Component} from 'react'

import Icon from '../icon/icon.react'

class News extends Component {
	render() {
		const {
			props: {
				data: {
					text,
					link
				}
			}
		} = this
		const socialIcon =
			/https?:\/\/instagram\.com/.test(link)
				? 'instagram'
				: /https?:\/\/vk\.com/.test(link)
					? 'vk'
					: 'facebook'

		return (
			<div className="news">
				{
					text
						? (
							<div className="slide__text">{text}</div>
						)
						: null
				}
				<a href={link} className="news__link">
				{
					text
						? 'Читать подробнее'
						: 'Все новости'
				}
					<Icon className="news__arrow" icon="arrow"></Icon>
					<div className="news__social">
						<Icon className="news__social-icon" icon={`social-${socialIcon}`}></Icon>
					</div>
				</a>
			</div>
		)
	}
}

export default News
