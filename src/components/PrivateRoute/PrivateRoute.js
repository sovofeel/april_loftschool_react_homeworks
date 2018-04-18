import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component } = this.props;

    return isAuthorized ? (
      <Route to="/private" component={component} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AuthHOC(PrivateRoute);
