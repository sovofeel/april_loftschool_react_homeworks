import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.video = React.createRef();
  }

  handleClick = (e) => {
    if (e.target.dataset.trig === 'play') {
      this.video.current.play();
    } else {
      this.video.current.pause();
    }
  }

  render() {
    return (
      <div className='video-player'>
        <video className='video-player__source' ref={this.video}>
          <source src={videoFile} type='video/mp4'/>
        </video>
        <div>
          <button onClick={this.handleClick} data-trig='play'>Play</button>
          <button onClick={this.handleClick} data-trig='pause'>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;