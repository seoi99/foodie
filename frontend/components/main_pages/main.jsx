import React from 'react';
import {Link } from 'react-router-dom';

class MainPage extends React.Component {
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
      <div className="main-image">
        <nav>
          <div className="nav-links">
            <Link to='/reviews'>Write a Review</Link>
            <Link to='/reviews'>Events</Link>
            <Link to='/reviews'>Talk</Link>
          </div>
          <div className="signup-links">
            <button onClick={this.handleClick}> Logout </button>
            <div className="user-icon"></div>
          </div>
        </nav>
        <h1><Link to="/">Foodie</Link></h1>
      </div>);
    }
    else {
      return(
        <div className="main-image">
          <nav>
            <div className="nav-links">
              <Link to='/reviews'>Write a Review</Link>
              <Link to='/reviews'>Events</Link>
              <Link to='/reviews'>Talk</Link>
            </div>
            <div className="signup-links">
              <Link to='/login'>Log In</Link>
              <Link to='/signup'>Sign Up</Link>
            </div>
          </nav>
          <h1><Link to="/">Foodie</Link></h1>

        </div>
      );
    }
  }
}

export default MainPage;
