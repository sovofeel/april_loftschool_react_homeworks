import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoFile = React.createRef();
  }

  playVideo = () => {
    this.videoFile.current.play();
  };

  stopVideo = () => {
    this.videoFile.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <div className="video-player__source">
          <video
            ref={this.videoFile}
            src={videoFile}
            width={600}
            height={300}
          />
        </div>
        <div className="buttons">
          <button onClick={this.playVideo}>Play</button>
          <button onClick={this.stopVideo}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
