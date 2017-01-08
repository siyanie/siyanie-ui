import React, {Component} from 'react'

import config from '../config/config.react'

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
				items.map((id, index) => (
					<div
						className="mediacenter__item"
						key={`mediacenter__item--${index}`}
					>
						<img src={`${config.assets.images}media/${id}.png`} alt="" className="mediacenter__image"/>
						<div className="mediacenter__label">
						{
							['png', 'ai'].map((ext, i) => (
								<a
									target="_blank"
									href={`${config.assets.images}media/${id}.${ext}`}
									className="mediacenter__link"
									key={`mediacenter__item--${index}__link--${i}`}
								>{ext}</a>
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
