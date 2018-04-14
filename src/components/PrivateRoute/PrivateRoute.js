import React, { PureComponent, Fragment } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  render() {
    const { path, component: Component, isAuthorized } = this.props;

    return (
      <Fragment>
        {isAuthorized ? (
          <Route path={path} render={() => <Component />} />
        ) : (
          <Redirect to="/login" />
        )}
      </Fragment>
    );
  }
}

export default AuthHOC(PrivateRoute);
