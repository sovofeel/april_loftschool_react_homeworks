import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal'

class ModalButton extends Component {

  static displayName = "ModalButton";

  state = {
    isModalShow: false
  }

  hideModal = () => {
    this.setState((prevState) => ({isModalShow: false}));
  }

  showModal = () => {
    this.setState((prevState) => ({isModalShow: true}));
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        {this.state.isModalShow ? [
          <Modal>
            <h2>Modal window</h2>
            <button onClick={this.hideModal}>Close</button>
          </Modal>
        ] : null}
      </div>
    );
  }
}

export default ModalButton;
