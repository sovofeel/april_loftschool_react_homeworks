import React, { Component } from 'react';
import { compact } from 'lodash';

class CardNumberInput extends Component {
  static defaultProps = {
    onChange: f => f,
    cardNumber: '',
  };

  state = {
    number: '',
  };

  format(number) {
    return number === null
      ? ''
      : compact(`${number}`.split(/(.{1,4})/g))
          .join(' ')
          .trim();
  }

  normalize(number) {
    return number.split(' ').join('');
  }

  handleChange = ev => {
    const { value } = ev.target;
    const { onChange } = this.props;

    onChange(this.normalize(value));
  };

  componentWillReceiveProps(newProps) {
    let { cardNumber } = newProps;

    this.setState({ number: this.format(cardNumber) });
  }

  componentDidMount() {
    const { cardNumber } = this.props;

    this.setState({ number: this.format(cardNumber) });
  }

  render() {
    const { number } = this.state;

    return <input onChange={this.handleChange} value={number} />;
  }
}

export default CardNumberInput;
