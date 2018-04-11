import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props)

    this.VideoPlayer = React.createRef()
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handlePause() {
    this.VideoPlayer.current.pause()
  }

  handlePlay() {
    this.VideoPlayer.current.play();
  }

  render() {
    return <div className="video-player" controls>
        <video className="video-player__source" ref={this.VideoPlayer}>
          <source src={videoFile} type="video/mp4" />
          <p>Your browser doesn't support video tag</p>
        </video>
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Stop</button>
      </div>;
  }
}

export default VideoPlayer;
