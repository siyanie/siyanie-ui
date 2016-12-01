import { Component } from 'react'
import { Link } from 'react-router'

import Icon from '../icon/icon.react'

class Projects extends Component {
	render () {
		const projects = ['rzhd', 'nokia', 'alfabank', 'sber']

		return (
			<div className="projects">
				{
					projects.map(project => (
						<Link
							className="projects__project"
							to={`/project/${project}`}
							key={`project-${project}`}
						>
							<Icon
								className="projects__logo"
								icon={`logo-${project}`}
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
		)
	}
}

export default Projects
