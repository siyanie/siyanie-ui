const exec = require('./tasks/utils/exec')

exec('npm run watch')
	.then(console.info)
	.catch(console.error)
