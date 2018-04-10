import React, {Component} from 'react';
import './CardForm.css'

class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = (ev) => {
    const {name, value} = ev.target;
    this
      .props
      .onChangeForm(name, value)
  }

  render() {
    const {cardNumber} = this.props;
    return <div className="card-form">
      <h1 className="title">Номер карты</h1>
      <input
        name="cardNumber"
        value={cardNumber}
        onChange={this.handleChangeForm}
        placeholder='000000000000000'/>
    </div>;
  }
}

export default CardForm;