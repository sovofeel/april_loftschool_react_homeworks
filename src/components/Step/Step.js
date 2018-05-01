import React, { PureComponent } from 'react';
import classNames from 'classnames';

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

    return (
      <div
        className={classNames({
          step: true,
          'step-selected': isSelected,
          'step-clickable': isClickable,
        })}
        onClick={this.handleClick}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
