import React from 'react';
import './Order.css';

function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

const Order = ({ name, price, createdAt }) => (
  <div className="order">
    <div className="order__upper">
      <p className="p--order">Название: {name}</p>
      <p className="p--order">
        Цена: <span className="order-price">{price}</span>
      </p>
    </div>
    <div className="order__lower">
      <p className="p--order">Создан: {formatDate(createdAt)}</p>
    </div>
  </div>
);

export default Order;
