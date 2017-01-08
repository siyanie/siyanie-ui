import { Component } from 'react'
import { Link } from 'react-router'
import MediaQuery from 'react-responsive'

import Icon from '../icon/icon.react.js'

export default class Phone extends Component {
	render () {
		return (
			<span className="phone">
				<span className="phone__link">
					<Link
						to="/callback"
						className="phone__button"
					>
						<Icon className="phone__icon" icon="phone" />
					</Link>
					<a href="tel:84956077777" className="phone__value">
						<span className="phone__prefix">495 </span>
						<span className="phone__number">607-7777</span>
					</a>
				</span>
				<MediaQuery query="(min-width: 1024px)">
					<Link
						to="/callback"
						className="phone__note">перезвонить</Link>
				</MediaQuery>
			</span>
		)
	}
}
