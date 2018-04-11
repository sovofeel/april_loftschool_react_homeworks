import React, { Component, Fragment } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  static displayName = 'Card number formating'

  state = {
    cardNumber: ''
  }

  handleChange(number) {
    this.setState({ cardNumber: number })
  }

  render() {
    const { cardNumber } = this.state

    return (
      <Fragment>
        <CardNumberInput onChange={this.handleChange} cardNumber={cardNumber} />
      </Fragment>
    );
  }
}

export default CardNumberHolder;
