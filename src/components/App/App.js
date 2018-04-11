import React from 'react';

import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm/CardForm';
import Step from '../Step/Step';


import './App.css';

class App extends React.PureComponent {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  }

  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  }

  handleTabClick = (step) => {
    this.setState({ step });
  }

  handleChangeForm = (name, value) => {
    this.setState({ [name]: value });
  }

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (step === 1
      && (firstName !== '' && lastName !== '' && email !== '' && email.includes('@'))) {
      return true;
    } else if (step === 2
      && (cardNumber.length === 16)) {
      return true;
    }
    return false;
  }

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm} />
      );
    } else if (step === 2) {
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm} />
      );
    } else if (step === 3) {
      return (
        <p data-test="congratulations">Поздравляем!</p>
      );
    }
  }

  render () {
    const { step } = this.state;

    return(
      <div className="container">
        <div className="tab-panel">
          <Step number={1} isClickable={step > 1} isSelected={step === 1} onClick={this.handleTabClick}>
            Personal information
          </Step>
          <Step number={2} isClickable={step > 2} isSelected={step === 2} onClick={this.handleTabClick}>
            Card information
          </Step>
          <Step number={3} isSelected={step === 3} onClick={this.handleTabClick}>
            Finish
          </Step>
        </div>
        <div className="form-content">
          {this.renderForm()}
        </div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
