import './App.css';
import React from 'react';
import './LoginPage.css';
import {useState, useEffect} from 'react';

class LoginPage extends React.Component {

  constructor(){
    super();
    this.state={login: '', password: ''}
  }

  tryLogin() {
    fetch('https://localhost:44325/customers/get_by_login?phoneNumber=' + this.state.login + '&password=' + this.state.password)
        .then(res => res.json())
        .then(res => {
            this.setState({
                user: res
            })
            console.log(this.state)
        })
        .catch(error => console.error(error))
  }

  handleSubmit = (event) => {
    
    event.preventDefault();

    console.log('Form submitted');    
  }

  changeLogin (login) {
    this.setState({ login });
  }

  changePassword (password) {
    this.setState({ password });
  }

  render(){
    return(
      <div className="std">
        <h2>Учетная запись</h2>
        <div className="login-window">
        <form onSubmit = {handleSubmit}>
          <label>
            <p>Телефон</p>
            <input value={this.state.login} onChange={evt => this.state.changeLogin(evt)} type="text" />
          </label>
          <label>
            <p>Пароль</p>
            <input value={this.state.password} onChange={this.state.changePassword} type="password" />
          </label>
          <div>
            <button onClick={this.state.tryLogin}><p>Войти</p></button>
          </div>
        </form>
        </div>
      </div>
    )}
}

export default LoginPage;

