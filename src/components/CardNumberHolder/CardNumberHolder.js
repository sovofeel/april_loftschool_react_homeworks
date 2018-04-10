import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput'



class CardNumberHolder extends Component {

  constructor(props){
    super(props)

    this.state = {
      cardNumber: ''
    }
  }


  handleChange = (e) => {
    this.setState({
      ...this.state,
      cardNumber: e.target.value
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
