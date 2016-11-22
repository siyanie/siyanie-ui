const glob = require('glob')
const { rename } = require('fs')

glob('data/images/uslugi*.jpg', (err, files) => {
	if (!err) {
		files.forEach(file => {
			rename(file, file.replace('uslugi', 'services'), err => {
				if (err) {
					console.error('Smth wrong: ', err)
				} else {
					console.info('Done: ', file)
				}
			})
		})
	}
})
