import React, {Component} from 'react'

import config from '../config/config.react'
import Popup from '../popup/popup.react'

class ContactsMetro45 extends Component {
	render() {
		return (
			<Popup
				title={'от м. Преображенская \nплощадь'}
				bg="contacts"
			>
				<div className="popup__text">{'Из последнего вагона из центра идти влево по подземному переходу к выходу к БЦ «Преображенский». \nПройти вдоль Преображенской площади около 200 метров, мимо храма «Преображения Господня», затем повернуть налево на ул. Буженинова. \nПо ул. Буженинова идти вниз 5-7 минут до 6-этажного бежево-коричневого здания с вывеской «СДМ-Банк», вход в центре здания.'}</div>
				<a href={`${config.assets.pdf}preobragenkskaya_pl.pdf`} target="_blank" className="popup__button">PDF</a>
			</Popup>
		)
	}
}

export default ContactsMetro45
