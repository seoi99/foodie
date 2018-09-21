import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false, searchtxt: ""};
    this.toggleClass = this.toggleClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);

  }
  handleClick(e) {
    return this.props.logout();
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }
  navigateToIndex() {
    this.props.history.push('/businesses')
  }
  handleChange(e) {
    this.setState({searchtxt: e.currentTarget.value})
  }

  handleButtonClick(e) {
    e.preventDefault();
    // this.setState({searchtxt: e.currentTarget.value})
    debugger
    this.props.getSelectedBusinesses(this.props.businesses,e.target.value)
    this.navigateToIndex();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getSelectedBusinesses(this.props.businesses, this.state.searchtxt)
    this.navigateToIndex();
  }


  render() {
    let toggle = "hide-dropdowns";
    if (this.state.active === true) {
      toggle = "dropdowns";
    }

    let signup;
      if (this.props.currentUser) {
        signup = (
          <div className="signup-links">
              <div className="user-icons" onClick={this.toggleClass}></div>
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
            )
      } else {
        signup = (
          <div className="linktopage">
            <Link to="/businesses/login">Log In</Link>
            <Link to="/businesses/signup">Sign Up</Link>
          </div>
        )
      }

  return(
    <div>
      <div className="header-all">

        <Link to="/">Foodie</Link>

          <div className="input-box">
            <form onSubmit={this.handleSubmit}>
            <label>Find
              <input type="text" placeholder="restaurants..." onChange={this.handleChange} value={this.state.searchtxt} />
            </label>
            <label>Near
              <input type="text" placeholder="location..."/>
            </label>
            <button type="submit" value="" className="magify"/>
            </form>
          </div>
          {signup}
      </div>

      <div className="bg">
        <div className="cat-review">
          <ul className="cat">
            <input type="button" value="Delivery" onClick={this.handleButtonClick}/>
            <input type="button" value="Salad" onClick={this.handleButtonClick} />
            <input type="button" value="Fast Food" onClick={this.handleButtonClick} />
            <input type="button" value="Japanese" onClick={this.handleButtonClick} />
            <input type="button" value="Chinese" onClick={this.handleButtonClick} />
            <input type="button" value="Italian" onClick={this.handleButtonClick} />
            <input type="button" value="Korean" onClick={this.handleButtonClick} />
          </ul>
          <Link to="/">Write a Review</Link>
        </div>
    </div>
    </div>

        );
  }
}

export default withRouter(Header);
