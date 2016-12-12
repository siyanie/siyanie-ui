import React, {Component} from 'react'

class MediaCenter extends Component {
	render() {
		console.log(this.props)

		return (
			<div className="mediacenter">
				<div className="m_item">
					MediaCenter
				</div>
				<div className="m_item">
					MediaCenter
				</div>
			</div>
		)
	}
}

export default MediaCenter
