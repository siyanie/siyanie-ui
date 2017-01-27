const { hostname } = location
const isDevHost = hostname == 'localhost' || hostname == 'siyanie.github.io'
const assets =
	isDevHost
		? '//siyanie.github.io/siyanie-data/'
		: '//data.siyanie-genpodryad.ru/'

console.log(assets)

module.exports = {
	isDevHost,
	assets: {
		data: assets,
		pdf: `${assets}pdf/`,
		images: `${assets}images/`,
		videos: `${assets}videos/`
	},
	googleKey: 'AIzaSyBnCTjd0wDllSypwCk4oiBpWN2jsT1eJ4o',
}
