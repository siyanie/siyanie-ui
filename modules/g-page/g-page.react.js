import React, { Component, cloneElement } from 'react'

import Header from '../header/header.react.js'
import Footer from '../footer/footer.react.js'

export default class Page extends Component {
	constructor () {
		super()

		this.state = {
			dotIndex: 0
		}
	}
	_dotHandler (dotIndex) {
		this.setState({
			dotIndex
		})
	}
	render () {
		return (
			<div className="g-page__content">
				<Header />
				<div className="g-page__main">
					{this.props.children}
				</div>
				<Footer params={this.props.params} dot={this.state.dotIndex} />
			</div>
		)
	}
}
