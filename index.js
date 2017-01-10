const prms = require('./tasks/utils/prms')
const fs = require('fs')
const stat = prms(fs.stat)

stat('./build/assets/fonts/')
	.then(console.log)
	.catch(console.error)
