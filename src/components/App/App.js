import React, {Component} from 'react';
import PersonalForm from './../PersonalForm';
import CardForm from './../CardForm'
import Step from './../Step'
import './App.css'

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  }

  handleTabClick = (currentStep) => {
    if (currentStep) {
      this.setState({step: currentStep});
    }
  }

  handleChangeForm = (name, value) => {
    if (this.isFormCommitable) {
      this.setState({[name]: value});
    }
  }

  isFormCommitable = () => {
    const {step, firstName, lastName, email, cardNumber} = this.state;

    return ((step === 1 && firstName !== '' && lastName !== '' && email !== '' && email.includes('@')) || (step === 2 && cardNumber.length === 16) || false);

  }

  handleClickNextForm = (ev) => {
    const {step} = this.state;
    if (step < 3) {
      this.setState(state => ({
        step: step + 1
      }));
    }
  }

  renderForm = () => {
    const {step, firstName, lastName, email, cardNumber} = this.state;
    if (step === 1) {
      return <PersonalForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        onChangeForm={this.handleChangeForm}/>
    } else if (step === 2) {
      return <CardForm
        cardNumber={cardNumber}
        onChangeForm={this.handleChangeForm}
        onChangeTimeOver={this.handleChangeTimeOver}/>
    }
    if (step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>
    }
    return null;
  }

  steps = ['Персональная информация', 'Номер карты', 'Результат']
  render() {
    const {step} = this.state;
    return <div className='container'>
      <div className='tab-panel'>{this
          .steps
          .map((item, idx) =>< Step key = {
            idx
          }
          number = {
            idx + 1
          }
          children = {
            item
          }
          isSelected = {
            idx + 1 === step
          }
          isClickable = {
            idx < step
          }
          onClick = {
            this.handleTabClick
          } />)}
      </div>
      <div className='form-content'>
        {this.renderForm()}
      </div >
      <div className='button-panel'>
        <button
          className='button-next'
          onClick={this.handleClickNextForm}
          disabled={!this.isFormCommitable()}>Next</button>
      </div>

    </div>;
  }

}

export default App;