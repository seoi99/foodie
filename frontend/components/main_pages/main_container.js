import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainPage from './main';
import {getSelectedBusinesses, requestAllReviews, requestAllBusinesses} from '../../actions/business_actions'

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    reviews: state.entities.reviews,
    currentUserId: state.session.currentUserId,
    businesses: state.entities.businesses,
   };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      return dispatch(logout());
    },
    getSelectedBusinesses: (data, searchtxt) => dispatch(getSelectedBusinesses(data, searchtxt)),
    requestAllReviews: () => dispatch(requestAllReviews()),
    requestAllBusinesses: (data) => dispatch(requestAllBusinesses(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
