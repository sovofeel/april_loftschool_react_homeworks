import React, { Component } from 'react';
import classNames from 'classnames';

import './Step.css';

class Step extends Component {
  static defaultProps = {
    isSelected: false,
    isClickable: false,
    number: 0,
    onClick: f => f,
  };

  handleClick = event => {
    const { onClick, isClickable, number } = this.props;

    if (isClickable) {
      onClick(number);
    }
  };

  render() {
    const { number, isSelected, isClickable } = this.props;

    return (
      <div
        className={classNames({
          step: true,
          'step-selected': isSelected,
          'step-clickable': isClickable,
        })}
        onClick={this.handleClick}
        number={number}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Step;
