import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

const SessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      // return Object.assign({}, oldState, action.errors);
      if (action.errors === undefined) {
        return null;
      } else {
        return action.errors;
      }
    case RECEIVE_CURRENT_USER:
      return [];
    // return Object.assign({}, oldState)
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
