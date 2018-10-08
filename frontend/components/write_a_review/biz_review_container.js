import BusinessReview from './biz_review';
import {connect} from 'react-redux';
import {requestAllBusinesses} from '../../actions/business_actions';

const mapStateToProps = (state) => {

  return {
    businesses: Object.values(state.entities.businesses)
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestAllBusinesses: (businesses) => dispatch(requestAllBusinesses(businesses))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessReview)
