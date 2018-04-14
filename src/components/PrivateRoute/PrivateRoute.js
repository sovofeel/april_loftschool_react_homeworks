import React, { PureComponent } from 'react';
import Private from 'components/Private';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? (
      <Route to="/private" component={Private} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AuthHOC(PrivateRoute);
