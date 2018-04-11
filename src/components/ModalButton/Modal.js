import { Component } from 'react';
import ReactDOM from 'react-dom'

class Modal extends Component {
  render() {
    const rootModal = document.getElementById('portal');

    return ReactDOM.createPortal(this.props.children, rootModal)
  }
}

export default Modal;
