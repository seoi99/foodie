import { connect } from 'react-redux';
import { createReview } from '../../actions/business_actions.js';
import ReviewForm from './review_form';

const mapStateToProps = (state) => {
  return {
    review : {body: '', rating: 0},
    formtype: "Post Review"
  }
}
const mapDispatchToProps = dispatch => {
  return {
  action:(review) => dispatch(createReview(review))
}};

export default connect(mapStateToProps ,mapDispatchToProps)(ReviewForm);
