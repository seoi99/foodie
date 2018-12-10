  import React from 'react';
import Dropdown from './dropdown';
import {Link, withRouter} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {active: false, searchtxt: "", dropdown: "hidden", bkey: false};
    this.toggleClass = this.toggleClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  handleClick(e) {
    return this.props.logout();
  }

  componentDidMount() {
      this.props.requestPhoto(this.props.currentUser.id)
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }

  handleChange(e) {
    this.setState({searchtxt: e.currentTarget.value});
    this.setState({dropdown:"show"});
  }

  navigateToIndex() {
    this.props.history.push(`/businesses`)
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.props.getSearchResult(e.target.value)
    this.navigateToIndex();
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({dropdown: "hidden"});
    this.props.loadBusinesses();
    this.navigateToIndex();
  }

  clicked(e) {
      this.setState({dropdown:"show"})
  }


  render() {
    let toggle = "hide-dropdowns";
    if (this.state.active === true) {
      toggle = "dropdowns";
    }
    let img = this.props.photo ? <img className="profile-icon" src={this.props.photo.photoUrl}/> : <img className="profile-icon" src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"/>
    let mainImg = this.props.photo ? <img className="user-icons" src={this.props.photo.photoUrl} onClick={this.toggleClass}/> : <img className="user-icons" src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png" onClick={this.toggleClass}/>
    let signup;
      if (this.props.currentUser) {
        signup = (
          <div className="signup-links">
                {mainImg}
              <div className={toggle} onClick={this.toggleClass}>
                <ul className="lists">
                  <div className="dropdown-triangle"></div>
                  <div className="profile">
                    {img}
                    <div className="user-details">
                      <li>{this.props.currentUser.firstname} {this.props.currentUser.lastname[0]}.</li>
                      <li>Manhatten, New York, NY</li>
                    </div>
                  </div>
                  <li className="about-me"><Link to="/profile">About Me</Link></li>
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
            <form className="headerfix" onSubmit={this.handleSubmit}>
              <label className="lab-flex">
                <p>Find</p>
                <input type="text" placeholder="korean, japanese, salad ..."
                  onChange={this.handleChange} value={this.state.searchtxt}
                  onClick={this.clicked}
                   />
                 <div className={this.state.dropdown}>
                  <Dropdown searchtxt={this.state.searchtxt} businesses={this.props.businesses} />
                </div>
              </label>
              <label>
                <p>Near</p>
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
            <input type="button" value="Korean" onClick={this.handleButtonClick} />
          </ul>

          <Link to="/reviews" >Write a Review</Link>
        </div>

    </div>

    </div>
    );
  }
}

export default withRouter(Header);
