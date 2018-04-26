import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import './Market.css';
import Order from '../Order';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

export class Market extends Component {
  handleCreateOrder = () => {
    const { createOrder } = this.props;
    const order = getNewOrder();

    createOrder(order);
  };

  handleMoveOrderToFarm = () => {
    const { moveOrderToFarm, orders } = this.props;

    const order = orders[orders.length - 1];

    moveOrderToFarm(order);

    console.log(orders);
  };

  render() {
    const { orders } = this.props;

    console.log(this.props);

    return (
      <div className="market">
        <h2>Магазин</h2>
        <button onClick={this.handleCreateOrder} className="new-orders__create-button">
          Отправить заказ на ферму
        </button>
        <button onClick={this.handleMoveOrderToFarm}>Отправить заказ на ферму</button>
        <div className="order-list">{orders.map(order => <Order key={order.id} {...order} />)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.market,
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
