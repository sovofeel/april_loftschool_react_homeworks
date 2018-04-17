import React, { Component } from 'react';
import './Farm.css';
import { connect } from 'react-redux';
import {moveOrderToCustomer} from '../../actions/farmActions';
import Order from '../Order'

export class Farm extends Component {

  onDispatchOrders = () => {
    const {moveOrderToCustomer, orders} = this.props;

    const order = orders[orders.length - 1]
    moveOrderToCustomer(order);
  }

  render() {
    const {orders} = this.props;
    const isDispatchBtnDisabled = orders.length === 0;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={isDispatchBtnDisabled} onClick={this.onDispatchOrders}>Отправить урожай клиенту</button>
        <div className="order-list">
          {orders.map((order) => (
            <Order key={order.id} {...order}/>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.farm});

const mapDispatchToProps = {
  moveOrderToCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
