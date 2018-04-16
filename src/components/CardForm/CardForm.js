import React, {Component} from 'react';
import './CardForm.css'

import Title from 'components/Title';

class CardForm extends Component {

  componentWillUnmount() {}

  handleChangeForm = (e) => {
    const {name, value} = e.target;
    this.props.onChangeForm(name, value)
  }

  render() {
    const {cardNumber} = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <Title> Номер карты </Title>
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