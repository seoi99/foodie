import React from 'react';
import Header from '../header/header_fixed_container';
import {Link} from 'react-router-dom';
import GoogleMapDetails from '../business_map/google_map_details';

class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {review: 5};
  }

  componentDidMount() {
    this.props.requestBusiness(this.props.match.params.businessId);
  }


  render() {
      const currentDate = new Date();
      const currentDay = Date().slice(0,3);
      const currentHours = currentDate.getHours();
      const currentMin = currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
      const currentTime = currentHours.toString() + currentMin.toString();

    if (this.props.business != undefined) {
      const business = this.props.business;
      const images = business.images.map(image => <img src={image.img_url} key={image.id} />);

      const getCurrentDay = business.hours.map(hour => {
        if (currentDay === hour.day) {
          if (parseInt(currentTime) > hour.open.replace(":","") && parseInt(currentTime) < hour.close.replace(":","")) {
            if (hour.close.slice(0,2) > 12) {
              hour.close = (hour.close.slice(0,2) - 12) + hour.close.slice(2)
            }
            return (
              <div  className="open-div" key={hour.id}>Today <b>{hour.open} am - {hour.close} pm </b>
                <span className="open-status">Open Now</span>
              </div>
            )
          } else {
            return (
              <div className="close-div" key={hour.id}> <b>Today {hour.open} am  - {hour.close} pm </b>
                <span className="closed-status"> Closed </span>
              </div>
          )
          }
        }
      })

      const hours = business.hours.map(hour => {
        if (hour.close.slice(0,2) > 12) {
          hour.close = (hour.close.slice(0,2) - 12) + hour.close.slice(2)
        }
          return (<div className="day-hours"><li key={hour.id}>{hour.day}: </li>
          <li>{hour.open} am - {hour.close} pm </li></div>)
      });



        const priceConversion = (output) => {
          let symb = ""
          for (let i = 10; i <= 40; i += 10) {
          if (i <= output) {
            symb += "$";
          } else {
            return symb;}
      }}

      const avgPriceConversion = Array.from(Array(5).keys()).map((val, idx) => {

        if (idx + 1 <= priceConversion(19).length) {
          return <li className="avg-price" key={idx}></li>
        } else {
          return <li className="avg-price-bad" key={idx}></li>
        }
      });

      const avgRateConversion = Array.from(Array(5).keys()).map((val, idx) => {
        if (idx + 1 <= this.state.review) {
          return <li className="avg-rating" key={idx}></li>
        } else {
          return <li className="avg-rating-bad" key={idx}></li>
        }
      });



        return(
        <div>
          <Header />
          <div className="bg-three">
            <div className="width-all">
            <div className="bizn-review">
              <div className="bizn">
                <h1>{business.business_name}</h1>
                <ul className="avgrate">
                  {avgRateConversion}
                </ul>
                <div className="price-cat">
                  <p className="price">{priceConversion(19)}</p>
              </div>
              </div>
              <div className="review-but-row">
                <Link to={`/businesses/${business.id}/reviews`}><button>Write a Review</button></Link>
              </div>
            </div>
            <div className="map-img">
              <div className="map-details">
              <GoogleMapDetails/>
              <p>{business.full_address}</p>
              <p>{business.phone_number}</p>
              </div>
              {images}
            </div>
            </div>
        </div>

          <div className="biz-show-main">
            <div className="biz-show-reviews">
              <ul>
                <li>Review list will be created</li>
              </ul>
            </div>

            <div className="biz-show-side">
              <div className="time-menu-price">
                {getCurrentDay}
                <p className="web"><a href={business.website}>Full Menu</a></p>
                <ul className="biz-sym-price">
                  {avgPriceConversion}
                  <li> Price range Under $19 </li>
                </ul>
              </div>
              <ul className="biz-hours">
                <h1>Hours</h1>
                {hours}
              </ul>
          </div>
          </div>

        </div>
      );
    }


    else {
      return (
        <h1></h1>
      );
    }
    }
}

export default BusinessDetails;