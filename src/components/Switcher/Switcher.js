import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray а
// так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0,
  };

  handleChangeChild = ev => {
    console.log('ev.target', ev.target);
    this.setState({ selectedChild: ev.target.dataset.id });
  };

  render() {
    const { selectedChild } = this.state;
    const { children } = this.props;
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (child, idx) => (
              <li
                className="component-list__name"
                data-id={idx}
                key={idx}
                onClick={this.handleChangeChild}
              >
                {child.type.displayName || child.type.name}
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{React.Children.toArray(children)[selectedChild]}</div>
      </div>
    );
  }
}

export default Switcher;
