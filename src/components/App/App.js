import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import { moveOrderToCustomer } from '../../actions/farmActions';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';

import './App.css';

export class App extends Component {
  render() {
    const { market, createOrder, moveOrderToFarm } = this.props;
    const { farm, moveOrderToCustomer } = this.props;
    const { budget } = this.props;

    return (
      <div className="app">
        <Market {...market}
          createOrder={createOrder}
          moveOrderToFarm={moveOrderToFarm}
        />
        <Farm {...farm}
          moveOrderToCustomer={moveOrderToCustomer}
        />
        <Budget {...budget} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  market: state.market,
  farm: state.farm,
  budget: state.budget
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm,
  moveOrderToCustomer
};

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
