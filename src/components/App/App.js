import React, { Component } from 'react';
import './App.css';
import Switcher from '../Switcher'
import VideoPlayer from '../VideoPlayer'
import CardNumberHolder from '../CardNumberHolder'
import ModalButton from '../ModalButton'



class App extends Component {


	handleClick(){

	}

  render() {
		return (
			<Switcher>
				<VideoPlayer />
				<CardNumberHolder/>
				<ModalButton />
			</Switcher>
		)
  }
}

export default App;
