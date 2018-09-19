import merge from 'lodash/merge';
import {RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/business_actions';

const businessReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESS:
      const business = action.payload
      return merge({}, state, {[business.id]: business})
    case RECEIVE_ALL_BUSINESSES:
      return  merge({}, state, action.payload);
    case RECEIVE_REVIEW:
     const { review, average_rating } = action;
     const newState = merge({}, state);
     newState[review.business_id].average_rating = average_rating;
     newState[review.business_id].reviewIds.push(review.id);
       return newState;
    case REMOVE_REVIEW:
      const deleteState = Object.assign({}, state);
      delete deleteState[review.business_id].reviews[session.currentUserId]
      return deleteState
    default:
      return state;
  }
}

export default businessReducer;
