import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = () => {
    const { authorizeUser } = this.props;
    const { email, password } = this.state;

    if (authorizeUser(email, password)) {
      this.props.history.push('/');
      this.setState((prevState) => ({error: ""}));
      return;
    }
    this.setState((prevState) => ({error: "Please, enter valid data."}));
  };

  render() {
    const { isAuthorized } = this.props;
    const { error } = this.state;

    return isAuthorized ? <Redirect to="/" /> : [
      <div>
        <input type="text" name="email" placeholder="email" onChange={this.handleChange}/><br/>
        <input type="password" name="password" placeholder="password" onChange={this.handleChange}/><br/>
        <button onClick={this.onLogin}>Login</button>
        {error !== '' ? <p className="error">{error}</p> : null}
      </div>
    ];
  }
}

export default AuthHOC(Login);
