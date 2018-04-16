import React, {Component} from 'react';
import "./PersonalForm.css";
import Title from "../Title";

class PersonalForm extends Component {

  handleChangeForm = (e) => {
    this.props.onChangeForm(e.target.name, e.target.value);
  };

  render() {
    const {firstName, lastName, email} = this.props;

    return (
      <div>
        <Title text="Персональная информация"/>
        <div className="personal-form" data-test="personal-form">
          <input type="text" onChange={this.handleChangeForm} name="firstName" value={firstName} placeholder="First name" required/>
          <input type="text" onChange={this.handleChangeForm} name="lastName" value={lastName} placeholder="Last name" required/>
          <input type="email" onChange={this.handleChangeForm} name="email" value={email} placeholder="email" required/>
        </div>
      </div>
    );
  }
}

export default PersonalForm;
