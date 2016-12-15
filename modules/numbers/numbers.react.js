import React, {Component} from 'react'

class Numbers extends Component {
	render() {
		const {
			data: {
				numbers
			}
		} = this.props

		return (
			<div className="numbers">
				{
					numbers.map((numb, index) => (
						<div
							key={`numbers__number--${index}`}
							className="numbers__number"
						>
							<div className="numbers__value">{numb.value}</div>
							<div className="numbers__label">{numb.label}</div>
						</div>
					))
				}
			</div>
		)
	}
}

export default Numbers
