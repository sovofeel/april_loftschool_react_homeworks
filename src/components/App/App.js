import React from 'react'
import './App.css'

import PersonalForm from '../PersonalForm'
import Step from '../Step'
import CardForm from '../CardForm'

class App extends React.Component{
	

	constructor(props){
		super(props)

		this.state = {
			step: 1,
      firstName: '',
      lastName: '',
      email: '',
			cardNumber: '',
		};
		
		this.steps = [
			{text: 'Personal information'},
			{text: 'Card information'},
			{text: 'Finish'}
		]
	}



	

	handleTabClick = (number) => {
		this.setState({
			step: parseInt(number, 10)
		})

	}

	handleChangeForm = (name, value) => {
		if(this.isFormCommitable) {
			this.setState({
				[name]: value
			})
		}
	}


	isFormCommitable = () => {
		const {step, firstName, lastName, email, cardNumber} = this.state

		return (
			((step === 1) && (firstName !== '' && lastName !== '' && email !== '' && email.includes('@'))) ||
			((step === 2) && (cardNumber.length === 16)) ||
			false
		)


		// switch(step){
		// 	case 1:
		// 		if(firstName !== '' && lastName !== '' && email !== '' && email.includes('@')){
		// 			return true
		// 		}
		// 		return false
		// 	case 2:
		// 		if(cardNumber.length === 16){
		// 			return true
		// 		}
		// 		return false
		// 	default:
		// 		return false
		// }
	}


	handleChangeForm = (name, value) => {
		this.setState({
			...this.state,
			[name]: value
		})


	}



	handleClickNextForm = (e) => {
		const { step } = this.state

		this.setState({
			...this.state,
			step: step + 1
		})
	}


	renderForm = () => {

		const { step, firstName, lastName, email, cardNumber  } = this.state
		const { handleChangeForm } = this

		switch(step) {
			case 1:
				return <PersonalForm onChangeForm={handleChangeForm} firstName={firstName} lastName={lastName} email={email}/>
			case 2:
				return <CardForm onChangeForm={handleChangeForm} cardNumber={cardNumber}/>
			case 3:
				return <p data-test="congratulations">Поздравляем!</p>
			default:
				return <div>form</div>
		}
	}


	render(){

		const { handleClickNextForm, renderForm, handleTabClick, isFormCommitable, steps } = this
		const { step }  = this.state
		
		return (
			<div className="container">
				<div className="tab-panel">
					{steps.map( (item, idx) => {
						idx = idx + 1 

						return <Step 
							isSelected={idx === step}
							isClickable={idx < step} number={idx} 
							onClick={handleTabClick}
							key={item.text + idx}>
								{item.text}
							</Step>
					})}
				</div>

				<div className="form-content">
					{renderForm()}
				</div>
				<div className="button-panel">
					<button 
						className="button button-next" 
						onClick={handleClickNextForm}
						disabled={!isFormCommitable()}>Next</button>
				</div>
			</div>
		)
	}

}

export default App