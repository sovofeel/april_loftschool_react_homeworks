import React, { Component } from 'react';
import Step from 'components/Step';
import PersonalForm from 'components/PersonalForm';
import CardForm from 'components/CardForm';

import './App.css';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
  };

  steps = [
    {
      number: 1,
      title: 'Personal information',
    },
    {
      number: 2,
      title: 'Card information',
    },
    {
      number: 3,
      title: 'Finish',
    },
  ];

  handleClickNextForm = () => {
    const { step } = this.state;

    if (step < 3) {
      this.setState(() => ({
        step: step + 1,
      }));
    }
  };

  handleTabClick = step => {
    if (step) {
      this.setState(() => ({ step }));
    }
  };

  handleChangeForm = (name, value) => {
    this.setState(() => ({ [name]: value }));
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (step === 1) {
      if (firstName !== '' && lastName !== '' && email !== '' && email.includes('@')) {
        return true;
      }
    }

    if (step === 2) {
      if (cardNumber.length === 16) {
        return true;
      }
    }

    return false;
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (step === 1) {
      return (
        <PersonalForm
          email={email}
          lastName={lastName}
          firstName={firstName}
          onChangeForm={this.handleChangeForm}
        />
      );
    }

    if (step === 2) {
      return <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm} />;
    }

    if (step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }

    return null;
  };

  renderTab = () => {
    return this.steps.map(step => {
      const { step: currentStep } = this.state;
      const { number, title } = step;

      let props = {
        number,
        isSelected: currentStep === number,
        isClickable: currentStep !== number && currentStep > number,
        onClick: this.handleTabClick,
      };

      return (
        <Step {...props} key={title} title={title}>
          {title}
        </Step>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="tab-panel">{this.renderTab()}</div>
          <div className="form-content">{this.renderForm()}</div>

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
      </div>
    );
  }
}

export default App;
