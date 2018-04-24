import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect, Route } from 'react-router-dom';
import Private from '../Private';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? <Route to="/private" component={Private} /> : <Redirect to="/login" />;
  }
}

export default AuthHOC(PrivateRoute);
