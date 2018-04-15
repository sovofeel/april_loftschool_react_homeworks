import React, { Component } from 'react';
import Title from 'components/Title';

import './CardForm.css';

class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;

    onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <Title text="Номер карты" />
        <input
          name="cardNumber"
          value={cardNumber}
          placeholder="0000000000000000"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
