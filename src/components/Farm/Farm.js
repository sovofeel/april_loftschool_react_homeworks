import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Farm.css';
import { moveOrderToCustomer } from '../../actions/farmActions';
import Order from '../Order';

export class Farm extends Component {
  handleMoveOrderToCustomer = () => {
    const { moveOrderToCustomer, orders } = this.props;
    const order = orders[orders.length - 1];

    console.log(moveOrderToCustomer);
    console.log(order);

    moveOrderToCustomer(order);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Ферма</h2>
        <button onClick={this.handleMoveOrderToCustomer}>Отправить урожай клиенту</button>
        <div className="order-list">{orders.map(order => <Order key={order.id} {...order} />)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.farm,
});

const mapDispatchToProps = {
  moveOrderToCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
