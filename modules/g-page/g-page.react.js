import React, { Component, cloneElement } from 'react'

import Header from '../header/header.react.js'
import Footer from '../footer/footer.react.js'
import Callback from '../callback/callback.react.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Page extends Component {
	render () {
		const { children, location: { pathname } } = this.props
		const key = pathname.split('/')[1] || 'root'

		return (
			<div className="g-page__content">
				<Header params={this.props.params} />
				<ReactCSSTransitionGroup
					component="div"
					className="g-page__main"
					transitionName="anim"
					transitionEnterTimeout={0}
					transitionLeaveTimeout={0}
				>
					{React.cloneElement(children || <div />, { key })}
				</ReactCSSTransitionGroup>
				<Footer params={this.props.params} />
			</div>
		)
	}
}
