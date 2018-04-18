import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Public from 'components/Public'
import Login from 'components/Login'
import Private from 'components/Private'
import PrivateRoute from 'components/PrivateRoute'

export class App extends PureComponent {
  render() {
    // console.log(this.props)

    return (
      <AuthorizeProvider>
        <nav>
          <ul>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/private'>Секретная страница</Link></li>
            <li><Link to='/login'>Войти</Link></li>
          </ul>
          <Switch>
            <Route path='/' exact component={Public} />
            <PrivateRoute path='/private' component={Private} />
            <Route path='/login' component={Login} />
          </Switch>
        </nav>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
