import { Link } from 'react-router'

const sections = [{
	id: 'about',
	text: 'О компании'
},{
	id: 'services',
	text: 'Услуги'
},{
	id: 'press-center',
	text: 'Пресс-центр'
},{
	id: 'contacts',
	text: 'Контакты',
	url: 'https://www.google.ru/maps/place/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+24,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+107023/@55.7889726,37.7061055,17.5z/data=!4m13!1m7!3m6!1s0x46b5350cb943c82b:0x55282a533f34d8ef!2z0K3Qu9C10LrRgtGA0L7Qt9Cw0LLQvtC00YHQutCw0Y8g0YPQuy4sIDI0LCDQnNC-0YHQutCy0LAsIDEwNzAyMw!3b1!8m2!3d55.788974!4d37.707584!3m4!1s0x46b5350cb943c82b:0x55282a533f34d8ef!8m2!3d55.788974!4d37.707584'
},{
	id: 'projects',
	text: 'Проекты',
	url: '/projects'
}]

export default ({ params }) => (
	<menu className="menu">
		{sections.map(({id, text, url}) => (
			<Link
				key={id}
				to={url ? url : `/section/${id}`}
				target={/^http/.test(url) ? '_blank' : null}
				className={`menu__link ${params && params.section === id ? '_active' : ''}`}
			>{text}</Link>
		))}
	</menu>
)
