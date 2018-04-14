import React, { Component, Fragment } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginError from './LoginError';
import LoginForm from './LoginForm';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isValidAuthCreds: true,
  };

  static defaultProps = {
    isAuthorized: false,
    authorizeUser: f => f,
  };

  static propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    authorizeUser: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { authorizeUser } = this.props;

    this.setState(({ isValidAuthCreds }) => ({
      isValidAuthCreds: authorizeUser(email, password),
    }));
  };

  render() {
    const { isAuthorized } = this.props;
    const { isValidAuthCreds, email, password } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <Fragment>
        <LoginForm
          onChange={this.handleChange}
          onClick={this.handleClick}
          {...{ email, password }}
        />
        {isValidAuthCreds || <LoginError />}
      </Fragment>
    );
  }
}

export default AuthHOC(Login);
