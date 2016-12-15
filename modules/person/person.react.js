import React, {Component} from 'react'

class Person extends Component {
	render() {
		const {
			data: {
				quote,
				name,
				post
			}
		} = this.props

		return (
			<div className="person">
				<div className="person__quote">{quote}</div>
				<div className="person__name">{name}</div>
				<div className="person__post">{post}</div>
			</div>
		)
	}
}

export default Person
