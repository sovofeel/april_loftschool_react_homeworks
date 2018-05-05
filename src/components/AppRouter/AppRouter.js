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
          <Route path="/" exact component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </StyledApp>
    );
  }
}

export default AppRouter;
