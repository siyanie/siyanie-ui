import React, {Component} from 'react'
import { Link } from 'react-router'

import Icon from '../icon/icon.react'

class ProjectsProject extends Component {
	constructor () {
		super()

		this.state = {
			preview: ''
		}
	}
	componentWillMount() {
		window.Modernizr.on('webp', result => {
			let preview = this.props.preview
			if (Object.keys(result).length > 0)
				preview = preview.replace(/(jpg|jpeg|png)$/, 'webp')

			this.setState({
				preview
			})
		})
	}

	render() {
		const {
			id
		} = this.props
		const {
			preview
		} = this.state

		return (
			<Link
				className="projects__project"
				to={`/project/${id}`}
			>
				<div
					className="projects__bg"
					style={
						preview
						? {
							backgroundImage: `url(assets/images/${preview})`
						}
						: null
					}
				></div>
				<Icon
					className="projects__logo"
					icon={`logo-${id}`}
				/>
				<div className="projects__loupe">
					<Icon
						className="projects__icon"
						icon="search"
					/>
				</div>
			</Link>
		)
	}
}

export default ProjectsProject
