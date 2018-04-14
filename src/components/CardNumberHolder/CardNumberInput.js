import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardNumberInput extends Component {
  static propTypes = {
    cardNumber: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func.isRequired,
  };

  state = {
    number: this.props.cardNumber,
  };

  componentWillReceiveProps(nextProps) {
    const formatted = this.format(nextProps.cardNumber);

    this.setState({ number: formatted });
  }

  componentWillMount() {
    const { number } = this.state;

    if (number) {
      const formatted = this.format(number);
      this.setState({ number: formatted });
    }
  }

  format = num => {
    if (num) {
      return String(num)
        .replace(/(\d.{3})/g, '$1 ')
        .trim();
    }

    return '';
  };

  normalize = num => {
    return num.replace(/[^\d]/g, '');
  };

  handleInputChange = e => {
    const { onChange } = this.props;

    onChange(this.normalize(e.target.value));
  };

  render() {
    const { number } = this.state;

    return (
      <input
        type="text"
        value={number}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default CardNumberInput;
