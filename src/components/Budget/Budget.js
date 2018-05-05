import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

export const Budget = ({ profit, marketExpanse, deliveryExpanse, farmExpanse }) => (
  <div className="budget">
    <h2>Бюджет</h2>
    <p>
      Всего получено денег: <span className="t-profit">{profit}</span>
    </p>
    <p>
      Расходы продавцов: <span className="t-sellers"> {marketExpanse}</span>
    </p>
    <p>
      Расходы на ферме: <span className="t-farm"> {farmExpanse}</span>
    </p>
    <p>
      Расходы на доставку: <span className="t-delivery"> {deliveryExpanse}</span>
    </p>
    <p>
      Итого:{' '}
      <span className="t-total">{profit + marketExpanse + deliveryExpanse + farmExpanse}</span>
    </p>
  </div>
);

const mapStateToProps = state => ({
  profit: state.budget.profit,
  marketExpanse: state.budget.marketExpanse,
  farmExpanse: state.budget.farmExpanse,
  deliveryExpanse: state.budget.deliveryExpanse,
});

export default connect(mapStateToProps)(Budget);
