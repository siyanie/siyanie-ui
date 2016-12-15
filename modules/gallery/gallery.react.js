import React, {Component} from 'react'

import GalleryItem from './galleryItem.react'
import Arrow from '../arrow/arrow.react'

class componentName extends Component {
	constructor () {
		super()

		this.state = {
			items: 4,
			current: 0,
			shift: 0
		}
	}
	_next () {
		let { current } = this.state
		if (++current <= this.props.data.docs.length - this.state.items) {
			this.setState({
				current
			})
		}
	}
	_prev () {
		let { current } = this.state
		if (--current >= 0) {
			this.setState({
				current
			})
		}
	}
	componentDidMount() {
		const item = this.refs.gallery.querySelector('.gallery__slide')
		if (item) {
			this.setState({
				shift: item.offsetWidth
			})
		}
	}
	render () {
		const {
			data: {
				docs
			}
		} = this.props
		const {
			items,
			current,
			shift
		} = this.state

		return (
			<div
				className="gallery"
				ref="gallery"
			>
				<Arrow
					className={`slick-prev ${current === 0 ? 'slick-disabled' : ''}`}
					onClick={::this._prev}
				/>
				<div
					className="gallery__list"
					style={
						{
							transform: `translateX(-${current * shift}px)`
						}
					}
				>
				{
					docs.map((data, index) => (
						<GalleryItem
							{...data}
							key={`gallery__item--${index}`}
						/>
					))
				}
				</div>
				<Arrow
					className={`slick-next ${current === docs.length - items ? 'slick-disabled' : ''}`}
					onClick={::this._next}
				/>
			</div>
		)
	}
}

export default componentName
