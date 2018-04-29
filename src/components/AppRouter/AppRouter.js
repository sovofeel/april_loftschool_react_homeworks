import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Search from '../Search';
import ShowPage from '../ShowPage';

const StyledApp = styled.div`
  text-align: center;
`;

class AppRouter extends Component {
  render() {
    return (
      <StyledApp className="App">
        <Switch>
          <Route to="/" exact component={Search} />
          <Route to="/shows/:id" exact component={ShowPage} />
        </Switch>
      </StyledApp>
    );
  }
}

export default AppRouter;
