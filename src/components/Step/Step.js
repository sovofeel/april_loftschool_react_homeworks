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

  handleClick = () => {
    const { onClick, isClickable, number } = this.props;

    if (isClickable) {
      onClick(number);
    }
  }

  render() {
    const { isSelected, isClickable, number } = this.props;

    return (
      <div>
        <div
          className={classNames('step', {
            'step-selected': isSelected,
            'step-clickable': isClickable,
          })}
        />
        <div className="step__number" onClick={this.handleClick}>
          {number}
        </div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Step;
