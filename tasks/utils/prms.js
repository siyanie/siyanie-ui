module.exports = (method) => {
	return (...options) => {
		return new Promise((resolve, reject) => {
			method(...options, (err, ...output) => {
				if (err) {
					reject(err)
				} else {
					resolve(...output)
				}
			})
		})
	}
}
