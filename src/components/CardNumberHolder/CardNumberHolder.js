import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  }

  handleChange = (cardNumber) => {
    this.setState({
      cardNumber: cardNumber
    })
  }
  render() {
    return (
      <CardNumberInput onChange={this.handleChange} cardNumber={this.state.cardNumber}/>
    );
  }
}

export default CardNumberHolder;
