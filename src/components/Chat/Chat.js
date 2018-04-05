import React from 'react';
import Message from 'components/Message/Message'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	messages: [],
    	messageInput: ''
    }
  }

  changeInputMessage = (e) => {
  	this.setState({
        messageInput: e.target.value
    })
  }

  sendMessageOnEnter = (e) => {
  	if (e.key === 'Enter') {
  		this.setState({
  			messages: [...this.state.messages, {text: e.target.value}],
  			messageInput: ''
  		})
  	}
  }

  render = () => {
  	const messages = this.state.messages
    return (
      {messages.map((msg,idx) => <Message key={idx+text} text={msg.text}/>)}
      <div className="chat">
      	<input className={"input-message"} value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
      </div>
    );
  }
}

export default Chat;