import React, {Component} from 'react'

const settings = {
	start: 1999,
	end: 2015,
	shift: 16 * 8
}

class Timeline extends Component {
	constructor() {
		super()

		this.state = {
			current: settings.start,
			move: 0
		}
	}
	_move({ nativeEvent: { x } }) {
		const { innerWidth: vw } = window
		this.setState({
			move: ((x / vw - .5) * settings.shift)
		})
	}
	_unmove() {
		this.setState({
			move: 0
		})
	}
	_setYear(year) {
		return () => {
			this.setState({
				current: year
			})
			const moveToSlide = this._getSlideIndex(year, settings.start)
			this.props.selectSlide(moveToSlide)()
		}
	}
	_getSlideIndex(current, start) {
		return current - start
	}
	render() {
		const years = []
		const { start, end, shift } = settings
		const { current, move } = this.state
		const currentIndex = current - start

		for (let i = start; i <= end; i++) {
			years.push(i)
		}

		return (
			<div
				className="timeline"
			>
				<div className="timeline__label">Наша история:</div>
				<div className="timeline__wrap">
					<div
						className="timeline__list"
						ref="timeline"
						style={{
							marginLeft: `calc(50% - ${(shift * currentIndex) + (shift / 2)}px)`,
							left: `${move * -1}px`
						}}
						onMouseOver={::this._move}
						onMouseMove={::this._move}
						onMouseLeave={::this._unmove}
					>
						{
							years.map(year => {
								const className =
									current == year
										? '_active'
										: current - 1 == year || current + 1 == year
											? '_preactive'
											: current - 2 == year || current + 2 == year
												? '_prepreactive'
												: ''

								return (
									<div
										key={`timeline__year--${year}`}
										className={`timeline__year ${className}`}
										onClick={::this._setYear(year)}
									>{year}</div>
								)
							})
						}
						<div className="timeline__continue">Продолжение следует...</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Timeline
