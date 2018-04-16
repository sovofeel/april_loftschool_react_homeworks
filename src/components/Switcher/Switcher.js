import React, { Component } from 'react';

import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName
// item.type.displayName - название своё с ключевым словом static
// item.type.name - название класса

class Switcher extends Component {
  state = {
    selectedChild: 0
  }

  handleChangeChild = (e) => {
    const page = Number(e.target.dataset.id);
    this.setState({ selectedChild: page });
  }

  render () {
    const { children } = this.props;
    const { selectedChild } = this.state;

    const links = React.Children.map(children, (item, index) => (
      <li
        className="component-list__name"
        data-id={index}
        onClick={this.handleChangeChild}
      >
        {item.type.displayName || item.type.name}
      </li>
    ));
    const body = React.Children.toArray(children)[selectedChild];

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {links}
          </ul>
        </nav>
        <hr/>
        <div className="component-wrapper">
          {body}
        </div>
      </div>
    );
  }
}

export default Switcher;
