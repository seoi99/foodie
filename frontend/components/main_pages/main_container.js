import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainPage from './main';
import {getSelectedBusinesses, requestAllReviews, requestAllBusinesses} from '../../actions/business_actions'
import { requestPhoto} from '../../actions/user_pic_action';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    reviews: state.entities.reviews,
    currentUserId: state.session.currentUserId,
    businesses: state.entities.businesses,
    photo: state.entities.photos[state.session.currentUserId],
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
    requestPhoto: (id) => dispatch(requestPhoto(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
