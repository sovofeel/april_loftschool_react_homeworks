import React, { PureComponent } from 'react';
import Public from 'components/Public';
import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';
import Private from 'components/Private';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

export class App extends PureComponent {
  render() {
    const links = [
      { link: '/login', value: 'Войти' },
      { link: '/private', value: 'Секретная страница' },
      { link: '/', value: 'Главная' },
    ];

    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              {links.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link}>{item.value}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <Route path="/" component={Public} exact />
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
