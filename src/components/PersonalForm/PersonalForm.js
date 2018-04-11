import React, {Component} from 'react';
import './PersonalForm.css'

class PersonalForm extends Component {

  handleChangeForm = (ev) => {
    const {name, value} = ev.target;
    this
      .props
      .onChangeForm(name, value)
  }

  render() {
    const {firstName, lastName, email} = this.props;
    return <div data-test="personal-form">
      <h1 className="title">Персональная информация</h1>
      <div className='personal-form'>
        <input
          name='firstName'
          value={firstName}
          onChange={this.handleChangeForm}
          placeholder="First name"/>
        <input
          name='lastName'
          value={lastName}
          onChange={this.handleChangeForm}
          placeholder="Last name"/>
        <input
          name='email'
          value={email}
          onChange={this.handleChangeForm}
          placeholder="Email"/>
      </div>
    </div>
  }
}

export default PersonalForm;