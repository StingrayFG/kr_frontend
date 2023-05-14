import './css/App.css';
import './css/ProductTable.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MetalBlank from './MetalBlank';
import {LoginContext} from './LoginContext';

class CardPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: {}};
    this.state.isMounted = false;

    
  };

  componentDidMount() {
    this.setState({
      posts: this.props.json
    })
    this.setState({
      isMounted: true
    })
  };

  render() {
    
    if (this.state.isMounted == false) return null;
    else return(
      <div className="std">
        <h2>
        {this.state.posts.type.slice(0,1).toUpperCase() + 
        this.state.posts.type.slice(1, this.state.posts.type.length)}&nbsp;
        {this.state.posts.material}
        </h2>
        <table className="products-table">
          <tbody>
            <tr>
              <td className="products-table-cell"><p>Ширина</p></td>
              <td className="products-table-cell"><p>Высота</p></td>
              <td className="products-table-cell"><p>Длина</p></td>
              <td className="products-table-cell"><p>Цена</p></td>
              <td className="products-table-cell"><p>Наличие</p></td>
            </tr>
            {this.state.posts.metalBlanks.map(element => (
                <MetalBlank json={element} page_mode={true} user={this.props.user}></MetalBlank>
            ))}
              
           
            
          </tbody>
        </table>
      </div>           
    )}
}

export default CardPage;