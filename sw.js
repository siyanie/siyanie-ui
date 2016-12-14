var CACHE = 'cache-and-update'

function precache() {
	return caches.open(CACHE).then(function (cache) {
		return cache.addAll([
			'./assets/fonts/ARubricaXtCn.woff',
			'./assets/fonts/ARubricaXtCn.woff2',
			'./assets/fonts/FFMorePro-CondBook.woff',
			'./assets/fonts/PTSans-Bold.woff',
			'./assets/fonts/PTSans.woff',
			'./assets/fonts/PTSansPro-CondensedBlack.woff',
			'./assets/fonts/PTSansPro-DemiItalic.woff',
			'./assets/icons/android-chrome-144x144.png',
			'./assets/icons/android-chrome-192x192.png',
			'./assets/icons/android-chrome-256x256.png',
			'./assets/icons/android-chrome-36x36.png',
			'./assets/icons/android-chrome-384x384.png',
			'./assets/icons/android-chrome-48x48.png',
			'./assets/icons/android-chrome-512x512.png',
			'./assets/icons/android-chrome-72x72.png',
			'./assets/icons/android-chrome-96x96.png',
			'./assets/icons/apple-touch-icon-114x114.png',
			'./assets/icons/apple-touch-icon-120x120.png',
			'./assets/icons/apple-touch-icon-144x144.png',
			'./assets/icons/apple-touch-icon-152x152.png',
			'./assets/icons/apple-touch-icon-167x167.png',
			'./assets/icons/apple-touch-icon-180x180.png',
			'./assets/icons/apple-touch-icon-57x57.png',
			'./assets/icons/apple-touch-icon-60x60.png',
			'./assets/icons/apple-touch-icon-72x72.png',
			'./assets/icons/apple-touch-icon-76x76.png',
			'./assets/icons/apple-touch-icon-precomposed.png',
			'./assets/icons/apple-touch-icon.png',
			'./assets/icons/apple-touch-startup-image-1182x2208.png',
			'./assets/icons/apple-touch-startup-image-1242x2148.png',
			'./assets/icons/apple-touch-startup-image-1496x2048.png',
			'./assets/icons/apple-touch-startup-image-1536x2008.png',
			'./assets/icons/apple-touch-startup-image-320x460.png',
			'./assets/icons/apple-touch-startup-image-640x1096.png',
			'./assets/icons/apple-touch-startup-image-640x920.png',
			'./assets/icons/apple-touch-startup-image-748x1024.png',
			'./assets/icons/apple-touch-startup-image-750x1294.png',
			'./assets/icons/apple-touch-startup-image-768x1004.png',
			'./assets/icons/browserconfig.xml',
			'./assets/icons/coast-228x228.png',
			'./assets/icons/favicon-16x16.png',
			'./assets/icons/favicon-230x230.png',
			'./assets/icons/favicon-32x32.png',
			'./assets/icons/favicon-96x96.png',
			'./assets/icons/favicon.ico',
			'./assets/icons/firefox_app_128x128.png',
			'./assets/icons/firefox_app_512x512.png',
			'./assets/icons/firefox_app_60x60.png',
			'./assets/icons/manifest.webapp',
			'./assets/icons/mstile-144x144.png',
			'./assets/icons/mstile-150x150.png',
			'./assets/icons/mstile-310x150.png',
			'./assets/icons/mstile-310x310.png',
			'./assets/icons/mstile-70x70.png',
			'./assets/icons/yandex-browser-50x50.png',
			'./assets/images/about_onas_1.webp',
			'./assets/images/about_onas_2.webp',
			'./assets/images/about_onas_3.webp',
			'./assets/images/about_onas_4.webp',
			'./assets/images/about_onas_5.webp',
			'./assets/images/about_rabota_bulanov.webp',
			'./assets/images/about_rabota_burluckaya.webp',
			'./assets/images/about_rabota_dianov.webp',
			'./assets/images/about_rabota_korolev.webp',
			'./assets/images/about_rabota_rygov.webp',
			'./assets/images/about_rabota_saranchuk.webp',
			'./assets/images/about_rukovodstvo_bezborodov.webp',
			'./assets/images/about_rukovodstvo_montyan.webp',
			'./assets/images/about_rukovodstvo_savin.webp',
			'./assets/images/about_rukovodstvo_zyablickaya.webp',
			'./assets/images/alfabank_big_2.webp',
			'./assets/images/alfabank_big_2@1.webp',
			'./assets/images/alfabank_big_3.webp',
			'./assets/images/alfabank_big_3@1.webp',
			'./assets/images/alfabank_big_4.webp',
			'./assets/images/alfabank_big_4@1.webp',
			'./assets/images/alfabank_big_5.webp',
			'./assets/images/alfabank_big_5@1.webp',
			'./assets/images/alfabank_big.webp',
			'./assets/images/alfabank_big@1.webp',
			'./assets/images/alfabank_mid.webp',
			'./assets/images/alfabank_sm.webp',
			'./assets/images/alkatel_big_2.webp',
			'./assets/images/alkatel_big_3.webp',
			'./assets/images/alkatel_big_4.webp',
			'./assets/images/alkatel_big_5.webp',
			'./assets/images/alkatel_big.webp',
			'./assets/images/alkatel_mid.webp',
			'./assets/images/alkatel_sm.webp',
			'./assets/images/arktika_big_2.webp',
			'./assets/images/arktika_big_3.webp',
			'./assets/images/arktika_big_4.webp',
			'./assets/images/arktika_big_5.webp',
			'./assets/images/arktika_big_6.webp',
			'./assets/images/arktika_big.webp',
			'./assets/images/arktika_mid.webp',
			'./assets/images/arktika_sm.webp',
			'./assets/images/callback.png',
			'./assets/images/callback.webp',
			'./assets/images/nokia_big_2.webp',
			'./assets/images/nokia_big_3.webp',
			'./assets/images/nokia_big_4.webp',
			'./assets/images/nokia_big_5.webp',
			'./assets/images/nokia_big_6.webp',
			'./assets/images/nokia_big_7.webp',
			'./assets/images/nokia_big.webp',
			'./assets/images/nokia_mid.webp',
			'./assets/images/nokia_sm.webp',
			'./assets/images/press-center_news_1_run.webp',
			'./assets/images/press-center_news_2_book.webp',
			'./assets/images/press-center_news_3_football.webp',
			'./assets/images/services_eom_1.webp',
			'./assets/images/services_eom_2.webp',
			'./assets/images/services_gen_1.webp',
			'./assets/images/services_gen_2.webp',
			'./assets/images/services_gen_3.webp',
			'./assets/images/services_meh_1.webp',
			'./assets/images/services_meh_2.webp',
			'./assets/images/services_meh_3.webp',
			'./assets/images/services_meh_4.webp',
			'./assets/images/services_meh_5.webp',
			'./assets/images/services_obshestroit_1.webp',
			'./assets/images/services_otdelka_1.webp',
			'./assets/images/services_otdelka_2.webp',
			'./assets/images/services_otdelka_3.webp',
			'./assets/images/services_otdelka_4.webp',
			'./assets/images/services_sks_1.webp',
			'./assets/images/services_sks_2.webp',
			'./assets/images/services_sks_3.webp',
			'./assets/images/services_sks_4.webp',
			'./assets/images/services_sks_5.webp',
			'./assets/images/services_sks_6.webp',
			'./assets/images/sinop_big_2.webp',
			'./assets/images/sinop_big_3.webp',
			'./assets/images/sinop_big_4.webp',
			'./assets/images/sinop_big_6.webp',
			'./assets/images/sinop_big.webp',
			'./assets/images/sinop_mid.webp',
			'./assets/images/sinop_sm.webp',
			'./assets/images/sprite.svg',
			'./assets/video/siyanie.mp4',
			'./index.html',
			'./main.js',
			'./modernizr.js',
			'./styles.css',
			'./sw.js'
		])
	})
}

function fromCache(request) {
	return caches.open(CACHE).then(function (cache) {
		return cache.match(request).then(function (matching) {
			return matching || Promise.reject('no-match')
		})
	})
}

function update(request) {
	return caches.open(CACHE).then(function (cache) {
		return fetch(request).then(function (response) {
			return cache.put(request, response)
		})
	})
}

self.addEventListener('install', function(evt) {
	console.log('The service worker is being installed.')

	evt.waitUntil(precache())
})

self.addEventListener('fetch', function(evt) {
	console.log('The service worker is serving the asset.')
	evt.respondWith(fromCache(evt.request))
	evt.waitUntil(update(evt.request))
})
