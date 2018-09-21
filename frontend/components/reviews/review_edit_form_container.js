import { connect } from 'react-redux';
import { updateReview, createReview} from '../../actions/business_actions.js';
import ReviewForm from './review_form';
const mapStateToProps = (state, ownProps) => {

  const review = state.entities.reviews[ownProps.match.params.reviewId] || {body:'', rating:0};

  return {
    review,
    errors: state.errors.review,
    businessName: state.entities.businesses[ownProps.match.params.businessId].business_name,
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
