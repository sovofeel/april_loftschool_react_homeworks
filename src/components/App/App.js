import React, { Component } from 'react';
import './App.css';
import Switcher from '../Switcher';
import VideoPlayer from '../VideoPlayer';
import ModalButton from '../ModalButton';
import CardNumberHolder from '../CardNumberHolder';

class App extends Component {
  render() {
    return (
      <Switcher>
        <VideoPlayer />
        <ModalButton />
        <CardNumberHolder />
      </Switcher>
    );
  }
}

export default App;
