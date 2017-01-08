import { Component } from 'react'

import store from '../store/store.react'
import Icon from '../icon/icon.react'
import { Link } from 'react-router'

export default class FooterInner extends Component {
	constructor () {
		super()

		this.state = {
			activeDot: 0
		}
		this._dot = this._dot.bind(this)
	}
	_dot ({ detail }) {
		this.setState({
			activeDot: detail
		})
	}
	componentDidMount () {
		window.addEventListener('dot', this._dot)
	}
	componentWillUnmount() {
		window.removeEventListener('dot', this._dot)
	}
	render () {
		const {
			params:
			{
				section: sectionKey,
				subsection: subsectionKey
			}
		} = this.props
		const {
			name: sectionName,
			subsections
		} = store.sections[sectionKey]

		return (
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
	}
}
