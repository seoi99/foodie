import merge from 'lodash/merge';
import {RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES} from '../actions/business_actions';

const businessReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESS:
      const business = action.payload

      return merge({}, state, {[business.id]: business})
      return
    case RECEIVE_ALL_BUSINESSES:
      return  merge({}, state,action.payload);
    default:
      return state;
  }
}

export default businessReducer;
