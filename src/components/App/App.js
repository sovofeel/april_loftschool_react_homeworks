import React, { Component } from 'react';
import './App.css';
import Switcher from '../Switcher'
import VideoPlayer from '../VideoPlayer'
import CardNumberHolder from '../CardNumberHolder'





class App extends Component {


	handleClick(){

	}

  render() {
		return (
			<Switcher>
				{/* <VideoPlayer /> */}
				<CardNumberHolder/>
			</Switcher>
		)
  }
}

export default App;
