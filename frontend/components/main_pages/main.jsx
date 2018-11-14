import React from 'react';
import { Link } from 'react-router-dom';
import Footer  from '../footer/footer';
import ReviewIndex  from './review_index';
import BusinessMainIndexItem  from './business_main_index';
import Dropdown from '../header/dropdown';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false, searchtxt:"", dropdown: "hidden"};
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleClass= this.toggleClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
    this.clicked = this.clicked.bind(this);

  }

  handleClick(e) {
    return this.props.logout();
  }

  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  }
  navigateToIndex() {
    this.props.history.push("/businesses")
  }
  handleChange(e) {
    this.setState({searchtxt: e.currentTarget.value})
    this.props.requestAllBusinesses();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getSelectedBusinesses(this.props.businesses, this.state.searchtxt)
    this.setState({dropdown: "hidden"});
    this.navigateToIndex();
  }

  clicked() {
    this.setState({dropdown:"show"})
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.props.getSelectedBusinesses(this.props.businesses, e.currentTarget.value)
    this.navigateToIndex();
  }

  componentDidMount() {
    this.props.requestAllReviews();
    this.props.requestAllBusinesses();
    this.props.requestPhoto(this.props.currentUser.id)
  }

  render () {
    let toggle = "hide-dropdown";
    if (this.state.active === true) {
      toggle = "dropdown";
    }
    let signinform;
    let img = this.props.photo ? <img className="profile-icon" src={this.props.photo.photoUrl}/> : <img className="profile-icon" src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"/>
    let mainImg = this.props.photo ? <img className="user-icon" src={this.props.photo.photoUrl} onClick={this.toggleClass}/> : <img className="user-icon" src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png" onClick={this.toggleClass}/>
    if (this.props.currentUser) {
      signinform = (
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
      signinform = (
        <div className="signup-links">
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      )
    }

    let reviews;
    const currentUserId = this.props.currentUserId
    if (Object.keys(this.props.reviews).length > 0) {
      reviews = Object.values(this.props.reviews, currentUserId).map((review, idx) => {
    return <ReviewIndex review={review} key={idx} currentUserId={currentUserId}/>
    }).reverse().filter((val, idx) => idx < 12)}

    let businesses;
    if (Object.keys(this.props.businesses).length > 0) {
    businesses = Object.values(this.props.businesses).map((business, idx) => {
    return <BusinessMainIndexItem business={business} key={idx} />
    }).reverse().filter((val, idx) => idx < 3)}

      return(
      <div>
      <div className="main-image" >
        <nav>
          <div className="nav-links">
            <Link to='/reviews'>Write a Review</Link>
          </div>
          {signinform}
        </nav>
        <div className="main-logo">
          <Link to="/"><h1>Foodie</h1></Link>
        </div>
        <div className="input-main">
          <div className="input-box">
            <form onSubmit={this.handleSubmit}>
            <label><p>Find</p>
              <input type="text" placeholder="korean, japanese, salad..." onChange={this.handleChange} value={this.state.searchtxt} onClick={this.clicked}/>
              <div className={this.state.dropdown}>
                <Dropdown searchtxt={this.state.searchtxt} updateSearchtxt={this.handleChange} />
              </div>
            </label>
            <label><p>Near</p>
              <input type="text" placeholder="location..."/>
            </label>
            <button type="submit" value="" className="magify"/>
            </form>
          </div>
        </div>
        <ul className="goto-cat">
            <i className="fa fa-spoon"></i><input type="button" value="Delivery" onClick={this.handleButtonClick} />
            <i className="fa fa-spoon"></i><input type="button" value="Salad" onClick={this.handleButtonClick} />
            <i className="fa fa-spoon"></i><input type="button" value="Fast Food" onClick={this.handleButtonClick} />
            <i className="fa fa-spoon"></i><input type="button" value="Japanese" onClick={this.handleButtonClick} />
            <i className="fa fa-spoon"></i><input type="button" value="Korean" onClick={this.handleButtonClick} />
        </ul>
      </div>
      <div className="main-business">
        <h1>Hot & New Businesses </h1>
        <ul className="biz-index-container">
          {businesses}
        </ul>
      </div>
      <div className="main-reviews">
        <h1>Recent Activities</h1>
        <ul className="review-index-container">
          {reviews}
        </ul>
      </div>
        <Footer />
      </div>
      );
    }
  }


export default MainPage;
