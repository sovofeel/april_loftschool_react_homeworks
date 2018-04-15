import React from 'react';

class ErrorMessage extends React.PureComponent {

  render () {
    const { show, children } = this.props;

    return show
      ? <p className="error">{children}</p>
      : null;
  }
}

export default ErrorMessage;
