import React, {Component} from 'react'

class MediaCenter extends Component {
	render() {
		const {
			data: {
				items
			}
		} = this.props

		return (
			<div className="mediacenter">
			{
				items.map(({ image, links }, index) => (
					<div
						className="mediacenter__item"
						key={`mediacenter__item--${index}`}
					>
						<img src={image} alt="" className="mediacenter__image"/>
						<div className="mediacenter__label">
						{
							links.map(({ name, url }, i) => (
								<a
									href={url}
									className="mediacenter__link"
									key={`mediacenter__item--${index}__link--${i}`}
								>{name}</a>
							))
						}
						</div>
					</div>
				))
			}
			</div>
		)
	}
}

export default MediaCenter
