import React from 'react';

import Title from '../Title/Title';

import './CardForm.css';

class CardForm extends React.PureComponent {
  static defaultProps = {
    cardNumber: undefined,
    onChangeForm: (name, value) => {
      console.error('Not implemented');
    }
  }

  // constructor (props) {
  //   super(props);
  //   console.log('constructor for tests');
  // }

  componentWillUnmount () {
    // console.log('componentWillUnmount for tests');
  }

  handleChangeForm = (event) => {
    const { name, value } = event.target;

    this.props.onChangeForm(name, value);
  }

  render () {
    return (
      <div data-test="card-form">
        <Title>Номер карты</Title>
        <div className="card-form">
          <input name="cardNumber"
            onChange={this.handleChangeForm}
            value={this.props.cardNumber}
            placeholder="0000000000000000"/>
        </div>
      </div>
    );
  }
}

export default CardForm;
