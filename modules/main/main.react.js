import { Component } from 'react'
import Section from '../section/section.react.js'
import Video from '../video/video.react.js'

export default class Main extends Component {
	render () {
		return (
			<main className="main">
				{this.props.children}
			</main>
		)
	}
}
