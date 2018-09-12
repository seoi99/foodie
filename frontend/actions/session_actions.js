import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then((currentUser) => {
      debugger
      return dispatch(receiveCurrentUser(currentUser));
    });
  };
};

export const signup = (currentUser) => {
  debugger
  return (dispatch) => {
    return SessionApiUtil.signup(currentUser).then((currentUser) => {
      return dispatch(receiveCurrentUser(currentUser));
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
