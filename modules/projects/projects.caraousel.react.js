import { Component } from 'react'
import { Link } from 'react-router'
import Carousel from 'react-slick'

import Icon from '../icon/icon.react'
import Arrow from '../arrow/arrow.react'

import store from '../store/store.react'
const {
	initialProjects,
	moreProjects
} = store.projects

class Projects extends Component {
	constructor () {
		super()

		this.state = {
			projects: initialProjects.concat(moreProjects)
		}
	}
	componentDidMount() {
		console.log('Mounted')
	}

	render () {
		const { projects } = this.state

		return (
			<div className="projects">
				<Carousel
					className="projects__list"
					slidesToShow={4}
					slidesToScroll={1}
					initialSlide={0}
					speed={500}
					infinite={false}
					dots={false}
					swipe={false}
					nextArrow={<Arrow />}
					prevArrow={<Arrow />}
				>
				{
					projects.map(({ name, preview }) => (
						<Link
							className="projects__project _carousel"
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
				</Carousel>
				<Link
					className="projects__more"
					to="/projectsAll"
				>Еще проекты</Link>

			</div>
		)
	}
}

export default Projects
