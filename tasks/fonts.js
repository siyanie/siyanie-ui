const { createReadStream, createWriteStream } = require('fs')
const { parse, format } = require('path')
const prms = require('./utils/prms')
const glob = prms(require('glob'))
const mkdirp = prms(require('mkdirp'))

const task = (outdir = 'build/assets/fonts') => {
	glob('modules/**/*.{woff,woff2}')
		.then(files => {
			if (files.length > 0) {
				mkdirp(outdir)
					.then(() => {
						files.forEach(file => {
							let outpath = parse(file)
							outpath.dir = outdir
							outpath = format(outpath)

							createReadStream(file)
								.pipe(createWriteStream(outpath))
						})
					})
			}
		})
}

module.exports = task()
