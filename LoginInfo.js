import './css/App.css';
import React from 'react';
import './css/Menu.css';
import { Link } from 'react-router-dom';

class LoginInfo extends React.Component {

  //<Link to="/account" className="link-menu-right">Аккаунт</Link>

  render() {
    if (this.props.user.id == 0){
      return(
        <Link to="/account" className="link-menu-right">Войти</Link> 
      )
    }
    else if (this.props.user.id != 0){
      return(
        <Link to="/account" className="link-menu-right">Аккаунт</Link> 
      )
    }
  }
}


export default LoginInfo;