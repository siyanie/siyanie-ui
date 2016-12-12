import React, {Component} from 'react'

class Person extends Component {
	render() {
		const {
			data: {
				quote,
				name,
				post
			},
			params: {
				subsection
			}
		} = this.props

		return (
			<div className="person">
				<div className="person__quote"
					dangerouslySetInnerHTML={
						{
							__html: quote
						}
					}
				/>
				<div className="person__name">{name}</div>
				<div className="person__post">{post}</div>
				{
					subsection === 'work'
						? <div className="person__button">Отправить резюме</div>
						: null
				}
			</div>
		)
	}
}

export default Person
