import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    hasError: false,
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    const { authorizeUser } = this.props;
    const { email, password } = this.state;

    console.log('handleClick', authorizeUser(email, password));
    if (authorizeUser(email, password)) {
      return <Redirect to="/" />;
    } else {
      this.setState({ hasError: true });
    }
  };

  render() {
    const { isAuthorized } = this.props;
    const { email, password, hasError } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div onChange={this.handleChange}>
          <input type="text" name="email" placeholder="email" value={email} />
          <input type="text" name="password" placeholder="password" value={password} />
        </div>
        {hasError ? <p className="error">Неверный пароль и/или почта.</p> : null}
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default AuthHOC(Login);
