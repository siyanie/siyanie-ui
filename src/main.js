import preloader from '../modules/preloader/preloader.js'

preloader.init()

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Page from '../modules/g-page/g-page.react.js'
import Video from '../modules/video/video.react'
import Section from '../modules/section/section.react'

render(
	<Router history={hashHistory}>
		<Route path="/" component={Page}>
			<IndexRoute component={Video} />
			<Route path="section/:section/:subsection" component={Section} />
			<Section />
		</Route>
	</Router>,
	document.querySelector('.g-page__content')
)

module.hot.accept()
