import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthHOC } from 'components/AuthorizeProvider';

class PrivateRoute extends PureComponent {
  render () {
    const { isAuthorized, path, component: Component } = this.props;

    // component name need be UpperCase!
    return !isAuthorized
      ? <Redirect to="/login" />
      : <Route to={path} component={Component} />; // : <Component/>;
  }
}

export default AuthHOC(PrivateRoute);
