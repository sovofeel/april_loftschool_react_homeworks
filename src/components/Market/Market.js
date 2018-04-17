import React, { Component } from 'react';
import './Market.css';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import Order from '../Order'

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
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {

  onCreateOrder = () => {
    const {createOrder} = this.props;

    const newOrder = getNewOrder();
    createOrder(newOrder);
  }

  onMoveOrderToFarm = () => {
    const {orders, moveOrderToFarm} = this.props;

    const order = orders[orders.length - 1];
    moveOrderToFarm(order);
  }

  render() {
    const {orders} = this.props;
    const isMoveOrderToFarmDisabled = orders.length === 0

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button" onClick={this.onCreateOrder}>Создать заказ</button>
        <button disabled={isMoveOrderToFarmDisabled} onClick={this.onMoveOrderToFarm}>Отправить заказ на ферму</button>
        <div className="order-list">
          {orders.map((order, idx) => (
            <Order key={order.id} {...order} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.market});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);
