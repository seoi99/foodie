import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false, searchtxt: ""};
    this.toggleClass = this.toggleClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick(e) {
    return this.props.logout();
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }

  handleChange(e) {
    this.setState({searchtxt: e.currentTarget.value})
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.updateFilter('business_name', this.state.searchtxt);

  }
  render() {
    let toggle = "hide-dropdowns";
    if (this.state.active === true) {
      toggle = "dropdowns";
    }
    if (this.props.currentUser) {
    return(
    <div>
      <div className="header-all">

        <Link to="/">Foodie</Link>

          <div className="input-box">
            <label>Find
              <input type="text" placeholder="restaurants..." onChange={this.handleChange} value={this.state.searchtxt} />
            </label>
            <label>Near
              <input type="text" placeholder="location..."/>
            </label>
            <button value="submit" className="magify" onClick={this.handleSubmit}></button>
          </div>

        <div className="user-icons" onClick={this.toggleClass}></div>

        <div className={toggle} onClick={this.toggleClass}>
          <div className="dropdowns-triangles"></div>
          <ul className="lists">
            <div className="profile">
              <div className="profile-icons"></div>
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

      <div className="bg">
        <div className="cat-review">
          <ul className="cat">
            <li>Restaurants</li>
            <li>Gym</li>
            <li>Service</li>
          </ul>
          <Link to="/">Write a Review</Link>
        </div>
    </div>
    </div>

        );
      } else {
        return(
      <div>
        <div className="header-all">
          <Link to="/">Foodie</Link>
          <div className="input-box">
            <label>Find
              <input type="text" placeholder="restaurants..."/>
            </label>
            <label>Near
              <input type="text" placeholder="location..."/>
            </label>
            <button value="submit" className="magify"></button>
          </div>
          <div className="linktopage">
            <Link to="/businesses/login">Log In</Link>
            <Link to="/businesses/signup">Sign Up</Link>
          </div>
        </div>
        <div className="bg">
          <div className="cat-review">
            <ul className="cat">
              <li>Restaurants</li>
              <li>Gym</li>
              <li>Service</li>
            </ul>
            <Link to="/">Write a Review</Link>
          </div>
      </div>
      </div>
        );

      }
  }
}

export default Header;
