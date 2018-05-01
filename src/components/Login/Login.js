import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isValid: true,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { authorizeUser } = this.props;

    !authorizeUser(email, password)
      ? this.setState({ isValid: false })
      : this.setState({ isValid: true });
  };

  render() {
    const { isAuthorized } = this.props;
    const { isValid } = this.state;

    if (isAuthorized) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <input name="email" onChange={this.handleChange} />
        <input name="password" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Войти</button>
        <ErrorMessage show={isValid === false}>Неверный пароль и/или почта.</ErrorMessage>
      </div>
    );
  }
}

export default AuthHOC(Login);
