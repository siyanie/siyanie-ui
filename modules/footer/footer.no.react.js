import React, {Component} from 'react'
import MediaQuery from 'react-responsive'

import Footer from './footer.react'

class FooterNo extends Component {
	render() {
		return (
			<MediaQuery query="(max-width: 1023px)">
				<Footer {...this.props} />
			</MediaQuery>
		)
	}
}

export default FooterNo
