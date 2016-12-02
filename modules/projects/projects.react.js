import { Component } from 'react'
import { Link } from 'react-router'

import Icon from '../icon/icon.react'

const initialProjects = [{
	name: 'aif',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'alcatel',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'alfabank',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'bork',
	preview: '//placehold.alanev.ru/300x1000'
}]
const moreProjects = [{
	name: 'gazprom',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'honeywell',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'johnson',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'nokia',
	preview: '//placehold.alanev.ru/300x1000'
}]
const allProjects = [{
	name: 'openbank',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'raiffeisen',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'rzhd',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'samsung',
	preview: '//placehold.alanev.ru/300x1000'
},{
	name: 'sber',
	preview: '//placehold.alanev.ru/300x1000'
}]

class Projects extends Component {
	constructor () {
		super()

		this.more = this.more.bind(this)
		this.state = {
			title: 'еще проекты',
			projects: initialProjects
		}
	}
	more () {
		const { projects } = this.state

		if (projects.length === 4) {
			this.setState({
				title: 'все проекты',
				projects: projects.concat(moreProjects)
			})
		} else if (projects.length > 4) {
			this.setState({
				title: '',
				projects: projects.concat(allProjects)
			})
		}
	}
	render () {
		const { projects, title } = this.state

		return (
			<div className="projects">
				<div className="projects__list">
				{
					projects.map(({ name, preview }) => (
						<Link
							className="projects__project"
							to={`/project/${name}`}
							key={`project-${name}`}
						>
							<div
								className="projects__bg"
								style={
									{
										backgroundImage: `url(${preview})`
									}
								}
							></div>
							<Icon
								className="projects__logo"
								icon={`logo-${name}`}
							/>
							<div className="projects__loop">
								<Icon
									className="projects__icon"
									icon="search"
								/>
							</div>
						</Link>
					))
				}
				</div>
				{
					title
						? (<div
								className="projects__more"
								onClick={this.more}
							>{title}</div>)
						: ''
				}

			</div>
		)
	}
}

export default Projects
