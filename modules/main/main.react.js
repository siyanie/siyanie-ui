import { Component } from 'react'

export default class Main extends Component {
	render () {
		return (
			<main className="main">
				{this.props.children}
			</main>
		)
	}
}
