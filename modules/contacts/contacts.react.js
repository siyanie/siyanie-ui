import React, {Component} from 'react'
import { Link } from 'react-router'
import MediaQuery from 'react-responsive'
import loadGoogleMapsAPI from 'load-google-maps-api'

import config from '../config/config.react'


const LatLng = {
	lng: 37.707621,
	lat: 55.788501
}
const styles = [
	{
		elementType: 'geometry',
		stylers: [{color: '#1e3965'}]
	},
	{
		elementType: 'labels.icon',
		stylers: [{visibility: 'off'}]
	},
	{
		elementType: 'labels.text.fill',
		stylers: [{color: '#4d6a9b'}]
	},
	{
		elementType: 'labels.text.stroke',
		stylers: [{visibility: 'off'}]
	},
	{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [{color: '#1a2e4b'}]
	},
	{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [{color: '#182c45'}]
	},
	{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [{color: '#4d6a9b'}]
	}
]

class Contacts extends Component {

	componentDidMount() {
		loadGoogleMapsAPI({
			key: config.googleKey
		})
			.then((googleMaps) => {
				const map = new googleMaps.Map(this.refs.map, {
					disableDefaultUI: true,
					center: LatLng,
					zoom: 16,
					backgroundColor: '#1e3965'
				})
				map.setOptions({
					styles
				})
				new googleMaps.Marker({
					map,
					position: LatLng,
					animation: googleMaps.Animation.DROP,
					icon: {
						url: '//siyanie.github.io/siyanie-graphics/icons/marker.png',
						size: new googleMaps.Size(97, 61),
						origin: new googleMaps.Point(0, 0),
						anchor: new googleMaps.Point(20, 61)

					},
					shape: {
						coords: [0, 0, 0, 61, 40, 61, 40, 0],
						type: 'poly'
					},
					title: '1Siyanie'
				})
			})
			.catch(console.error)
	}

	render() {
		return (
			<div className="contacts">
				<div className="contacts__main">
					<div className="contacts__title">Контакты</div>
				</div>
				<div className="contacts__map-wrap">
					<div
						ref="map"
						className="contacts__map"
					></div>
				</div>
				<div className="contacts__bottom">
					<MediaQuery query="(min-width: 1024px)">
						<div className="contacts__buttons-wrap">
							<div className="contacts__buttons">
								<Link className="contacts__button" to="/contacts-metro3">от м. Электрозаводская</Link>
								<Link className="contacts__button" to="/contacts-metro45">от м. Преображенская площадь</Link>
							</div>
						</div>
					</MediaQuery>
					<footer className="contacts__footer">
						<address className="contacts__address">107023, г. Москва, ул. Электрозаводская, д. 24</address>
						<a href="tel:+7(495)607-7777" className="contacts__phone">+7 (495) 607-7777</a>
						<a href="mailto:secretary@sgpd.ru" className="contacts__email">secretary@sgpd.ru</a>
					</footer>
				</div>
			</div>
		)
	}
}

export default Contacts
