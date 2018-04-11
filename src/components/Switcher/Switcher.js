import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName



class Switcher extends Component {

  state = {
    selectedChild: 0
  }

  

  handleChangeChild = (e) => {
    
    this.setState({
      ...this.state,
      selectedChild : e.target.dataset.id
    })
  }

  render() {
    const { props:{ children }, state:{ selectedChild }, handleChangeChild } = this
    const childrenArr = React.Children.toArray(children)

    

    return(
      <div className="switcher">
        <ul className="component-list">
          {childrenArr.map( (child, idx) => {

            
            
            const {type:{ name, displayName } } = child
            return <li className="component-list__name"
                    key={(name || displayName) + idx} 
                    data-id={idx}
                    onClick={handleChangeChild}>
                    {displayName || name}
                  </li>
          })}
        </ul>
        <hr/>
        <div className="component-wrapper">
          {childrenArr[selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
