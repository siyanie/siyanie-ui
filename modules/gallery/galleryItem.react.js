import React, {Component} from 'react'
import Lightbox from 'react-images'

import Icon from '../icon/icon.react'

const remote = (src) => {
	return /^(https?:)?(\/\/)/.test(src)
}
const getImage = (src) => {
	return remote(src) ? src : `assets/images/${src}`
}

class GalleryItem extends Component {
	constructor () {
		super()

		this.state = {
			currentImage: 0,
			isLightboxOpen: false
		}
	}
	_openLightbox () {
		this.setState({
			isLightboxOpen: true
		})
	}
	_closeLightbox () {
		this.setState({
			isLightboxOpen: false
		})
	}
	_nextLightbox () {
		this.setState({
			currentImage: this.state.currentImage + 1
		})
	}
	_prevLightbox () {
		this.setState({
			currentImage: this.state.currentImage - 1
		})
	}
	_handleDot (index) {
		return () => {
			this.setState({
				currentImage: index
			})
		}
	}
	render() {
		const {
			previews,
			images,
			name
		} = this.props
		const {
			currentImage
		} = this.state

		return (
			<div className="gallery__slide">
				<div className="gallery__item">
					<div className="gallery__images" onClick={::this._openLightbox}>
					{
						previews.map((preview, index) => (
							<img
								key={`gallery__image--${index}`}
								className={`gallery__image ${index === currentImage ? '_active' : ''}`}
								src={getImage(preview)}
								alt={`${name} | страница ${index}`}
							/>
						))
					}
						<div className="gallery__loupe">
							<Icon className="gallery__loupe-icon" icon="search" />
						</div>
					</div>
					<div className="gallery__label">{name}</div>
					{
						previews.length > 1
						? (
							<div className="gallery__dots">
							{
								previews.map((preview, index) => (
									<div
										key={`gallery__dot--${index}`}
										className={`gallery__dot ${index === currentImage ? '_active' : ''}`}
										onClick={::this._handleDot(index)}
									/>
								))
							}
							</div>
						)
						: null
					}
					<Lightbox
						images={
							images.map(image => {
								return {
									src: getImage(image)
								}
							})
						}
						backdropClosesModal={true}
						showCloseButton={false}
						imageCountSeparator=" из "
						currentImage={this.state.currentImage}
						isOpen={this.state.isLightboxOpen}
						onClose={::this._closeLightbox}
						onClickNext={::this._nextLightbox}
						onClickPrev={::this._prevLightbox}
					/>
				</div>
			</div>
		)
	}
}

export default GalleryItem
