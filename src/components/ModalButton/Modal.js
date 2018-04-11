import React, { Component } from 'react';
import { createPortal } from 'react-dom'

class Modal extends Component {

  

  render() {
    const { props:{ children } } = this

    return (
      createPortal(
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            {children}
          </div>
        </div>
      </div>
      ,document.getElementById('portal'))
    )
  }
}

export default Modal;
