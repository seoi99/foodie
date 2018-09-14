import BusinessIndex from './business_index';
import {connect} from 'react-redux';
import { requestAllBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state) => {
  debugger
  return {
  businesses: Object.values(state.entities.businesses)
}}

const mapDispatchToProps = (dispatch) => ({
  requestAllBusinesses: () => dispatch(requestAllBusinesses())
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
