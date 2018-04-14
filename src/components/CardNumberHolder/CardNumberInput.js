import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CardNumberInput extends Component {
  state = {
    number: ''
  }

  static propTypes = {
    cardNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired
  };

  componentWillMount() {
    const {cardNumber} = this.props;
    this.setState({
      number: this.format(cardNumber)
    });
  }

  componentWillReceiveProps(nextProps, nextState) {

    this.setState({
      number: this.format(nextProps.cardNumber)
    });
  }

  format = (str) => {
    return (str
      ? String(str).replace(/(\d{0,4})/g, '$1 ').trim()
      : '');

  }

  normalize = (str) => {
    return (str
      ? String(str).replace(/[^\d]/g, '')
      : '');
  }

  handleInputChange = e => {
    const {onChange} = this.props;

    onChange(this.normalize(e.target.value));
  };

  render() {
    const {number} = this.state;
    return <input
      type="text"
      value={number}
      onChange={this.handleInputChange}
      maxlength={19}/>;
  }
}

export default CardNumberInput;
