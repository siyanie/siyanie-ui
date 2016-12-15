import { Component } from 'react'
import Icon from '../icon/icon.react.js'
import { Link } from 'react-router'

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
					<a href="tel:495 607-7777" className="phone__value">
						<span className="phone__prefix">495 </span>
						<span className="phone__number">607-7777</span>
					</a>
				</span>
				<Link
					to="/callback"
					className="phone__note">перезвонить</Link>
			</span>
		)
	}
}
