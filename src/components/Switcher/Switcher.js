import React, { Component, Fragment } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {

  state = {
    selectedChild: 0
  }

  handleChangeChild = (e) => {
    e.persist();

    this.setState((prevState) => ({selectedChild: e.target.getAttribute('data-id')}));
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    const {selectedChild} = this.state;

    return (
      <Fragment>
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (child, idx) => (
              <li className="component-list__name" onClick={this.handleChangeChild} data-id={idx}>
                {child.type.displayName || child.type.name}
              </li>
            ))}
          </ul>
        </nav>
        <hr/>
        <div className="component-wrapper">{children[selectedChild]}</div>
      </Fragment>
    );
  }
}

export default Switcher;
