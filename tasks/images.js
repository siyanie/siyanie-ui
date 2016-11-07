const imagemin	= require('imagemin')
const mozjpeg	= require('imagemin-mozjpeg')
const pngquant	= require('imagemin-pngquant')
const webp		= require('imagemin-webp')
const imageminOptions = {
	plugins:
	[
		mozjpeg(),
		pngquant()
	]
}
const imageminOptionsWebp = {
	plugins:
	[
		webp({
			quality: 50
		})
	]
}
const callback = {
	fail (err) {
		console.error(err)
	},
	pass (files) {
		if (files.length > 0) {
			// Define action
			let action = 'Minified'
			if (/\.webp$/.test(files[0].path)) action = 'Convert to webp'

			// // Log
			console.log(`${action}: ${files.length} images.`)
		} else {
			console.log('No images')
		}
	}
}

const task = (
	paths = ['modules/**/*.{png,jpg}'],
	outputDir = 'build/assets/images'
) => {
	imagemin(
			paths,
			outputDir,
			imageminOptions
		)
		.then(callback.pass)
		.catch(callback.fail)

	imagemin(
			paths,
			outputDir,
			imageminOptionsWebp
		)
		.then(callback.pass)
		.catch(callback.fail)
}

module.exports = task
