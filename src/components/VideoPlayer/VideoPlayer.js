import React, {PureComponent} from 'react';
import videoSrc from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {

  Video = React.createRef();

  playVideo = () => {
    this
      .Video
      .current
      .play();
  };

  stopVideo = () => {
    this
      .Video
      .current
      .pause();
  };

  render() {
    console.log(this.Video);
    return (
      <div className="video-player">
        <video className="video-player__source" ref={this.Video}>
          <source src={videoSrc} type="video/mp4"/>
        </video>

        <div className="buttons">
          <button onClick={this.playVideo}>Play</button>
          <button onClick={this.stopVideo}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;