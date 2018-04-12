import React, {Component} from 'react';
import './Step.css'

class Step extends Component {
  handleClick = (ev) => {
    const {isClickable, onClick, number} = this.props;
    if (isClickable) {
      onClick(number);
    }
  }
  render() {
    const {isSelected, isClickable, number, children} = this.props;
    const stepClassName = 'step' + (isSelected
      ? ' step-selected'
      : '') + (isClickable
      ? ' step-clickable'
      : '');
    return <div className={stepClassName} onClick={this.handleClick}>
      <p className="step__number">{number}</p>
      <p className="step__title">{children}</p>
    </div>;
  }
}

export default Step;