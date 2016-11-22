export default data => {
	let Author
	if (data.author) {
		Author = <div class="quote__author"></div>
	}
	return (
		<div class="section swiper-container">
			<div class="section__wrapper swiper-wrapper">
				<div class="section__slide swiper-slide">
					<div class="section__bg" style="background-image:url(assets/images/{data.image})"></div>
					<div class="section__info">
						<div class="section__title">{data.title}</div>
						<div class="section__text">{data.text}</div>
					</div>
					<div class="section__footer">
						<div class="quote section__footer-content">
							<div class="quote__content">
								<span class="quote__text">{data.quote}</span>
							</div>
							{Author}
						</div>
					</div>
				</div>
			</div>
			<div class="section__pag swiper-pagination"></div>
			<div class="section__buttons">
				<div class="section__button section__button--prev swiper-button-prev">
					<icon class="section__button-icon">arrow</icon>
				</div>
				<div class="section__button section__button--next swiper-button-next">
					<icon class="section__button-icon">arrow</icon>
				</div>
			</div>
		</div>
	)
}
