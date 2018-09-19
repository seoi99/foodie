import { connect } from 'react-redux';
import Header from './header_fixed';
import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = state => {

  return {
    currentUser: state.entities.users[state.session.currentUserId],
    businesses: state.entities.businesses,
    // value: Object.values(state.entities.businesses).map(business => (business.business_name.includes("I")
      };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
