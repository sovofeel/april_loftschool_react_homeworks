import React, {Component} from 'react';
import PersonalForm from "../PersonalForm";
import CardForm from "../CardForm";
import "./App.css";
import Step from "../Step";

class App extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
  };

  render() {
    return (
      <div className="container">
        <div className="tab-panel">{this.renderSteps()}</div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button className="button-next" onClick={this.handleClickNextForm} disabled={!this.isFormCommitable()}>Next</button>
        </div>
      </div>
    );
  }

  renderSteps = () => {
    const {step} = this.state;
    return [
      <Step number={1} isClickable={step > 1} isSelected={step === 1} onClick={this.handleTabClick}>Personal information</Step>,
      <Step number={2} isClickable={step > 2} isSelected={step === 2} onClick={this.handleTabClick}>Card information</Step>,
      <Step number={3} isClickable={false} isSelected={step === 3} onClick={this.handleTabClick}>Finish</Step>
    ];
  };

  renderForm = () => {
    const {step, firstName, lastName, email, cardNumber} = this.state;

    if (step === 1) {
      return <PersonalForm firstName={firstName} lastName={lastName} email={email} onChangeForm={this.handleChangeForm}/>;

    } else if (step === 2) {
      return <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm}
                       onChangeTimeOver={this.handleChangeTimeOver}/>;
    } else if (step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }
  };

  handleChangeForm = (key, val) => {
    this.setState({[key]: val});
  };

  handleChangeTimeOver = () => {
    //  TODO: TBD
  };

  handleClickNextForm = () => {
    this.setState((prevState, props) => ({
      step: prevState.step + 1
    }));
  };

  handleTabClick = (step) => {
    this.setState({step: step});
  };

  isFormCommitable = () => {
    const {step, firstName, lastName, email, cardNumber} = this.state;

    if (step === 1) {
      if (firstName !== '' && lastName !== '' && email !== '' && email.includes('@')) {
        return true;
      }

    } else if (step === 2) {
      if (cardNumber.length === 16) {
        return true;
      }
    }

    return false;
  };
}

export default App;
