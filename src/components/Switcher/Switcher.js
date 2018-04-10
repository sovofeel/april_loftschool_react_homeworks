import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {

  constructor(props){
    super(props)

    this.state = {
      selectedChild: 0
    }
  }



  render() {
    const { props:{ children }, state:{ selectedChild } } = this
    const childrenArr = React.Children.toArray(children)
    
    return(
      <div className="switcher">
        <ul className="component-list">
          {childrenArr.map( (child, idx) => {
            
            const {type:{ name, displayName } } = child
            return <li className="component-list__name"
                    key={(name || displayName) + idx} 
                    data-id={idx}>
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
