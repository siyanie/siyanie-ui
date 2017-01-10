const { watch } = require('chokidar')
const watchOptions = {
	ignoreInitial: true
}

// tasks
const styles = require('./styles')
const templates = require('./templates')
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

watch(['modules.yml'])
	.on('change', path => {
		require('./modules')
		console.log(path, 'changed')
	})
