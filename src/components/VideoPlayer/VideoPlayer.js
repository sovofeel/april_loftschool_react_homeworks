import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.video = React.createRef();
  }

  handleClick = (e) => {
    if (e.target.value === 'Play') {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  render() {
    return (
      <div className='video-player'>
        <video className='video-player__source' ref={this.video}>
          <source src={videoFile} type='video/mp4'/>
        </video>
        <div>
          <button onClick={this.handleClick}>Play</button>
          <button onClick={this.handleClick}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;