import React, {Component} from 'react'

import Icon from '../icon/icon.react'

class Arrow extends Component {
	render() {
		let className = 'arrow'
		if (this.props.className) {
			className = `${className} ${this.props.className
				.replace(/^slick-arrow/, '')
				.replace(/slick-/g, '_')}`
		}
		const props = Object.assign({}, this.props, {
			className,
			style: null
		})
		return (
			<div {...props}>
				<Icon
					className="arrow__icon"
					icon="arrow"
				/>
			</div>
		)
	}
}

export default Arrow
