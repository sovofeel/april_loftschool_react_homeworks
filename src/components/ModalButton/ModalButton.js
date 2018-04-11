import React, { Component } from 'react';
import Modal from './Modal'
import './ModalButton.css';
import ReactDOM from 'react-dom';




class ModalButton extends Component {

  constructor(props){
    super(props)

    this.state = {
      isModalShow: false
    }
  }


  hideModal = () => {
    this.setState({
      ...this.state,
      isModalShow: false
    })
  }

  showModal = () => {
    this.setState({
      ...this.state,
      isModalShow: true
    })
  }


  render() {

    const { state:{isModalShow}, showModal, hideModal  } = this 

    return(
      <div>
        <button onClick={showModal}>Show modal!</button>
        {isModalShow ? ReactDOM.createPortal(<Modal hideModal={hideModal}/>, document.getElementById('portal')) : null}
      </div>
    )
  }
}

export default ModalButton;
