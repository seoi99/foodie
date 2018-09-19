import BusinessDetails from './business_details';
import {connect} from 'react-redux';
import {requestBusiness, deleteReview} from '../../actions/business_actions';
import {withRouter} from 'react-router-dom';
import {selectReviewsForBusiness} from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  const business = state.entities.businesses[ownProps.match.params.businessId];
  const currentUserId = state.session.currentUserId;
  
  const user = state.entities.users[currentUserId];
  return {
  business,
  currentUserId,
  user,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
  requestBusiness: (id) => dispatch(requestBusiness(id)),
  deleteReview: (id) => dispatch(deleteReview(id))
  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessDetails));
