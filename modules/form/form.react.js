import React, {Component} from 'react'
import InputElement from 'react-input-mask'

import Icon from '../icon/icon.react'

class Form extends Component {
	constructor () {
		super()

		this.state = {
			name: '',
			tel: '',
			email: '',
			file: '',
			error: false,
			sent: false
		}
	}
	_changeInput ({ target: input}) {
		this.setState({
			[input.name]: input.value
		})
	}
	_file ({ target: { value: file } }) {
		this.setState({
			file
		})
	}
	_submit (e) {
		e.preventDefault()
		this._send(() => {
			this.setState({
				error: true
			})
		}, () => {
			this.setState({
				sent: true
			})
		})
	}
	_send(error, success) {
		const xhr = new XMLHttpRequest()
		const body = new FormData(this.refs.form)

		xhr.open('POST', '//siyanie.alanev.ru/', true)

		xhr.onreadystatechange = () => {
			if (xhr.readyState != 4) return

			if (xhr.status === 200) {
				success()
			} else {
				error()
			}
		}

		xhr.send(body)
	}
	componentDidMount () {
		this.refs.inputName.focus()
	}
	render() {
		const {
			state: {
				name,
				tel,
				email,
				file,
				sent,
				error
			},
			props: {
				location: {
					query: {
						resume
					}
				}
			}
		} = this

		return (
			<div className="form">
				<form
					method="post"
					ref="form"
					className={`form__form ${sent ? '_sent' : ''}`}
					onSubmit={this._submit.bind(this)}
				>
					<input
						type="text"
						name="name"
						value={name}
						onChange={::this._changeInput}
						ref="inputName"
						className={`form__field ${name ? '_filled' : '_empty'}`}
						placeholder="Ваше имя"
						required
					/>
					<div className="form__field-line"></div>
					<InputElement
						type="tel"
						name="tel"
						value={tel}
						onChange={::this._changeInput}
						className={`form__field ${tel ? '_filled' : '_empty'}`}
						placeholder="Телефон"
						required
						mask="+7 (999) 999-99-99"
						maskChar="_"
					/>
					<div className="form__field-line"></div>
					<input
						type="email"
						name="email"
						value={email}
						onChange={::this._changeInput}
						className={`form__field ${email ? '_filled' : '_empty'}`}
						placeholder="e-mail"
					/>
					<div className="form__field-line"></div>
					{
						resume
							? (
								<div className="form__file">
									<input
										className="form__file-input"
										type="file"
										name="resume"
										id="file"
										onChange={::this._file}
										required
									/>
									<label
										ref="file"
										className={`form__file-label ${file ? '_selected' : ''}`}
										htmlFor="file"
									>
									{
										file ? file.replace(/^.*[\\\/]/, '') : 'Выберите файл'
									}
									</label>
								</div>
							)
							: null
					}
					<button
						className="form__submit"
						disabled={!name || !/\+7 \(\d{3}\) \d{3}(-\d{2}){2}/.test(tel)}
					>Перезвоните</button>
					{
						error
							? (
								<div className="form__error">Возникла ошибка <br />Попробуйте отправить еще раз</div>
							)
							: null
					}
				</form>
				<div
					className={`form__thanks ${sent ? '_sent' : ''}`}
				>
					<div className="form__thanks-check">
						<Icon
							className="form__thanks-icon"
							icon="check"
						/>
					</div>
					<div className="form__thanks-note">Спасибо за проявленный интерес. <br/>Мы перезвоним Вам в скором времени.</div>
				</div>
			</div>
		)
	}
}

export default Form
