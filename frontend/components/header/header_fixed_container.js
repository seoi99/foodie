import { connect } from 'react-redux';
import Header from './header_fixed';
import { logout } from '../../actions/session_actions';
import { updateFilter } from '../../actions/filter_actions';
<<<<<<< HEAD
import {requestAllBusinesses, getSearchResult, loadBusinesses} from '../../actions/business_actions'
=======
import {requestAllBusinesses, getSelectedBusinesses, getSearchResult, loadBusinesses} from '../../actions/business_actions'
>>>>>>> ffc86eff251a60724b78e84e4a788c0d044846df
import { requestPhoto} from '../../actions/user_pic_action';


const mapStateToProps = state => {

  return {
    currentUser: state.entities.users[state.session.currentUserId],
    businesses: state.entities.businesses,
    photo: state.entities.photos[state.session.currentUserId],
    loading: state.ui.businesses,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
<<<<<<< HEAD
=======
    getSelectedBusinesses: (data, searchtxt) => dispatch(getSelectedBusinesses(data, searchtxt)),
>>>>>>> ffc86eff251a60724b78e84e4a788c0d044846df
    getSearchResult: (query) => dispatch(getSearchResult(query)),
    requestAllBusinesses: () => dispatch(requestAllBusinesses()),
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    loadBusinesses: () => dispatch(loadBusinesses()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
