import React, { Component } from 'react';
import Modal from './Modal'
import './ModalButton.css';


class ModalButton extends Component {

  state = {
    isModalShow: false
  }


  hideModal = () => {
    this.setState(state => {return {
      ...this.state,
      isModalShow: false
    }})
  }

  showModal = () => {
    this.setState(state => {return {
      ...this.state,
      isModalShow: true
    }})
  }


  render() {

    const { showModal  } = this 

    return(
      <div>
        <button onClick={showModal}>Show modal!</button>
        {this.state.isModalShow ? 
            <Modal rootId='portal'>
              <h1>Модальное окно!</h1>
              <button onClick={ this.hideModal }>Close</button>
            </Modal>
            : 
            null
        }
      </div>
    )
  }
}

export default ModalButton;
