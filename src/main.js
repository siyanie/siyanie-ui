import preloader from '../modules/preloader/preloader.js'

preloader.init()

import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'

import Page from '../modules/g-page/g-page.react.js'
import Video from '../modules/video/video.react'
import Section from '../modules/section/section.react'
import Callback from '../modules/callback/callback.react'

render(
	<Router history={hashHistory}>
		<Route path="/" component={Page}>
			<IndexRoute component={Video} />
			<Route path="section/:section/:subsection" component={Section} />
			<Route path="callback" component={Callback} />

			<Redirect from="/section/about" to="/section/about/onas" />
			<Redirect from="/section/services" to="/section/services/gen" />
			<Redirect from="/section/press-center" to="/section/press-center/news" />
		</Route>
	</Router>,
	document.getElementById('root')
)

module.hot.accept()
