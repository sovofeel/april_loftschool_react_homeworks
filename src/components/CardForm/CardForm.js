import React, { Component } from 'react';
import Title from 'components/Title';
import './CardForm.css';

class CardForm extends Component {
  static defaulProps = {
    onChangeForm: f => f,
  };

  handleChangeForm = ev => {
    const { onChangeForm } = this.props;
    const { name, value } = ev.target;

    onChangeForm(name, value);
  };

  componentWillUnmount() {}

  render() {
    return (
      <div className="card-form" data-test="card-form">
        <Title /> Card Information
        <input name="cardNumber" onChange={this.handleChangeForm} />
      </div>
    );
  }
}

export default CardForm;
