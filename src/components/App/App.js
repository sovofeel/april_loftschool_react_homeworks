import React, { Component } from 'react';
import PersonalForm from 'components/PersonalForm';
import CardForm from 'components/CardForm';
import Step from 'components/Step';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.stepDescribe = [
      { number: 1, text: 'Personal infomation' },
      { number: 2, text: 'Card information' },
      { number: 3, text: 'Congrats' },
    ];
    this.keys = ['email', 'firstName', 'lastName'];
  }

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
  };

  handleClickNextForm = () => {
    this.setState(({ step }) => ({ step: step + 1 }));
  };

  handleTabClick = args => {
    this.setState(({ step }) => ({ step: args }));
  };

  handleChangeForm = (key, value) => {
    this.setState({ [key]: value });
  };

  isFormCommitable = () => {
    const { step, cardNumber } = this.state;

    switch (step) {
      case 1:
        return this.keys.every(key => {
          let value = this.state[key];
          return key === 'email' ? value.includes('@') : value !== '';
        });
      case 2:
        return cardNumber.length === 16;
      default:
        return false;
    }
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return (
          <PersonalForm
            onChangeForm={this.handleChangeForm}
            lastName={lastName}
            firstName={firstName}
            email={email}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        break;
    }
  };

  renderSteps = () => {
    const { step } = this.state;

    return this.stepDescribe.map(({ number, text }) => {
      let props = {
        number,
        isSelected: step === number,
        isClickable: step !== number,
        onClick: this.handleTabClick,
      };
      return (
        <Step {...props} key={number}>
          {text}
        </Step>
      );
    });
  };

  handleChangeTimeOver() {}

  render() {
    return (
      <div className="container">
        <div className="tab-panel">{this.renderSteps()}</div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >Next</button>
        </div>
      </div>
    );
  }
}

export default App;
