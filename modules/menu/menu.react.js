import React, {Component} from 'react'
import { Link } from 'react-router'
import MediaQuery from 'react-responsive'

import store from '../store/store.react'

const sections = [{
	id: 'about',
	text: 'О компании'
},{
	id: 'services',
	text: 'Услуги'
},{
	id: 'press-center',
	text: 'Пресс-центр'
},{
	id: 'contacts',
	text: 'Контакты',
	url: '/contacts'
},{
	id: 'projects',
	text: 'Проекты',
	url: '/projects'
}]

class Menu extends Component {
	_toggle() {
		this.refs.links.classList.toggle('_hidden')
	}
	_hide() {
		this.refs.links.classList.add('_hidden')
	}
	render() {
		const { params } = this.props

		return (
			<menu className="menu">
				<MediaQuery query="(max-width: 1023px)">
					<div
						className="menu__icon"
						onClick={this._toggle.bind(this)}
					></div>
				</MediaQuery>
				<div
					ref="links"
					className="menu__links _hidden"
					onClick={this._hide.bind(this)}
				>
				{
					sections.map(({id, text, url}) => {
						return (
							<Link
								key={id}
								to={url ? url === '/projects' && window.innerWidth < 1024 ? `/project/${store.projects.content[0].id}` : url : `/section/${id}`}
								className={`menu__link ${params && params.section === id ? '_active' : ''}`}
							>{text}</Link>
						)
					})
				}
				</div>
			</menu>
		)
	}
}

export default Menu
