import React, { Component, cloneElement } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Header from '../header/header.react'
import Footer from '../footer/footer.react'
import Callback from '../callback/callback.react'
import Preloader from '../preloader/preloader.react'

export default class Page extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		const { children, location: { pathname }, route: { footer } } = this.props
		const key = pathname.split('/')[1] || 'root'

		const content = <ReactCSSTransitionGroup
							component="div"
							className="g-page__main"
							transitionName="anim"
							transitionEnterTimeout={0}
							transitionLeaveTimeout={0}
						>
							{React.cloneElement(children || <div />, { key })}
						</ReactCSSTransitionGroup>

		console.log(this.props.route.foo)

		return (
			<div className="g-page__content">
				<Preloader />
				<Header params={this.props.params} />
				<div className="g-page__main">
					{children}
				</div>
				<Footer params={this.props.params} />
			</div>
		)
	}
}
