import React, {Component} from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  }

  format = (number) => {
    if (number === null) {
      return '';
    }
    number = typeof number === 'number' ? number.toString() : number;

    let newNum = Array.prototype.map.call(number, (symbol, ndx) => {
      if (ndx % 4 || 0 === ndx) {
        return symbol
      } else {
        return " " + symbol
      }
    });
    
    return newNum.join('');
    //return str.replace(/(\d{0,4})/g, '$1 ').trim();
  }

  normalize = (number) => {
    return number.replace(/\s/g, '').trim();
  }

  // static gerDerivedFromProps(nextProps, prevState) {
  //   this.setState({
  //     number: this.format(nextProps.cardNumber)
  //   })
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({
      number: this.format(nextProps.cardNumber)
    })
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    onChange(this.normalize(e.target.value));
  };
  
  render() {
    const { number } = this.state;
    return <input type="text" onChange={this.handleChange} value={number}/>;
  }
}

export default CardNumberInput;
