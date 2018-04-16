import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, pathName, component } = this.props;

    return isAuthorized ? (
      <Route path={pathName} exact component={component} />
    ) : (
      <Redirect from={pathName} to="/login" />
    );
  }
}

export default AuthHOC(PrivateRoute);
