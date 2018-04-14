import React, { Component } from 'react';

import Modal from './Modal';

import './ModalButton.css';

class ModalButton extends Component {
  static displayName = 'ModalButton';
  state = {
    isModalShow: false
  }

  hideModal = () => {
    this.setState({ isModalShow: false });
  }

  showModal = () => {
    console.log('showModal');
    this.setState({ isModalShow: true });
  }

  render () {
    const { isModalShow } = this.state;

    return (
      <React.Fragment>
        <button onClick={this.showModal}>Show modal!</button>
        <Modal show={isModalShow}>
          <h1>Модальное окно!</h1>
          <button onClick={this.hideModal}>Close</button>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalButton;
