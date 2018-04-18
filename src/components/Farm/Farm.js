import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../Order';
import { moveOrderToCustomer } from '../../actions/farmActions';

import './Farm.css';

export class Farm extends Component {

  onMoveOrderToCustomer = () => {
    const { orders, moveOrderToCustomer } = this.props;
    const order = orders.slice(-1)[0];

    moveOrderToCustomer(order);
  }

  render () {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={!orders.length}
          onClick={this.onMoveOrderToCustomer}
        >
          Отправить урожай клиенту
        </button>
        <div className="order-list">
          {orders.map(order =>
            <Order
              key={order.id}
              name={order.name}
              price={order.price}
              createdAt={order.createdAt}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.farm.orders
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm);
