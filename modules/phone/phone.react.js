import React from 'react'

import Icon from '../icon/icon.react.js'

export default class Phone extends React.Component {
	render () {
		return (
			<a href="tel:495 607-7777" className="phone">
				<span className="phone__button">
					<Icon className="phone__icon" icon="phone" />
				</span>
				<span className="phone__value">
					<span className="phone__prefix">495 </span>
					<span className="phone__number">607-7777</span>
				</span>
				<span className="phone__note">перезвонить</span>
			</a>
		)
	}
}
