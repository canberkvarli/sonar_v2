import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

//regular action creators

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});
const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

//thunk action creators

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((response) => {
      console.log("Response from login API:", response);
      return response;
    })
    .then(
      (user) => {
        console.log("User data received:", user);
        dispatch(receiveCurrentUser(user));
      },
      (err) => {
        console.log("Error during login:", err);
        dispatch(receiveErrors(err));
      }
    );

export const logout = () => (dispatch) =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user)
    .then((response) => {
      console.log("Response from signup API:", response);
      return response;
    })
    .then(
      (user) => {
        console.log("User data received:", user);
        dispatch(receiveCurrentUser(user));
      },
      (err) => {
        console.error("Error during signup:", err);
        dispatch(receiveErrors(err));
      }
    );
