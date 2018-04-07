import React, {Component} from 'react';
import "./PersonalForm.css";
import Title from "../Title";

class PersonalForm extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  handleChangeForm = (e) => {
    this.props.onChangeForm(e.target.name, e.target.value);
  };

  render() {
    const {firstName, lastName, email} = this.props;

    return (
      <div>
        <Title text="Персональная информация"/>
        <div className="personal-form">
          <input type="text" onChange={this.handleChangeForm} name="firstName" value={firstName} placeholder="First name"/>
          <input type="text" onChange={this.handleChangeForm} name="lastName" value={lastName} placeholder="Last name"/>
          <input type="text" onChange={this.handleChangeForm} name="email" value={email} placeholder="email"/>
        </div>
      </div>
    );
  }
}

export default PersonalForm;
