import React, { Component } from 'react';
import Error from 'components/Error';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { authorizeUser } = this.props;

    if (!authorizeUser(email, password)) {
      this.setState({ error: true });
    }
  };

  renderForm = () => {
    const { email, password, error } = this.state;

    return (
      <div>
        <div>
          <input name="email" value={email} onChange={this.handleChange} />
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <Error error={error} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  };

  render() {
    const { isAuthorized } = this.props;

    return (isAuthorized && <Redirect to="/" />) || this.renderForm();
  }
}

export default AuthHOC(Login);
