import { combineReducers } from 'redux';

import users from './users_reducer';
import businesses from './businesses_reducer';
import reviews from './reviews_reducer';
import filters from './filters_reducer';


export default combineReducers({
  users,
  businesses,
  reviews,
  filters
});
