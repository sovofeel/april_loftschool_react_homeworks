import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

  render () {
    const { children, show } = this.props;

    return show
      ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal__fog">
            <div className="modal__body">
              {children}
            </div>
          </div>
        </div>,
        document.getElementById('portal')
      )
      : null;
  }
}

export default Modal;
