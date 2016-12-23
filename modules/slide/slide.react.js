import React, {Component} from 'react'

import Bg from '../bg/bg.react'
import Text from '../text/text.react'
import News from '../news/news.react'
import Person from '../person/person.react'
import Gallery from '../gallery/gallery.react'
import Numbers from '../numbers/numbers.react'
import Clients from '../clients/clients.react'
import MediaCenter from '../mediacenter/mediacenter.react'

const components = {
	Text,
	News,
	Person,
	Numbers,
	Clients,
	Gallery,
	MediaCenter
}

class Slide extends Component {
	render() {
		const {
			data,
			params,
			active
		} = this.props
		const componentName = data.main.component
		const Content = components[componentName]
		let Footer, Title

		if (data.quote) {
			Footer = (
				<div className="slide__footer" ref="footer">
					<div className="quote slide__footer-content">
						<div className="quote__content">
							<span className="quote__text">{data.quote.text}</span>
						</div>
						{
							data.quote.author
								? <div className="quote__author">{data.quote.author}</div>
								: ''
						}
					</div>
				</div>
			)
		}
		if (data.title) {
			Title = (
				<div
					className="slide__title"
					dangerouslySetInnerHTML={
						{
							__html: data.title
						}
					}
				/>
			)
		}

		return (
			<div className={`slide slide--${componentName.toLowerCase()} ${active ? '_active' : ''}`}>
				{
					data.bg
						? (
							<div className="slide__bg">
								<Bg
									bg={data.bg}
								></Bg>
							</div>
						)
						: null
				}
				<div className="slide__info">
					{Title}
					<Content
						data={data.main.content}
						params={params}
					/>
				</div>
				{Footer}
			</div>
		)
	}
}

export default Slide
