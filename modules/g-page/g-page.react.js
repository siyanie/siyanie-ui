import React, { Component } from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Header from '../header/header.react'
import Preloader from '../preloader/preloader.react'

export default class Page extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		const {
			content,
			footer,
			// location: {
			// 	pathname
			// }
		} = this.props

		// const key = pathname.split('/')[1] || 'root'

		// <ReactCSSTransitionGroup
		// 	component="div"
		// 	className="g-page__main"
		// 	transitionName="anim"
		// 	transitionEnterTimeout={0}
		// 	transitionLeaveTimeout={0}
		// >
		// 	{React.cloneElement(children || <div />, { key })}
		// </ReactCSSTransitionGroup>

		return (
			<div className="g-page__content">
				<Preloader />
				<Header params={this.props.params} />
				<div className="g-page__main">
					{content}
				</div>
				{footer}
			</div>
		)
	}
}
