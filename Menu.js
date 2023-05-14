import './css/App.css';
import LoginInfo from './LoginInfo';
import './css/Menu.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';

class Menu extends React.Component {

    componentDidUpdate() {
        //console.log(this.props)
    }

    render(){
        return(
        <div className="menu std">
            <Link to="/catalog" className="link-menu">Каталог</Link>
            <Link to="/payments" className="link-menu">Оплата</Link>
            <Link to="/contacts" className="link-menu">Контакты</Link> 
            <Link to="/cart" className="link-menu-right">Корзина</Link>  
            <LoginInfo user={this.props.user}/>
            
        </div>
    )}
}

export default Menu;
