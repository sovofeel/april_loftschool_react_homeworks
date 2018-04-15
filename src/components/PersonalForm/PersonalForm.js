import React, {Component} from 'react';
import './PersonalForm.css'

class PersonalForm extends Component {

  handleChangeForm = (e) => {
    const {name, value} = e.target;

    this.props.onChangeForm(name, value)
  };

  render() {
    const {firstName, lastName, email} = this.props;

    return (
      <div>
        <div className='personal-form' data-test="personal-form">
          <h1 className="title">Персональная информация</h1>
          <input
            name='firstName'
            value={firstName}
            onChange={this.handleChangeForm}
            placeholder="Ваше имя"/>
          <input
            name='lastName'
            value={lastName}
            onChange={this.handleChangeForm}
            placeholder="Ваша фамилия"/>
          <input
            name='email'
            value={email}
            onChange={this.handleChangeForm}
            placeholder="Email"/>
        </div>
      </div>
    )
  }
}

export default PersonalForm;