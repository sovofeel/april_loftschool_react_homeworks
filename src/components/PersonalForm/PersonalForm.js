import React, { Component } from 'react';
import Title from 'components/Title';
import './PersonalForm.css';

class PersonalForm extends Component {
  static defaultProps = {
    onChangeForm: f => f,
  };

  handleChangeForm = ev => {
    const { onChangeForm } = this.props;
    const { name, value } = ev.target;

    onChangeForm(name, value);
  };

  render() {
    return (
      <div className="personal-form" data-test="personal-form">
        <Title /> Personal Information
        {['email', 'lastName', 'firstName'].map(key => (
          <input key={key} name={key} onChange={this.handleChangeForm} />
        ))}
      </div>
    );
  }
}

export default PersonalForm;
