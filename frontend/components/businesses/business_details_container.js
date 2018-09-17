import BusinessDetails from './business_details';
import {connect} from 'react-redux';
import {requestBusiness} from '../../actions/business_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  return {
  business: state.entities.businesses[ownProps.match.params.businessId],
  };

};

const mapDispatchToProps = (dispatch) => {

  return {
  requestBusiness: (id) => dispatch(requestBusiness(id)),
  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessDetails));
