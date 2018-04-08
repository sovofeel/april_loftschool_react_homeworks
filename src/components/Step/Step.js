import React from 'react'
import './Step.css'

class Step extends React.Component{


	handleClick = (e) => {
		
		const { isClickable, onClick, number } = this.props


		isClickable && onClick(number)
	}

	render(){

		const { handleClick } = this
		const { isSelected, isClickable, number, children } = this.props


		return (
			<div 
				className={`step ${isSelected && 'step-selected'} ${isClickable && 'step-clickable'}`}
				onClick={handleClick}
			>
				<p className="step__number">{number}</p>
				<p className="step__title">{children}</p>
			</div>
		)
	}

}

export default Step