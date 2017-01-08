import { Component } from 'react'

import Form from '../form/form.react'
import Popup from '../popup/popup.react'

export default class Callback extends Component {
	render () {
		const {
			location,
			location: {
				query: {
					resume
				}
			}
		} = this.props

		return (
			<Popup
				title={resume ? 'Сияй как звезда' : 'Разговор с пользой'}
				bg="callback"
			>
				<Form
					{ ...{ location  }}
				/>
			</Popup>
		)
	}
}
