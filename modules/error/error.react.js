import { Component } from 'react'
import { Link } from 'react-router'

class ErrorPage extends Component {
	render() {
		return (
			<div className="error">
				<div
					className="error__bg"
					style={
						{
							clipPath: 'url(#icon--error)'
						}
					}
				></div>
				<div className="error__info">
					Страница не найдена. <br/>
					Попробуйте начать <Link
						to="/"
						className="error__link"
					>сначала</Link>. <br/>
					При должном упорстве у вас все получится.
				</div>
			</div>
		)
	}
}

export default ErrorPage
