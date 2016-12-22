import { Component } from 'react'

import ProjectsProject from './projects.project.react'

import store from '../store/store.react'
const {
	projects: {
		content: initialProjects
	}
} = store

class Projects extends Component {
	constructor () {
		super()

		this.more = this.more.bind(this)
		this.state = {
			projects: initialProjects.slice(4, initialProjects.length)
		}
	}
	more () {
		this.setState({
			title: '',
			projects: initialProjects
		})
	}
	render () {
		const { projects } = this.state

		return (
			<div className="projects _grid">
				<div className="projects__list _grid">
				{
					projects.map(({ id, preview_sm: preview }) => (
						<ProjectsProject
							id={id}
							preview={preview}
							key={`project--${id}`}
						/>
					))
				}
				</div>
			</div>
		)
	}
}

export default Projects
