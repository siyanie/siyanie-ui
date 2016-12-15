export default (props) => {
	const {
		icon,
		className,
		inline,
		width,
		height
	} = props
	const content = inline
		? (() => {
			const symbol = document.getElementById(`icon--${icon}`)
			return (
				<svg
					className={className}
					data-icon={icon}
					width={width}
					height={height}
					viewBox={symbol.getAttribute('viewBox')}
					dangerouslySetInnerHTML={{__html: symbol.innerHTML}}
				></svg>
			)
		})()
		: (() => {
			return (
				<svg className={className} data-icon={icon}>
					<use xlinkHref={`#icon--${icon}`}></use>
				</svg>
			)
		})()

	return content
}
