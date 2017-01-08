import React, {Component} from 'react'

import Icon from '../icon/icon.react'

class Popup extends Component {
	_close () {
		history.back()
	}
	render() {
		const {
			title,
			bg,
			children
		} = this.props

		return (
			<div className={`popup ${bg ? `popup--${bg}` : 'callback'}`}>
				<div className="popup__content">
					<div onClick={::this._close}>
						<Icon
							className="popup__close"
							icon="cross" />
					</div>
					<div className="popup__title">{title}</div>
					{children}
				</div>
			</div>
		)
	}
}

export default Popup
