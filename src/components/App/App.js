import React, { Component } from 'react';

import ModalButton from '../ModalButton/ModalButton';
import CardNumberHolder from '../CardNumberHolder/CardNumberHolder';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Switcher from '../Switcher/Switcher';

import './App.css';

class App extends Component {
  render () {
    return (
      <Switcher>
        <VideoPlayer/>
        <CardNumberHolder/>
        <ModalButton/>
      </Switcher>
    );
  }
}

export default App;
