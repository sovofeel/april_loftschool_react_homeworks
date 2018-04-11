import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput'



class CardNumberHolder extends Component {

  static displayName = 'Card number formating'

  state = {
    cardNumber: ''
  }
  

  handleChange = (cardNumber) => {
    this.setState({
      ...this.state,
      cardNumber: cardNumber
    })
  }

  render() {
    const { handleChange, state:{ cardNumber } } = this


    return(
      <CardNumberInput
        cardNumber={cardNumber}
        onChange={handleChange} 
      />
    )
  }
}

export default CardNumberHolder;
