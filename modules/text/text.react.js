import React, {Component} from 'react'

class Text extends Component {
	render() {
		const {
			data: {
				text
			}
		} = this.props
		return (
			<div className="slide__text">{text}</div>
		)
	}
}

export default Text
