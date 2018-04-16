import React, {Component} from 'react';
import "./Step.css";

class Step extends Component {

  render() {
    const {number: stepNumber, isClickable, isSelected} = this.props;
    const classes = ["step"];

    if (isSelected) {
      classes.push("step-selected");
    }
    if (isClickable) {
      classes.push("step-clickable");
    }

    return (
      <div className={classes.join(" ")} onClick={this.handleClick}>
        <div className="step__number">{stepNumber}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }

  handleClick = () => {
    if (this.props.isClickable) {
      this.props.onClick(this.props.number);
    }
  };
}

export default Step;
