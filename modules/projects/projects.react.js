import React, {Component} from 'react'
import { Link } from 'react-router'

import ProjectsCarousel from './projects.caraousel.react'
import ProjectsGrid from './projects.grid.react'


class Projects extends Component {
	render() {
		const { all } = this.props.location.query

		return (
			<div className="projects__underscroll">
				<ProjectsCarousel
					all={all}
					ref="carousel"
				/>
				{
					all
						? <ProjectsGrid />
						: null
				}
				<Link
					className={`projects__more ${all ? '_hidden' : ''}`}
					to="/projects?all=true"
				>Еще проекты</Link>
			</div>
		)
	}
}

export default Projects
