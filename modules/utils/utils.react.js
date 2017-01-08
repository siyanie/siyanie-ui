const utils = {
	getVW() {
		return window.innerWidth / window.devicePixelRatio
	},
	getDPI() {
		return window.devicePixelRatio
	},
	loadScript() {

	},
	fetch(url, method) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open(method, url)
			xhr.onreadystatechange = () => {
				if (xhr.readyState != 4 || xhr.status != 200)
					reject(xhr.status)
				resolve(xhr.responseText)
			}
			xhr.send(null)
		})
	}
}

export default utils
