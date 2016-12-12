import { Component } from 'react'
import { Link } from 'react-router'

import Icon from '../icon/icon.react'

import store from '../store/store.react'
const {
	initialProjects,
	moreProjects,
	allProjects
} = store.projects

class Projects extends Component {
	constructor () {
		super()

		this.more = this.more.bind(this)
		this.state = {
			title: 'все проекты',
			projects: initialProjects.concat(moreProjects)
		}
	}
	more () {
		const { projects } = this.state

		this.setState({
			title: '',
			projects: projects.concat(allProjects)
		})
	}
	render () {
		const { projects, title } = this.state

		return (
			<div className="projects">
				<div className="projects__list">
				{
					projects.map(({ name, preview }) => (
						<Link
							className="projects__project _square"
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
							<div className="projects__loupe">
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
