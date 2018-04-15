import React, { Component } from 'react';
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
  addOrder = () => {
    this.props.createOrder(getNewOrder());
  };

  renderOrderList = () => this.props.marketList.map(({id, name, price, createdAt}) => <Order 
    key={id} 
    name={name} 
    price={price}
    createdAt={createdAt}
  />);

  //ordersToFarm = () => 

  render() {
    const { addOrder, renderOrderList, props: {marketList} } = this;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button" onClick={addOrder}>
          Создать заказ
        </button>
        <button disabled={!marketList.length}>Отправить заказ на ферму</button>
        <div className="order-list">{renderOrderList()}</div>
      </div>
    );
  }
}

export default Market;
