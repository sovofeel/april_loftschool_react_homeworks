import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';

const Budget = ({profit, market, farm, delivery}) => (
    <div className="budget">
        <h2>Бюджет</h2>
        <p>
            Всего получено денег:
            <span className="t-profit">
                {profit}
            </span>
        </p>
        <p>
            Расходы продавцов:
            <span className="t-sellers">
                {-market || '0'}
            </span>
        </p>
        <p>
            Расходы на ферме:
            <span className="t-farm">
                {-farm || '0'}
            </span>
        </p>
        <p>
            Расходы на доставку:
            <span className="t-delivery">
                {-delivery || '0'}
            </span>
        </p>
        <p>
            Итого:
            <span className="t-total"> 
                {profit-market-farm-delivery} 
            </span>
        </p>
    </div>
);

const mapStateToProps = state => ({
    profit: state.budget.profit,
    market: state.budget.marketExpanse,
    farm: state.budget.farmExpanse,
    delivery: state.budget.deliveryExpanse
});

export default connect(mapStateToProps)(Budget);
