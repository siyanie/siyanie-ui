import React, {Component} from 'react'
import MediaQuery from 'react-responsive'

import store from '../store/store.react'
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
		const { name: sectionName } = store.sections[params.section]
		const componentName = data.main.component
		const Content = components[componentName]
		const isHistory = params.subsection === 'history'

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
				{
					!isHistory
						? (
							<div className="slide__mask"></div>
						)
						: null
				}
				<div className="slide__info">
					{
						sectionName
							? (
								<MediaQuery query="(max-width: 1023px)">
									<div className="slide__section">{sectionName}</div>
								</MediaQuery>
							)
							: null
					}
					{
						data.title
							? (
								<div className="slide__title">{data.title}</div>
							)
							: null
					}
					<Content
						data={data.main.content}
						params={params}
					/>
				</div>
				{
					data.quote
						? (
							<MediaQuery query="(min-width: 1024px)">
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
							</MediaQuery>
						)
						: null
				}
			</div>
		)
	}
}

export default Slide
