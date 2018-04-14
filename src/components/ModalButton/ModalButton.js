import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import ModalBody from './ModalBody';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false,
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  render() {
    const { isModalShow } = this.state;

    return (
      <Fragment>
        <button onClick={this.showModal}>Show modal!</button>
        {isModalShow && (
          <Modal>
            <ModalBody onClick={this.hideModal} />
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default ModalButton;
