import merge from 'lodash/merge';

import {
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  PHOTO_ERROR,
} from '../actions/user_pic_action';

const photoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
    
      return merge({}, state, action.payload.photo);
    case REMOVE_PHOTO:
      return state;
    default:
      return state;
  }
}

export default photoReducer;
