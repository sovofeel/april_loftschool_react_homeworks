import React, { Component } from 'react';
import './Farm.css';
import Order from '../Order'




export class Farm extends Component {


  
  handlerMoveOrder = () => {
    const { farmList, moveOrderToCustomer } = this.props
    moveOrderToCustomer(farmList[0])
  }

  render() {
    const { farmList } = this.props
    const { handlerMoveOrder} = this
    
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={!farmList.length} onClick={handlerMoveOrder}>Отправить урожай клиенту</button>
        <div>
          {farmList.map( ({ id, name, price, createdAt }) => 
            <Order 
              name={name} 
              key={id}
              price={price}
              createdAt={createdAt}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Farm;
