export default ({ icon, className }) => (
	<svg className={className}>
		<use xlinkHref={`#icon--${icon}`}></use>
	</svg>
)
