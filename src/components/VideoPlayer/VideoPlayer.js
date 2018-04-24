import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  static displayName = 'VideoPlayer';
  videoRef = React.createRef();

  handlePlay = () => {
    this.videoRef.current.play();
  };

  handleStop = () => {
    this.videoRef.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video className="video-player__source " src={videoFile} ref={this.videoRef}>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.handlePlay}>Play</button>
          <button onClick={this.handleStop}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
