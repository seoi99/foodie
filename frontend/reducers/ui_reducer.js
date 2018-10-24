import {RECEIVE_ALL_BUSINESSES, START_LOADING_REVIEW_INDEX} from '../actions/business_actions';

const initialState = {
  ReviewIndexLoading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return Object.assign({}, state, {ReviewIndexLoading: false})
    case START_LOADING_REVIEW_INDEX:
      return Object.assign({}, state, {ReviewIndexLoading: true})
    default:
      return state
  }
}

export default uiReducer
