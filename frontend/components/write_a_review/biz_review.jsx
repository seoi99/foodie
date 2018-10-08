import React from 'react';
import HeaderContainer from '../header/header_fixed_container';

class BusinessReivew extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.requestAllBusinesses();
  }
  render() {
    if (this.props.businesses) {
      const businesses = this.props.businesses
      return(
        <div>
          <HeaderContainer/>
        <div className="yelp-write">
          <h2>Your First Review awaits</h2>
          <p>Review your favorite businesses and share your experiences with our community. Need a little help getting started? Check out these tips.</p>
          <img src="./assets/yelp_review_img.png"/>
        </div>
        <h1>Been to these Businesses Recently?</h1>
        {businesses.map((business,idx) => {
          return(
          <ul key={idx}>
            <img src={business.images[0].img_url} />
            <li>{business.business_name}</li>
            <li>{business.average_rating}</li>
            <li>{business.category}</li>
            <li>{business.full_address}</li>
            <button>Write a Review</button>
          </ul>
          )
        })}
        </div>
      )
    } else {
      return(
        <h1></h1>
      )
    }
  }

}

export default BusinessReivew
