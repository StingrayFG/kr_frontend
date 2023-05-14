import './css/App.css';
import './css/ShoppingCartPage.css';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import MetalBlank from './MetalBlank';

class ShoppingCartPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: {}};
    this.state.isMounted = false;

    this.createOrder = this.createOrder.bind(this);
  };

  componentDidMount() {
    fetch('https://localhost:44325/shoppingcarts/get_current_cart?customerID=' + this.props.user.id)
        .then(res => res.json())
        .then(res => {
            this.setState({
                posts: res
            })
            this.setState({isMounted: true})
        })
        .catch(error => console.error(error))
  }

  createOrder()
  {
    if ((this.props.user.id != 0) && (this.state.posts.metalBlanks.length != 0))
    {
      const requestOptions = {
        method: 'PUT',
      };
      console.log(this.state.posts);
      fetch('https://localhost:44325/orders/add?customerID=' + this.props.user.id + '&paymentMethod=наличные', requestOptions)
        .then(
          this.setState({isCreated: true})
        )
    }
  }

  render() {
    if (this.state.isMounted == false) return null;
    if (this.state.isCreated == true) 
      return( 
        <Navigate replace to="/catalog" />   
      )
    else if (this.props.user.id != 0){
      return(
        <div className="std">
          <h2>
          Корзина
          </h2>
          <table className="products-table">
            <tbody>
              <tr>
                <td className="products-table-type-cell"><p>Тип</p></td>
                <td className="products-table-cell"><p>Ширина</p></td>
                <td className="products-table-cell"><p>Высота</p></td>
                <td className="products-table-cell"><p>Длина</p></td>
                <td className="products-table-cell"><p>Цена</p></td>
                <td className="products-table-cell"><p>Кол-во</p></td>
              </tr>
              {this.state.posts.metalBlanks.map(element => (
                <MetalBlank json={element} cart_mode={true} user={this.props.user}></MetalBlank>
              ))}
            </tbody>
          </table>
  
          <button className='cart-confirm-button' onClick={this.createOrder}><p>Оформить заказ</p></button>
          <p className='cart-price'>Итого: {this.state.posts.totalPrice}</p> 
        </div>           
      )}
    else{
      return(
      <div className="std">
          <h2>
          Корзина
          </h2>
          <h2>Для доступа к корзине необходимо войти в учетную запись</h2>
        </div>           
      )}
  }
}

export default ShoppingCartPage;