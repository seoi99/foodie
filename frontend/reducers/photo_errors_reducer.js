import { PHOTO_ERROR } from '../actions/user_pic_action';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case PHOTO_ERROR:
      return action.errors;
    default:
      return state;
  }
};
