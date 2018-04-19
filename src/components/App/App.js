import React, { Component } from 'react';
import './App.css';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      cardNumber: '',
      tabs: [
        { number: 1, text: 'Персональная Информация' },
        { number: 2, text: 'Номер Карты' },
        { number: 3, text: 'Поздравляем' },
      ],
    };
  }

  handleTabClick = tabIndex => {
    this.setState({ step: tabIndex });
  };

  handleChangeForm = (key, name) => {
    this.setState({ [key]: name });
  };

  handleClickNextForm = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  isFormCommitable = () => {
    let { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return firstName !== '' && lastName !== '' && email !== '' && email.includes('@');
      case 2:
        return cardNumber.length === 16;
      case 3:
        return false;
      default:
        return false;
    }
  };

  renderForm = () => {
    let { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
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
    }
  };

  render() {
    const { tabs, step } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {tabs.map(tab => (
            <Step
              key={tab.number}
              number={tab.number}
              onClick={this.handleTabClick}
              isClickable={step > tab.number}
              isSelected={step === tab.number}
            >
              {tab.text}
            </Step>
          ))}
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            onClick={this.handleClickNextForm}
            className="button-next"
            disabled={!this.isFormCommitable()}
          >
            Вперед
          </button>
        </div>
      </div>
    );
  }
}

export default App;
