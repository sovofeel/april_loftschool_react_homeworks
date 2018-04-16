import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

import ErrorMessage from './ErrorMessage';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isValid: undefined
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { authorizeUser } = this.props;

    const isValid = authorizeUser(email, password);
    this.setState({ isValid });
  };

  render () {
    const { isValid } = this.state;
    const { isAuthorized } = this.props;

    const loginForm = (
      <div>
        <div>
          <input name="email" onChange={this.handleChange}/>
          <input name="password" onChange={this.handleChange}/>
          <ErrorMessage show={isValid === false}>
            Неверный пароль и/или почта.
          </ErrorMessage>
        </div>
        <button onClick={this.handleClick}>
          Submit
        </button>
      </div>
    );

    return isAuthorized
      ? <Redirect to="/" />
      : loginForm;
  }
}

export default AuthHOC(Login);
