import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { AuthHOC } from 'components/AuthorizeProvider';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component: Component } = this.props;

    return isAuthorized
      ? <Component {...this.props} /> 
      : <Redirect to="/login" />
  }
}

export default AuthHOC(PrivateRoute);
