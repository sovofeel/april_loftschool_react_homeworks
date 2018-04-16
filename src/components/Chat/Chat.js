import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  }

  changeInputMessage = (event) => {
    const ev = event.target.value;
    this.setState(({ messageInput }) => ({ messageInput: ev }));
  };

  sendMessageOnEnter = (event) => {
    const { messages, messageInput } = this.state;
    if (event.key === 'Enter') {
      this.setState({ messages: messages.concat({ text: messageInput }) });
      this.setState(({ messageInput }) => ({ messageInput: '' }));
    }
  };

  render() {
    const { messageInput } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map(mes => <Message text={mes.text} />)}
          </div>
        </div>
        <input type="text"
          className="input-message"
          onChange={evt => this.changeInputMessage(evt)}
          onKeyPress={evt => this.sendMessageOnEnter(evt)}
          value={messageInput}
        />
      </div>
    );
  }
}
export default Chat;


// <div className="messages"><Message text={this.state.messages} /></div>
