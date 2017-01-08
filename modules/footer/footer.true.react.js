import React, {Component} from 'react'
import MediaQuery from 'react-responsive'

import Footer from './footer.main.react'
import FooterInner from './footer.inner.react'

class FooterInnterTrue extends Component {
	render() {
		return (
			<div className="footer">
				<MediaQuery query="(max-width: 1023px)">
					<Footer {...this.props} />
				</MediaQuery>
				<MediaQuery query="(min-width: 1024px)">
					<FooterInner {...this.props} />
				</MediaQuery>
			</div>
		)
	}
}

export default FooterInnterTrue
