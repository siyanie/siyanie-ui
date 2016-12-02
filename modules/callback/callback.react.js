import { Component } from 'react'
import { findDOMNode } from 'react-dom'

import Icon from '../icon/icon.react'
import { Link } from 'react-router'
import InputElement from 'react-input-mask'

export default class Callback extends Component {
	constructor () {
		super()

		this.state = {
			name: '',
			tel: '',
			email: '',
			sent: false
		}
	}
	_changeInput ({ target: input}) {
		this.setState({
			[input.name]: input.value
		})
	}
	_submit (e) {
		e.preventDefault()
		this.setState({
			sent: true
		})
	}
	componentDidMount () {
		this.refs.inputName.focus()
	}
	render () {
		const { name, tel, email, sent } = this.state
		const changeInput = this._changeInput.bind(this)

		return (
			<div className="callback">
				<div className="callback__content">
					<Link to="/">
						<Icon
							className="callback__close"
							icon="cross" />
					</Link>
					<div className="callback__title">Разговор с пользой</div>
					<form
						method="post"
						className={`callback__form ${sent ? '_sent' : ''}`}
						onSubmit={this._submit.bind(this)}
					>
						<input
							type="text"
							name="name"
							value={name}
							onChange={changeInput}
							ref="inputName"
							className={`callback__field ${name ? '_filled' : '_empty'}`}
							placeholder="Ваше имя"
							required
						/>
						<InputElement
							type="tel"
							name="tel"
							value={tel}
							onChange={changeInput}
							className={`callback__field ${tel ? '_filled' : '_empty'}`}
							placeholder="Телефон"
							required
							mask="+7 (999) 999-99-99"
						/>
						<input
							type="email"
							name="email"
							value={email}
							onChange={changeInput}
							className={`callback__field ${email ? '_filled' : '_empty'}`}
							placeholder="e-mail"
						/>
						<button
							className="callback__submit"
							disabled={!name || !/\+7 \(\d{3}\) \d{3}(-\d{2}){2}/.test(tel)}
						>Перезвоните</button>
					</form>
					<div
						className={`callback__thanks ${sent ? '_sent' : ''}`}
					>
						<Icon className="callback__thanks-check" />
						<div className="callback__thanks-note">Спасибо за проявленный интерес. <br/>Мы перезвоним Вам в скором времени.</div>
					</div>
				</div>
			</div>
		)
	}
}
