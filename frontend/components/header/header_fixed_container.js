import { connect } from 'react-redux';
import Header from './header_fixed';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => {
  return { currentUser: state.entities.users[state.session.currentUserId] };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      return dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
