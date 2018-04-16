import React from 'react';
import classNames from 'classnames';

import './Step.css';

class Step extends React.PureComponent {
  static defaultProps = {
    number: 0,
    isSelected: false,
    isClickable: false,
    onClick: (number) => {
      console.error('Not implemented');
    }
  }

  handleClick = (event) => {
    const { isClickable, number, onClick } = this.props;

    if (isClickable) {
      onClick(number);
    }
  }

  render () {
    const { isSelected, isClickable, number, children } = this.props;
    const stepClass = classNames({
      'step': true,
      'step-selected': isSelected,
      'step-clickable': isClickable
    });

    return (
      <div
        className={stepClass}
        onClick={this.handleClick}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}

export default Step;
