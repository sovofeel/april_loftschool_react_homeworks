import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = (event) => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = (event) => {
    if (event.key === 'Enter') {
      this.setState(state => {
        const msg = { text: state.messageInput };
        const messages = [msg, ...state.messages];

        return {
          messages,
          messageInput: ''
        };
      });
    }
  };

  render () {
    const { messages } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((msg, index) => <Message key={index} text={msg.text}/>)}
          </div>
        </div>
        <input className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}/>
      </div>
    );
  };
}

export default Chat;
