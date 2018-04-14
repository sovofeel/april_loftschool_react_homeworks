import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthHOC } from 'components/AuthorizeProvider';

class PrivateRoute extends PureComponent {
  render () {
    const { isAuthorized, component: Component } = this.props;

    // component name need be UpperCase!
    return !isAuthorized
      ? <Redirect to="/login" />
      : <Component/>;
  }
}

export default AuthHOC(PrivateRoute);
