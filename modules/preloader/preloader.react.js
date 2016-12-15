import React, {Component} from 'react'

import Icon from '../icon/icon.react'

const events = ['transitionend', 'animationend']

class Preloader extends Component {
	_handle(action) {
		const { preloader } = this.refs
		events.forEach(event => preloader[`${action}EventListener`](event, this.props.preloaded))
	}
	componentDidMount() {
		this._handle('add')
	}
	componentWillUnmount() {
		this._handle('remove')
	}
	render() {
		return (
			<div className="preloader" ref="preloader">
				<div className="preloader__blick">
					<Icon className="preloader__blick-icon" icon="blick" />
				</div>
				<div className="preloader__content">
					<Icon
						className="preloader__logo"
						width="60"
						height="52"
						viewBox="0 0 102.284 87.324"
						icon="siyanie"
						inline
						/>
				</div>
			</div>
		)
	}
}

export default Preloader
