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
      this.setState(state => ({step: currentStep}));
    }
  }

  handleChangeForm = (name, value) => {
    if (this.isFormCommitable) {
      this.setState({[name]: value});
    }
  }

  isFormCommitable = () => {
    const {step, firstName, lastName, email, cardNumber} = this.state;

    if (step === 1 && firstName !== '' && lastName !== '' && email !== '' && email.includes('@')) {
      return true;
    } else if (step === 2 && cardNumber.length === 16) {
      return true;
    }
    return false;

  }

  handleClickNextForm = (ev) => {
    const {step} = this.state;
    if (step < 3) {
      this.setState(state => ({
        step: step + 1
      }));
    }
  }

  stepTitle = (step) => {
    switch (step) {
      case 1:
        return 'Персональная информация';
        break;
      case 2:
        return 'Номер карты';
        break;
      case 3:
        return 'Результат';
      default:
        return ''
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
  render() {
    const {step} = this.state;
    return <div className='container'>
      <div className='tab-panel'>{[1, 2, 3].map(item =>< Step key = {
          item
        }
        number = {
          item
        }
        children = {
          this.stepTitle(item)
        }
        isSelected = {
          item === step
        }
        isClickable = {
          item < step
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