import 'whatwg-fetch'
require('smoothscroll-polyfill').polyfill()

import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'

import Page from '../modules/g-page/g-page.react.js'
import Video from '../modules/video/video.react'
import Section from '../modules/section/section.react'
import Contacts from '../modules/contacts/contacts.react'
import ContactsMetro3 from '../modules/contacts/contacts.metro3.react'
import ContactsMetro45 from '../modules/contacts/contacts.metro45.react'
import Callback from '../modules/callback/callback.react'
import Project from '../modules/project/project.react'
import Projects from '../modules/projects/projects.react'
import ErrorPage from '../modules/error/error.react'
import Footer from '../modules/footer/footer.react'
import FooterInner from '../modules/footer/footer.true.react'
import FooterNo from '../modules/footer/footer.no.react'

const Root = ({ children }) => children

render(
	<Root>
		<Router history={hashHistory}>
			<Route path="/" component={Page}>
				<IndexRoute components={{ content: Video, footer: Footer }} />
				<Route path="section/:section/:subsection" components={{ content: Section, footer: FooterInner}} />
				<Route path="callback" components={{ content: Callback }} />
				<Route path="contacts" components={{ content: Contacts, footer: Footer }} />
				<Route path="contacts-metro3" components={{ content: ContactsMetro3, footer: Footer }} />
				<Route path="contacts-metro45" components={{ content: ContactsMetro45, footer: Footer }} />
				<Route path="projects" components={{ content: Projects, footer: Footer }}  />
				<Route path="project/:project" components={{ content: Project, footer: FooterNo }} />

				<Redirect from="/section/about" to="/section/about/onas" />
				<Redirect from="/section/services" to="/section/services/gen" />
				<Redirect from="/section/press-center" to="/section/press-center/news" />

				<Route path="*" components={{ content: ErrorPage}} />
			</Route>
		</Router>
	</Root>,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept()
}
