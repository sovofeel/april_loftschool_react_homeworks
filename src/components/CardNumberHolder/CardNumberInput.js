import React, {Component} from 'react';

class CardNumberInput extends Component {

  constructor(props){
    super(props)

    this.state = {
      number: ''
    }
  }


  

  format = (number) => {
    return Array.from(number).map((item, idx) => {
      return idx % 4 || 0 === idx ? item : " " + item
    }).join("")
  }

  normalize = (number) => {
    return number.replace(/\s/g, "")
    
  }

  componentWillReceiveProps(e){
    const { cardNumber } = e
    const { normalize } = this

    console.log(normalize(cardNumber))

    this.setState({
      number: this.format(cardNumber)
    })
  }


  render() {
    const { props:{ onChange }, state:{ number }, format } = this

    return <input 
      type="text" 
      onChange={onChange} 
      value={this.state.number}
    />
  }
}

export default CardNumberInput;
