import React, {Component} from 'react'

class Text extends Component {
	render() {
		const {
			data
		} = this.props
		return (
			<div className="slide__text">{data}</div>
		)
	}
}

export default Text