import React, {Component} from 'react'

import Popup from '../popup/popup.react'
import config from '../config/config.react'

class ContactsMetro3 extends Component {
	render() {
		return (
			<Popup
				title="от м. электрозаводская"
				bg="contacts"
			>
				<div className="popup__text">{'Выйти из метро и перейти Большую Семеновскую улицу по подземному переходу. \nПройти прямо около 70 метров затем повернуть в Нижний Журавлев переулок. \nДойти до пл. Журавлева (Дворец на Яузе), пересечь сквер до ул. Электрозаводская, затем повернуть направо и дойти до 1-го Электрозаводского переулка. \nПовернуть направо в 1-й Электрозаводский переулок, пройти около 100 метров до двухэтажного желтого здания и за ним повернуть налево на ул. Буженинова. \nПройти 400 метров до входа в 6-этажное бежево-коричневое здание, подъезд № 1 (как ориентир, в этом подъезде СДМ-банк).'}</div>
				<a href={`${config.assets.pdf}electrozavodskaya.pdf`} target="_blank" className="popup__button">PDF</a>
			</Popup>
		)
	}
}

export default ContactsMetro3
