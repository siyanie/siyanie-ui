import React from 'react'

import Menu from '../menu/menu.react.js'
import Phone from '../phone/phone.react.js'
import Icon from '../icon/icon.react.js'
import { Link } from 'react-router'

export default class Header extends React.Component {
	render () {
		return (
			<div className="header">
				<div className="header__content">
					<Link to="/" className="header__logo">
						<Icon className="header__logo-icon" icon="siyanie-colored" />
					</Link>
					<div className="header__nav">
						<div className="header__menu">
							<Menu />
						</div>
						<div className="header__phone">
							<Phone />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
