import React from 'react'
import './PersonalForm.css'


class PersonalForm extends React.Component{

	handleChangeForm = (event) => {
		const { name, value } = event.target
		this.props.onChangeForm(name, value)
	}

	render(){

		const { handleChangeForm } = this
		const {firstName, lastName, email } = this.props
		
		return (
			<div data-test="personal-form">
				<div className="personal-form">
					<h1 className="title">Персональная информация</h1>
					<input name="firstName" placeholder="First name" value={firstName} onChange={handleChangeForm}/>
					<input name="lastName" placeholder="Last name" value={lastName} onChange={handleChangeForm}/>
					<input name="email" placeholder="Email" value={email} onChange={handleChangeForm}/>
				</div>
			</div>
		)
	}

}


export default PersonalForm