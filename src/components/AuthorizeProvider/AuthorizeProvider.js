import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext({ isAuthorized: false });

const VALID_NAME = 'student';
const VALID_PASSWORD = '123';
class AuthorizeProvider extends Component {
  state = {
    isAuthorized: false,
  };

  authorizeUser = (name, password) => {
    const isValid = this.isValid(name, password);
    this.setState(() => ({ isAuthorized: isValid }));

    return isValid;
  };

  isValid(name, password) {
    return name === VALID_NAME && password === VALID_PASSWORD;
  }

  render() {
    const { children } = this.props;
    const { isAuthorized } = this.state;

    return (
      <Provider value={{ isAuthorized, authorizeUser: this.authorizeUser }}>{children}</Provider>
    );
  }
}

const AuthHOC = WrappedComponent =>
  class extends Component {
    static displayName = 'AuthHOCWrapper';
    render() {
      return (
        <Consumer>
          {({ isAuthorized, authorizeUser }) => (
            <WrappedComponent {...this.props} {...{ isAuthorized, authorizeUser }} />
          )}
        </Consumer>
      );
    }
  };

export { AuthorizeProvider, AuthHOC };
