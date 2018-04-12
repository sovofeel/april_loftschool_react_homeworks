import React from 'react'
import Message from '../Message'
import './Chat.css'

class Chat extends React.Component{

	constructor(props){
		super(props)

		this.keyCount = 0;

		this.changeInputMessage = this.changeInputMessage.bind(this)
		this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this)
		this.getKey = this.getKey.bind(this);

		this.state = {
			messageInput: '',
			messages: []
		}
	}

	changeInputMessage(e){
		this.setState({messageInput: e.target.value})
	}

	getKey(){
    return this.keyCount++;
	}

	

	sendMessageOnEnter(e){
		if (e.key === 'Enter') {
			this.setState((prevState) => {
				return {
					messages: [...this.state.messages, {text: this.state.messageInput}],
					messageInput: ''
				}
			})
		}
		
		
	}

	render(){

		const { messageInput,messages } = this.state

		return <div className='chat'>
			
			<div className="message-list">
				<div className="messages">
					{messages.map(item => 
						<Message key={this.getKey()} text={item.text}/>
					)}
				</div>
			</div>
			<input 
				type="text" 
				className="input-message" 
				value={messageInput} 
				onChange={this.changeInputMessage}
				onKeyPress={this.sendMessageOnEnter}
			/>
		</div>
	}
}

export default Chat