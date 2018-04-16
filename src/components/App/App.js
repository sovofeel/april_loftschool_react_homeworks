import React, { PureComponent } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import PrivateRoute from '../PrivateRoute'
import Public from '../Public'
import Login from '../Login'

const Home = () => (<p>home...</p>)

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/public">Public</Link></li>
              <li><Link to="/private">Секретная страница</Link></li>
              <li><Link to="/login">Войти</Link></li>
            </ul>
          </nav>

          <hr />

          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/public" component={Public}/>
            <Route path="/private" component={PrivateRoute}/>
            <Route path="/login" component={Login}/>
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
