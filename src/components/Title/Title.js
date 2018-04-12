import React, { PureComponent } from 'react';
import './Title.css'

class Title extends PureComponent {
  render() {
    return (
      <div className="title">
        { this.props.children }
      </div>
    );
  }
}

export default Title;
