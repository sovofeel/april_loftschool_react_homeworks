import React, { Component } from 'react';

class CardNumberInput extends Component {

  state = {
    number: ""
  }

  format(str) {
    if (str) {
      return str.toString().replace(/(\d{4})/g, '$1 ').trim();
    }
    return '';
  }

  normalize(str) {
    if (str) {
      return str.replace(/\s+/g, '');
    }
    return '';
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState) => ({number: this.format(nextProps.cardNumber)}))
  }

  componentWillMount() {
    this.setState((prevState) => ({number: this.format(this.props.cardNumber)}))
  }

  onChange = (e) => {
    const number = this.normalize(e.target.value);

    this.props.onChange(number, 'CardNumberInput');
  }

  render() {
    const {number = ""} = this.state;

    return <input type="text" onChange={this.onChange} value={number}/>
  }
}

export default CardNumberInput;
