import merge from 'lodash/merge';

import {
  REMOVE_PHOTO,
  PHOTO_ERROR,
} from '../actions/user_pic_action';

const photoUiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_PHOTO:
      return action.photo;
    default:
      return state;
  }
}

export default photoUiReducer;
