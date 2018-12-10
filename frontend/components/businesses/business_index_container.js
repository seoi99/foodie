import BusinessIndex from './business_index';
import {connect} from 'react-redux';
import { requestAllBusinesses , loadBusinesses, loadNoBusinesses} from '../../actions/business_actions';

const mapStateToProps = (state) => {
  return {
  businesses: Object.values(state.entities.businesses),
  loading: state.ui.businesses.loading
}}

const mapDispatchToProps = (dispatch) => ({
  requestAllBusinesses: (businesses) => dispatch(requestAllBusinesses(businesses)),
  loadBusinesses: () => dispatch(loadBusinesses()),
  loadNoBusinesses: () => dispatch(loadNoBusinesses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
