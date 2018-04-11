import React from 'react';

class Message extends React.Component {
  render() {
  	const text = this.props.text
    return (
      <span className="message">
      	{text}
      </span>
    );
  }
}

export default Message;