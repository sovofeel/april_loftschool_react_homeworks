import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: this.props.cardNumber,
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    this.setState(prevState => ({ number: this.format(nextProps.cardNumber) }));
  }

  componentWillMount() {
    this.setState(prevState => ({ number: this.format(this.props.cardNumber) }));
  }

  format(str) {
    if (str) {
      return str
        .toString()
        .replace(/(\d{4})/g, '$1 ')
        .trim();
    }
    return '';
  }

  normalize(str) {
    if (str) {
      return str.replace(/\s+/g, '');
    }
    return '';
  }

  handleChange = e => {
    const { name, value } = e.target;
    const number = this.normalize(value);
    this.props.onChange(number, name);
  };

  render() {
    const { number } = this.state;

    return <input type="text" name="CardNumberInput" onChange={this.handleChange} value={number} />;
  }
}

export default CardNumberInput;
