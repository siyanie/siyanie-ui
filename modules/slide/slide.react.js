import React, {Component} from 'react'

import Text from '../text/text.react'
import News from '../news/news.react'
import Person from '../person/person.react'
import Gallery from '../gallery/gallery.react'
import Numbers from '../numbers/numbers.react'
import Clients from '../clients/clients.react'
import History from '../history/history.react'
import MediaCenter from '../mediacenter/mediacenter.react'

const components = {
	Text,
	News,
	Person,
	Numbers,
	Clients,
	Gallery,
	History,
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

		// Detect WEBP
		if (data.bg) {
			window.Modernizr.on('webp', result => {
				if (Object.keys(result).length > 0) {
					data.bg = data.bg.replace(/(jpg|jpeg|png)$/, 'webp')
				}
			})
		}

		return (
			<div className={`slide slide--${componentName.toLowerCase()} ${active ? '_active' : ''}`}>
				{
					data.bg
						? (
							<div
								className="slide__bg"
								style={
									data.bg
									? {
										backgroundImage: `url(assets/images/${data.bg})`
									}
									: null
								}
							></div>
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
