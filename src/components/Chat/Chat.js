import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: '',
    };
  }

  changeInputMessage = e => {
    const { value } = e.target;
    this.setState({ messageInput: value });
  };

  sendMessageOnEnter = e => {
    const { messageInput, messages } = this.state;

    if (e.key !== 'Enter' || messageInput === '') return;
    this.setState({
      messages: [...messages, { text: messageInput }],
      messageInput: '',
    });
  };

  render() {
    const { messageInput, messages } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((item, index) => (
              <Message text={item.text} key={item.text} />
            ))}
          </div>
        </div>
        <input
          value={messageInput}
          onKeyPress={this.sendMessageOnEnter}
          onChange={this.changeInputMessage}
          className="input-message"
          name="messageInput"
          type="text"
        />
      </div>
    );
  }
}

export default Chat;
