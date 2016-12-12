import React, {Component} from 'react'

import Icon from '../icon/icon.react'

class Clients extends Component {
	render() {
		const {
			data: {
				clients
			}
		} = this.props

		return (
			<div className="clients">
				{
					clients.map((client, index) => (
						<div
							key={`clients__client--${index}`}
							className="clients__client"
						>
							<Icon
								className="clients__logo"
								icon={`logo-${client}`}
							/>
						</div>
					))
				}
			</div>
		)
	}
}

export default Clients
