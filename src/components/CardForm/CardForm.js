import React, { Component } from 'react';
import './CardForm.css';
import Title from '../Title';

class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = e => {
    const { onChangeForm } = this.props;
    const { name, value } = e.target;
    onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <Title>Введите номер карты</Title>
        <input name="cardNumber" value={cardNumber} onChange={this.handleChangeForm} />
      </div>
    );
  }
}

export default CardForm;
