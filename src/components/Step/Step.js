import React, { PureComponent } from 'react';
import './Step.css';

class Step extends PureComponent {
  handleClick = event => {
    const { isClickable, number, onClick } = this.props;

    if (isClickable) {
      onClick(number);
    }
  };

  render() {
    const { isSelected, isClickable, number, children } = this.props;

    let stepClassName = `step ${isSelected ? 'step-selected' : ''} ${
      isClickable ? 'step-step-clickable' : ''
    }`;
    return (
      <div className={stepClassName} onClick={this.handleClick}>
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
