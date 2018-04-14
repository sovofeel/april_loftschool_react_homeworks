import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  }
  handleChange = inputValue => {
    this.setState({cardNumber: inputValue});
  };
  render() {
    const {cardNumber} = this.state;

    return <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange}/>;
  }
}

export default CardNumberHolder;
