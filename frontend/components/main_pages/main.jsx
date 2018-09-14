import React from 'react';
import {Link } from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false}
    this.handleClick = this.handleClick.bind(this);
    this.toggleClass= this.toggleClass.bind(this);
  }

  handleClick(e) {
    return this.props.logout();
  }

  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  render () {
    let toggle = "hide-dropdown";
    if (this.state.active === true) {
      toggle = "dropdown"
    }

    if (this.props.currentUser) {
      return(
      <div className="main-image" >
        <nav>
          <div className="nav-links">
            <Link to='/reviews'>Write a Review</Link>
            <Link to='/reviews'>Events</Link>
            <Link to='/reviews'>Talk</Link>
          </div>
          <div className="signup-links">
              <div className="user-icon" onClick={this.toggleClass}></div>
              <div className={toggle} onClick={this.toggleClass}>
                <div className="dropdown-triangle"></div>
                <ul className="lists">
                  <div className="profile">
                    <div className="profile-icon"></div>
                    <div className="user-details">
                      <li>{this.props.currentUser.firstname} {this.props.currentUser.lastname[0]}.</li>
                      <li>Manhatten, New York, NY</li>
                    </div>
                  </div>
                  <li className="about-me">About Me</li>
                  <li onClick={this.handleClick}>Logout</li>
                </ul>
              </div>
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
