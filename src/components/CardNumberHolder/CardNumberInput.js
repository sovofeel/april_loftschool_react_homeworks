import React, {Component} from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  }

  format = (number) => {
    if (number == null) {
      return '';
    }
    let numberToStr = String(number);
    
    let newNum = Array.prototype.map.call(numberToStr, (symbol, ndx) => {
      if (ndx % 4 || 0 === ndx) {
        return symbol;
      } else {
        return ' ' + symbol;
      }
    });
    
    return newNum.join('');
  }

  normalize = (number) => {
    return number.replace(/\s/g, '').trim();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      number: this.format(nextProps.cardNumber)
    })
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    onChange(this.normalize(e.target.value));
  };

  componentDidMount() {
    const { cardNumber } = this.props;

    this.setState({
      number: this.format(cardNumber)
    })
  }
  
  render() {
    const { number } = this.state;
    return <input type="text" onChange={this.handleChange} value={number}/>
  }
}

export default CardNumberInput;
