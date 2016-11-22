import React from 'react'

export default class Icon extends React.Component {
	render () {
		const { icon, className } = this.props
		return (
			<svg className={className}>
				<use xlinkHref={`#icon--${icon}`}></use>
			</svg>
		)
	}
}
