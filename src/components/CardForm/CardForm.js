import React, {Component} from 'react';
import './CardForm.css'

class CardForm extends Component {

  handleChangeForm = (e) => {
    const {name, value} = e.target;
    this.props.onChangeForm(name, value)
  }

  render() {
    const {cardNumber} = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <h1 className="title">Номер карты</h1>
        <input
          name="cardNumber"
          value={cardNumber}
          onChange={this.handleChangeForm}
          placeholder='0000 0000 0000 0000'/>
      </div>
    )
  }
}

export default CardForm;