import React, { Component, cloneElement } from 'react'

import Header from '../header/header.react.js'
import Footer from '../footer/footer.react.js'

export default class Page extends Component {
	render () {
		return (
			<div className="g-page__content">
				<Header params={this.props.params} />
				<div className="g-page__main">
					{this.props.children}
				</div>
				<Footer params={this.props.params} />
			</div>
		)
	}
}
