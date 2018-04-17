import React, { Component} from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            {this.props.children}
          </div>
        </div>
      </div>,
      document.getElementById('portal')
    );
  }
}

export default Modal;
