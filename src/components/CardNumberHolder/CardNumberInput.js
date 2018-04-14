import React, {Component} from 'react';

class CardNumberInput extends Component {

  state = {
    number: undefined
  }

  componentWillReceiveProps (nextProps) {
    // this.props, nextProps
    this.setState({ number: this.format(nextProps.cardNumber) });
  }

  componentWillMount () {
    this.setState({ number: this.format(this.props.cardNumber) });
  }

  format (value) {
    let result = '';

    if (value) {
      result = String(value).replace(/(\d{4})/g, '$1 ').trim();
    }
    return result;
  }

  normalize (value) {
    let result = '';

    if (typeof value === 'string') {
      result = value.replace(/\s/g, '');
    }
    return result;
  }

  onChange = (event) => {
    const cardNumber = this.normalize(event.target.value);

    this.props.onChange(cardNumber);
  }

  render () {
    const { number } = this.state;

    return (
      <input type="text" value={number} onChange={this.onChange} />
    );
  }
}

export default CardNumberInput;
