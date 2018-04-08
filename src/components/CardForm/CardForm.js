import React from 'react'
import './CardForm.css'


class CardForm extends React.Component{

	componentWillUnmount(){

	}

	handleChangeForm = (event) => {

		const { name, value } = event.target
		this.props.onChangeForm(name, value)
	}

	render(){

		const { handleChangeForm } = this
		const { cardNumber } = this.props

		return(
			<div data-test="card-form">
				<h1 className="title">Номер карты</h1>
				<div className="card-form">
					<h1 className="title">Номер карты</h1>
					<input name="cardNumber" placeholder="0000000000000000" onChange={handleChangeForm} value={cardNumber}/>
				</div>
			</div>
		)
	}

}


export default CardForm