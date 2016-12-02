import { Component } from 'react'
import Social from '../social/social.react'
import Icon from '../icon/icon.react'
import { Link } from 'react-router'

import store from '../store/store.react'

export default class Footer extends Component {
	constructor () {
		super()

		this.state = {
			activeDot: 0
		}
	}
	componentWillMount () {
		window.addEventListener('dot', ({ detail }) => {
			this.setState({
				activeDot: detail
			})
		})
	}
	render () {
		const { params, params: { section: sectionKey, subsection: subsectionKey } } = this.props
		const submenu = Object.keys(params).length > 0 && sectionKey
		let Content

		if (submenu) {
			const { name: sectionName, subsections } = store.sections[sectionKey]
			Content = (
				<div className="footer__content">
					<menu className="footer__menu">
						<div className="footer__section">{sectionName}</div>
						<Icon className="footer__section-arrow" icon="arrow" />
						{Object.keys(subsections).map((key, index) => {
							const subsection = subsections[key]
							const Dots = subsection.content.map((s, index) => (
								<div
									key={index}
									className={`footer__dot ${subsectionKey === key && this.state.activeDot === index ? '_active' : ''}`} />
							))

							return (
								<span key={index} className="footer__subsection">
									<Link
										to={`/section/${sectionKey}/${key}`}
										className="footer__link"
										activeClassName="_active">{subsection.name}</Link>
									{subsection.content.length > 1 ? (<div className="footer__dots">{Dots}</div>) : ''}
								</span>
							)
						})}
					</menu>
				</div>
			)
		} else {
			Content = (
				<div className="footer__content">
					<div className="footer__copyright">
						Группа компаний
						<span className="footer__logo">
							<Icon className="footer__logo-icon" icon="siyanie-mono" />
						</span>
					</div>
					<div className="footer__dev">
						Свет на компанию пролила студия
						<a href="http://magicdesign.ru/" className="footer__dev-name">MAGIC design &amp; digital</a>
					</div>
					<div className="footer__social">
						<Social />
					</div>
				</div>
			)
		}

		return (
			<div className="footer">
				{Content}
			</div>
		)
	}
}
