import React, { PureComponent } from 'react';
import './PersonalForm.css';
import Title from '../Title';

class PersonalForm extends PureComponent {
  handleChangeForm = e => {
    const { name, value } = e.target;
    const { onChangeForm } = this.props;
    onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div className="personal-form" data-test="personal-form">
        <Title>Персональная Информация</Title>
        <input name="firstName" value={firstName} type="text" onChange={this.handleChangeForm} />
        <input name="lastName" value={lastName} type="text" onChange={this.handleChangeForm} />
        <input name="email" value={email} type="text" onChange={this.handleChangeForm} />
      </div>
    );
  }
}

export default PersonalForm;
