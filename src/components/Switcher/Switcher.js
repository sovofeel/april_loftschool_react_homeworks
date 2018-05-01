import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0,
  };

  handleChangeChild = e => {
    e.persist();
    this.setState(prevState => ({ selectedChild: e.target.getAttribute('data-id') }));
  };

  render() {
    const childrens = React.Children.toArray(this.props.children);
    const { selectedChild } = this.state;

    return (
      <div className="switcher">
        <nav className="component-list">
          {React.Children.map(childrens, (child, index) => (
            <span className="component-list__name" onClick={this.handleChangeChild} data-id={index}>
              {child.type.displayName || child.type.name}
            </span>
          ))}
        </nav>
        <hr />
        <div className="component-wrapper">{childrens[selectedChild]}</div>
      </div>
    );
  }
}

export default Switcher;
