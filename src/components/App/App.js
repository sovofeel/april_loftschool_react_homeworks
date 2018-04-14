import React, { PureComponent } from 'react';
import { Switch, withRouter, Route, Link } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import PrivateRouter from '../PrivateRoute'

import Public from '../Public'
import Private from '../Private'
import Login from '../Login'

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li><Link to={`/login`} >Войти</Link></li>
              <li><Link to={`/private`} >Секретная страница</Link></li>
              <li><Link to={`/`} >Главная</Link></li>
            </ul>
          </nav>
          
          <Switch>
            <Route exact path='/' component={Public}/>
            <Route path='/login' component={Login} />
            <PrivateRouter exact path='/private' component={Private}/>
            <Route component={Public}/>
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
