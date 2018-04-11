import React, { Component, Fragment } from 'react';
import VideoPlayer from 'components/VideoPlayer';
import Switcher from 'components/Switcher';
import CardNumberHolder from 'components/CardNumberHolder'
import ModalButton from 'components/ModalButton'
import './App.css';

class App extends Component {
  render() {
    return <Fragment>
        <Switcher>
          <VideoPlayer />
          <CardNumberHolder />
          <ModalButton />
        </Switcher>
      </Fragment>;
  }
}

export default App;
