import React, { PureComponent } from 'react';

import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  constructor (props) {
    super(props);
    this.videoRef = React.createRef();
  }

  videoPlay = () => {
    this.videoRef.current.play();
  }

  videoPause = () => {
    this.videoRef.current.pause();
  }

  render () {
    return (
      <div className="video-player">
        <video className="video-player__source"
          width="600"
          height="300"
          ref={this.videoRef}
        >
          <source src={videoFile} type='video/mp4'/>
        </video>
        <div>
          <button onClick={this.videoPlay}>Play</button>
          <button onClick={this.videoPause}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
