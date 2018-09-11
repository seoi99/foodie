import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const logoutCurrentUser = () => ({
  type: RECEIVE_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then((currentUser) => {
      return dispatch(receiveCurrentUser(currentUser));
    }, (err) => {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then((currentUser) => {
      return dispatch(receiveCurrentUser(currentUser));
    }, (err) => {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};
