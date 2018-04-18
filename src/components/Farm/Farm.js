import React, { Component } from 'react';
import './Farm.css';
import Order from '../Order/';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from '../../actions/farmActions';

class Farm extends Component {
  
  handleClick = () => {
    const { orders, moveOrderToCustomer } = this.props;
    const lastOrder = orders[orders.length - 1] || null;

    moveOrderToCustomer(lastOrder);
  }

  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button 
          onClick={this.handleClick}
          disabled={!orders.length}
        >
          Отправить урожай клиенту
        </button>
        {
          orders.map(order => <Order {...order } key={order.id}/>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.farm.orders
});

const mapDispatchToProps = { moveOrderToCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
