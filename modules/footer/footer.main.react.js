import { Component } from 'react'
import { Link } from 'react-router'
import MediaQuery from 'react-responsive'

import Icon from '../icon/icon.react'
import Phone from '../phone/phone.react.js'
import Social from '../social/social.react'

export default class FooterMain extends Component {
	render () {
		return (
			<div className="footer__content">
				<MediaQuery query="(max-width: 1023px)">
					<div className="footer__phone">
						<Phone />
					</div>
				</MediaQuery>
				<MediaQuery query="(min-width: 1024px)">
					<div className="footer__copyright">
						<span>Группа компаний</span>
						<Link to="/section/about/history" className="footer__logo">
							<Icon className="footer__logo-icon" icon="siyanie-mono" />
						</Link>
					</div>
				</MediaQuery>
				<MediaQuery query="(min-width: 1024px)">
					<div className="footer__dev">
						Свет на компанию пролила студия
						<a href="http://magicdesign.ru/" target="_blank" className="footer__dev-name"> MAGIC design &amp; digital</a>
					</div>
				</MediaQuery>
				<div className="footer__social">
					<Social />
				</div>
			</div>
		)
	}
}
