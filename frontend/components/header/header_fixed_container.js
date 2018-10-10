import { connect } from 'react-redux';
import Header from './header_fixed';
import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';
import {requestAllBusinesses, getSelectedBusinesses} from '../../actions/business_actions'

const mapStateToProps = state => {

  return {
    currentUser: state.entities.users[state.session.currentUserId],
    businesses: state.entities.businesses,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getSelectedBusinesses: (data, searchtxt) => dispatch(getSelectedBusinesses(data, searchtxt)),
    requestAllBusinesses: () => dispatch(requestAllBusinesses()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
