import React from 'react'

import Icon from '../icon/icon.react.js'

const socials = [{
	service: 'vk',
	url: 'https://vk.com/siyanie.genpodryad'
},{
	service: 'facebook',
	url: 'https://facebook.com/siyaniegenpodryad'
},{
	service: 'instagram',
	url: 'https://instagram.com/siyanie.group'
}]

export default class Social extends React.Component {
	render () {
		return (
			<div className="social">
				{socials.map(({service, url}, index) => (
					<a
						key={index}
						href={url}
						className="social__link social__link--{service}">
						<Icon className="social__icon" icon={`social-${service}`} />
					</a>
				))}
			</div>
		)
	}
}
