const CALLBACK = '__initMap'
const KEY = ''
const URL = `https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=${CALLBACK}`

export default class GoogleAPI {
	constructor(){

		this.loadAPI = new Promise((resolve) => {
			window[CALLBACK] = () => {
				console.log('gapi loaded')
				resolve(window.gapi)
			}
			this.loadScript()
		})

	}

	doSomethingGoogley(){
		return this.loadAPI.then((gapi) => {
			console.log(gapi)
		})
	}

	loadScript(){
		console.log('loading..')
		let node = document.createElement('script')
		node.src = URL
		node.type = 'text/javascript'
		document.getElementsByTagName('head')[0].appendChild(node)

	}
}
