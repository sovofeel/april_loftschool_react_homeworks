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
      selectedChild: +e.target.dataset.id
    })
  }

  childrenIterator = (child, ndx) => {
    const text = child.type.displayName ? child.type.displayName : child.type.name;

    return (
      <li 
        className='component-list__name'
        data-id={ndx}
        onClick={this.handleChangeChild}
      >
        {text}
      </li>
    )
  }

  render() {
    const { selectedChild } = this.state;
    const children = React.Children.toArray(this.props.children);
    const curChild = children[selectedChild];

    return (
      <div className='switcher'>
        <nav>
          <ul className='component-list'>
            {React.Children.map(this.props.children, this.childrenIterator)}
          </ul>
        </nav>
        <hr/>
        <div className='component-wrapper'>
          {curChild}
        </div>
      </div>
    )
  }
}

export default Switcher;
