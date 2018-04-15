import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    email: '',
    password: '',
    isCorrect: true
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { props: { authorizeUser }, state: { email, password} } =  this

    authorizeUser(email, password) || this.setState({ isCorrect: false })
  }

  handleAgain = () => {
    this.setState({
      email: '',
      password: '',
      isCorrect: true
    })
  }


  isCorrectRender = () => {
    const { handleAgain, 
            handleClick, 
            handleChange, 
            state: { email, password, isCorrect} 
    } = this

    return  isCorrect
      ? <div>
          <div>
            <input name="email" value={email} onChange={handleChange}/>
            <input name="password" value={password} onChange={handleChange}/>
          </div>
          <button onClick={handleClick}>Submit</button>
        </div>

      : <div>
          <p className="error">Incorrect email or password</p>
          <button onClick={handleAgain}>again</button>
        </div>
  }

  render() {
     
    const { isAuthorized } = this.props;
    const { isCorrectRender } = this;

    return (
      isAuthorized ? 
        <Redirect to="/" /> 
        :
        isCorrectRender()

    ) 
  }
}

export default AuthHOC(Login);
