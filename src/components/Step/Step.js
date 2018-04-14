import React, { Component } from 'react';

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
        className={`step ${isSelected ? 'step-selected' : ''} ${
          isClickable ? 'step-clickable' : ''
        }`}
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
