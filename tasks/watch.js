const { watch } = require('chokidar')
const watchOptions = {
	ignoreInitial: true
}

// tasks
const styles = require('./styles')
const templates = require('./templates')
const images = require('./images')
const server = require('./server')

server()

watch(['modules/*/*.scss', 'src/*.scss'], watchOptions)
	.on('all', (e, path) => {
		styles(undefined, undefined, () => {
			console.log(e, path, 'done')
		})
	})

watch(['modules/*/*.html', 'src/*.html'], watchOptions)
	.on('all', (e, path) => {
		templates(undefined, undefined, () => {
			console.log(e, path, 'done')
		})
	})

watch(['modules/**/*.{png,jpg}'], watchOptions)
	.on('change', path => {
		images([path])
		console.log(path, 'changed')
	})
	.on('add', path => {
		images([path])
		console.log(path, 'added')
	})

watch(['modules.yml'])
	.on('change', path => {
		require('./modules')
		console.log(path, 'changed')
	})
