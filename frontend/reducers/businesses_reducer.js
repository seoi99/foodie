import merge from 'lodash/merge';
import {RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES, RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_SELECTED_BUSINESSES} from '../actions/business_actions';

const businessReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESS:
      const business = action.payload
      return merge({}, state, {[business.id]: business})
    case RECEIVE_ALL_BUSINESSES:
      return  merge({}, state, action.payload);
    case RECEIVE_SELECTED_BUSINESSES:
      const { businesses, businessKeys, searchtxt} = action;
      const BusinessNameCheck = businessKeys.map(val => {
        if (businesses[val].business_name.toLowerCase().includes(searchtxt.toLowerCase()) || businesses[val].category.toLowerCase().includes(searchtxt.toLowerCase())) {
          return businesses[val]
        }
      }).filter(val => val !== undefined);
      return BusinessNameCheck;
    case RECEIVE_REVIEW:
     const { review, average_rating } = action;
     const newState = merge({}, state);
     newState[review.business_id].average_rating = average_rating;
     newState[review.business_id].reviewIds.push(review.id);
       return newState;
    case REMOVE_REVIEW:
      const { deletereview } = action;
      const deleteState = merge({}, state);
      delete deleteState[deletereview.business_id].reviews[deletereview.user_id]
      return deleteState;
    default:
      return state;
  }
}

export default businessReducer;
