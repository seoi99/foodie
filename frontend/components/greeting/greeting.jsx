import React from 'react';
import {Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    return this.props.logout();
  }
  render () {
    if (this.props.currentUser) {
      return(
      <div>
        <h1>Welcome! {this.props.currentUser.username} </h1>
        <button onClick={this.handleClick}> Logout </button>
      </div>);
    } else {
      return(
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>LogIn</Link>
        </div>
      );
    }
  }
}

export default Greeting;
