import './css/App.css';
import './css/Card.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MetalBlank from './MetalBlank';

class Card extends React.Component {

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
      <div className="card">
        <table className="card-table">
          <tbody>
            <tr>
              <td className="card-header" colSpan="2">
                <Link to="/product" state={this.props} className="link-card">
                {this.state.posts.type.slice(0,1).toUpperCase() + 
                this.state.posts.type.slice(1, this.state.posts.type.length)}&nbsp;
                {this.state.posts.material}
                </Link>
              </td>
            </tr>
            <tr>
              <td className="card-img">
                <img></img>
              </td>
              <td className="card-product"> 
              
              {this.state.posts.metalBlanks.map(element => (
                <MetalBlank json={element} user={this.props.user}></MetalBlank>
              ))}

              </td>
            </tr>
          </tbody>
        </table>
      </div>           
    )}
}

export default Card;