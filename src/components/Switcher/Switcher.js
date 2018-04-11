import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  constructor(props) {
    super(props);

    this.renderNav = this.renderNav.bind(this);
    this.handleChangeChild = this.handleChangeChild.bind(this)
  }

  state = {
    selectedChild: 0,
  };

  handleChangeChild(ev) {
    let id = ev.target.dataset.id;

    this.setState({ selectedChild: id });
  }

  renderNav() {
    const { children } = this.props;

    return (
      <nav>
        <ul className="component-list">
          {React.Children.map(children, (child, index) => {
            const name = child.type.displayName || child.type.name;
            return (
              <li
                className="component-list__name"
                key={name}
                onClick={this.handleChangeChild}
                data-id={index}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  render() {
    const { selectedChild } = this.state
    const { children } = this.props

    return (
      <div className="switcher">
        {this.renderNav()}
        <div className="component-wrapper">
          { React.Children.toArray(children)[selectedChild] }
        </div>
        <hr />
      </div>
    );
  }
}

export default Switcher;
