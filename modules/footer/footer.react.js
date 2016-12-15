import { Component } from 'react'
import Social from '../social/social.react'
import Icon from '../icon/icon.react'

export default class Footer extends Component {
	render () {
		return (
			<div className="footer">
				<div className="footer__content">
					<div className="footer__copyright">
						Группа компаний
						<span className="footer__logo">
							<Icon className="footer__logo-icon" icon="siyanie-mono" />
						</span>
					</div>
					<div className="footer__dev">
						Свет на компанию пролила студия
						<a href="http://magicdesign.ru/" className="footer__dev-name"> MAGIC design &amp; digital</a>
					</div>
					<div className="footer__social">
						<Social />
					</div>
				</div>
			</div>
		)
	}
}
