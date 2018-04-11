import React, { Component } from 'react';

class Modal extends Component {

  

  render() {
    const { props:{ children } } = this

    return (
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
