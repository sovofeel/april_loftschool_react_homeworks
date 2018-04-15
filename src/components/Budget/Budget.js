import React from 'react';
import './Budget.css';

export const Budget = props => {
  const {
    state: {
      profit,
      marketExpanse,
      farmExpanse,
      deliveryExpanse
    },
  } = props;

  const renderTotal = () =>  {
    return profit - marketExpanse - farmExpanse - deliveryExpanse
  }

  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>
        Всего получено денег: <span className="t-profit">{profit}</span>
      </p>
      <p>
        Расходы продавцов: <span className="t-sellers">{-marketExpanse}</span>
      </p>
      <p>
        Расходы на ферме: <span className="t-farm">{-farmExpanse}</span>
      </p>
      <p>
        Расходы на доставку: <span className="t-delivery">{-deliveryExpanse}</span>
      </p>
      <p>
        Итого: <span className="t-total">{renderTotal()}</span>
      </p>
    </div>
  );
};

export default Budget;
