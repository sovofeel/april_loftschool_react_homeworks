import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import Private from '../Private'

class PrivateRoute extends PureComponent {
  render() {
    const {isAuthorized} = this.props;

    if (!isAuthorized) {
      this.props.history.push('/login');
    }

    return <Private/>;
  }
}

export default AuthHOC(PrivateRoute);
