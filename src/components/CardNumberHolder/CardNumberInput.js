import React, {Component} from 'react';

class CardNumberInput extends Component {

  state = {
    number: this.props.cardNumber
  }
  

  format = (number) => {
    if(number === null) return ''
    return Array.from('' + number).map((item, idx) => {
      return (idx % 4 || 0 === idx)  ? item : ' ' + item
    }).join("")
  }

  normalize = (number) => {
    return number.replace(/\s/g, "")
  }

  componentWillReceiveProps(e){
    this.setState({
      number: this.format(e.cardNumber)
    })
  }

  componentDidMount() {
    const { cardNumber } = this.props
    this.setState({
      number: this.format(cardNumber)
    })
  }


  handleChange = (e) => {
    const { onChange } = this.props
    onChange(this.normalize(e.target.value))
  }

  render() {
    return <input 
      type="text"
      onChange={this.handleChange} 
      value={this.state.number}
    />
  }
}

export default CardNumberInput;
