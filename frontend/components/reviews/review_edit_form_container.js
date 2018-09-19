import { connect } from 'react-redux';
import { updateReview, createReview} from '../../actions/business_actions.js';
import ReviewForm from './review_form';
const mapStateToProps = (state, ownProps) => {

  const review = state.entities.reviews[ownProps.match.params.reviewId] || {body:'', rating:5}
  return {
    review,
    formtype: "Edit Review",

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  action: (review) => {
    return dispatch(updateReview(Object.assign({},review, {id: parseInt(ownProps.match.params.reviewId)})))
  }}
};

export default connect(mapStateToProps,mapDispatchToProps)(ReviewForm);
