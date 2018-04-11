import React, {Component} from 'react';
import './Chat.css'
import Message from "../Message/Message";

class Chat extends Component {

  state = {
    messageInput: "",
    messages: []
  };

  changeInputMessage = (e) => {
    this.setState({messageInput: e.target.value})
  };

  sendMessageOnEnter = (e) => {
    const {messageInput, messages} = this.state;

    if (e.key === "Enter") {
      this.setState({
        messageInput: "",
        messages: [...messages, {text: messageInput}]
      });
    }
  };

  render() {
    const {messages, messageInput} = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          {messages.map((el, idx) => <Message key={idx} text={el.text}/>)}
        </div>
        <input type="text" className="input-message"
               onChange={this.changeInputMessage}
               onKeyPress={this.sendMessageOnEnter}
               value={messageInput}/>
      </div>
    );
  }
}

export default Chat;
