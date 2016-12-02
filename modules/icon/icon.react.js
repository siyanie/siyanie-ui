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
					width={width}
					height={height}
					viewBox={symbol.getAttribute('viewBox')}
					dangerouslySetInnerHTML={{__html: symbol.innerHTML}}
				></svg>
			)
		})()
		: (() => {
			return (
				<svg className={className}>
					<use xlinkHref={`#icon--${icon}`}></use>
				</svg>
			)
		})()

	return content
}
