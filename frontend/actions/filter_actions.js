import { requestAllBusinesses } from './business_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value,
});

export const updateFilter = (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return dispatch(requestAllBusinesses(getState().filter));
}
