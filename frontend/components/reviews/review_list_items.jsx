import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
      const review = this.props.review;


      if (review !== undefined) {

      let deleteButton;
        if (this.props.currentUserId === this.props.review.user_id) {
          deleteButton = <button onClick={() => this.props.deleteReview()}></button>
        }


      const RateConversion = Array.from(Array(5).keys()).map((val, idx) => {
        if (idx + 1 <= review.rating) {
          return <li className="avg-rating" key={idx}></li>
        } else {
          return <li className="avg-rating-bad" key={idx}></li>
        }
      });
      return (
        <div className="but-nobut">
        <div className="rev-list-item">
          <div className="rev-user">
            <div className="user-icon-item"></div>
            <li>{review.firstname}</li>
          </div>
          <div className="rev-content">
            <div className="rev-col">
            <div className="star-revss">{RateConversion}</div>
            <li> {review.body}</li>
            </div>
          </div>
        </div>
        {deleteButton}

        </div>
      )
      }
      else {
        return (<h1></h1>)
      }

}}

export default ReviewListItem
