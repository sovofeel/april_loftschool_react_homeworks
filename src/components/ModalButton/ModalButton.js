import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal';

class ModalButton extends Component {
  static displayName = 'ModalButton';

  state = {
    isModalShow: false,
  };

  hideModal = () => {
    this.setState(() => ({ isModalShow: false }));
  };

  showModal = () => {
    this.setState(() => ({ isModalShow: true }));
  };

  render() {
    const { isModalShow } = this.state;
    return (
      <div>
        {isModalShow && (
          <Modal>
            <button onClick={this.hideModal}>Close modal!</button>
          </Modal>
        )}
        <button onClick={this.showModal}>Show modal!</button>
      </div>
    );
  }
}

export default ModalButton;
