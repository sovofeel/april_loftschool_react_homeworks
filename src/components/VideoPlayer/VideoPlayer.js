import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {

  static displayName = "VideoPlayer";

  videoRef = React.createRef();

  onPlay = () => {
    this.videoRef.current.play();
  }

  onStop = () => {
    this.videoRef.current.pause();
  }

  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={this.videoRef}>
          <source src={videoFile} type='video/mp4'/>
        </video>
        <div>
          <button onClick={this.onPlay}>Play</button>
          <button onClick={this.onStop}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
