const fs = require('fs')
const prms = require('./utils/prms')
const writeFile = prms(fs.writeFile)
const mkdir = require('./utils/mkdir')
const favicons = require('favicons')

const source = 'node_modules/siyanie-graphics/src/icons/siyanie.svg'
const config = {
	appName: 'Сияние',
	appDescription: 'Сайт компании \"Сияние-Генподряд\"',
	developerName: 'alanev',
	developerURL: 'http://alanev.ru',
	background: '#15233c',
	path: '/assets/icons',
	display: 'standalone',
	orientation: 'portrait',
	start_url: '/#/',
	version: '1.0',
	logging: true,
	online: false,
	preferOnline: false,
	icons: {
		android: true,
		appleIcon: true,
		appleStartup: true,
		coast: { offset: 10 },
		favicons: true,
		firefox: true,
		windows: true,
		yandex: true
	}
}
const callback = (error, response) => {
	if (error) {
		console.log(error.status)
		console.log(error.name)
		console.log(error.message)
	}
	response.images.concat(response.files).forEach(({ name, contents }) => {
		writeFile(`build${config.path}/${name}`, contents)
			.then(() => console.log(`${name} writen!`))
			.catch(console.error)
	})
	writeFile('modules/g-head/g-head.icon.html', response.html.join('\n'))
		.then(() => console.log('HTML writen!'))
		.catch(console.error)
}

mkdir('build/assets/icons')
favicons(source, config, callback)

console.log(process.cwd())
