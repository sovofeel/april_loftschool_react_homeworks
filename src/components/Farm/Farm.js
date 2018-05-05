import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Farm.css';
import { moveOrderToCustomer } from '../../actions/farmActions';
import Order from '../Order';

export class Farm extends Component {
  handleMoveOrderToCustomer = () => {
    const { moveOrderToCustomer, orders } = this.props;
    const order = orders[orders.length - 1];

    moveOrderToCustomer(order);
  };

  render() {
    const { orders } = this.props;
    console.log(this.props);

    return (
      <div className="farm">
        <h2>Ферма</h2>
        <button onClick={this.handleMoveOrderToCustomer}>Отправить урожай клиенту</button>
        <div className="order-list">
          {orders.map(order => (
            <Order
              key={order.id}
              name={order.name}
              price={order.price}
              createdAt={order.createdAt}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.farm.orders,
});

const mapDispatchToProps = {
  moveOrderToCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
