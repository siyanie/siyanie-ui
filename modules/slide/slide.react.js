import React from 'react'

import Text from '../text/text.react'
import Person from '../person/person.react'
import Gallery from '../gallery/gallery.react'
import Numbers from '../numbers/numbers.react'
import Clients from '../clients/clients.react'
import MediaCenter from '../mediacenter/mediacenter.react'

const components = {
	Text,
	Person,
	Numbers,
	Clients,
	Gallery,
	MediaCenter
}

function Slide (props) {
	const {
		data,
		params,
		params: {
			section,
			subsection
		},
		slideIndex,
		active
	} = props
	const componentName = data.main.component
	const Content = components[componentName]
	let Footer, Title

	if (data.quote) {
		Footer = (
			<div className="slide__footer">
				<div className="quote slide__footer-content">
					<div className="quote__content">
						<span className="quote__text">{data.quote.text.replace(/<br>/g, '')}</span>
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
	if (!data.bg) {
		data.bg = `${section}_${subsection}_${slideIndex + 1}.jpg`
	}

	// Detect WEBP
	if (data.bg ) {
		window.Modernizr.on('webp', result => {
			if (Object.keys(result).length > 0) {
				data.bg = data.bg.replace(/(jpg|jpeg|png)$/, 'webp')
			}
		})
	}

	return (
		<div className={`slide slide--${componentName.toLowerCase()} ${active ? '_active' : ''}`}>
			<div
				className="slide__bg"
				style={
					{
						backgroundImage: `url(assets/images/${data.bg})`
					}
				}
			></div>
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

export default Slide
