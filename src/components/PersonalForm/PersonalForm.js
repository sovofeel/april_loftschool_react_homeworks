import React, { Component } from 'react';
import Title from 'components/Title';

import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const {
      target: { name, value },
    } = event;

    onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div data-test="personal-form">
        <Title text="Персональная информация" />
        <div className="personal-form">
          <input
            name="firstName"
            value={firstName}
            placeholder="First name"
            onChange={this.handleChangeForm}
          />
          <input
            name="lastName"
            value={lastName}
            placeholder="Last name"
            onChange={this.handleChangeForm}
          />
          <input name="email" value={email} placeholder="email" onChange={this.handleChangeForm} />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
