import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      const review = this.props.review;

      const RateConversion = Array.from(Array(5).keys()).map((val, idx) => {
        if (idx + 1 <= review.rating) {
          return <li className="avg-rating" key={idx}></li>
        } else {
          return <li className="avg-rating-bad" key={idx}></li>
        }
      });
      return (
        <div className="rev-list-item">
          <div className="rev-user">
            <div className="user-icon-item"></div>
            <li>{review.firstname}</li>
          </div>
          <div className="rev-content">
            <div>{RateConversion}</div>
            <li> {review.body}</li>
          </div>
        </div>
      )

}}

export default ReviewListItem
