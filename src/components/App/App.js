import React, { PureComponent } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import { AuthorizeProvider } from 'components/AuthorizeProvider';
import StyledLink from '../StyledLink';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import Private from '../Private';
import Public from '../Public';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <nav>
          <StyledLink to="/login">Войти</StyledLink>
          <StyledLink to="/private">Секретная страница</StyledLink>
          <StyledLink to="/">Главная</StyledLink>
        </nav>
        <div>
          <Switch>
            <PrivateRoute path="/private" component={Private} />
            <Route path="/" exact component={Public} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
