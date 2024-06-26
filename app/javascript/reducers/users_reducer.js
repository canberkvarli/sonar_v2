import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...oldState,
        [action.currentUser.id]: action.currentUser,
      };

    case RECEIVE_USERS:
      return {
        ...oldState,
        ...action.users,
      };

    case RECEIVE_USER:
      return {
        ...oldState,
        [action.user.id]: {
          ...oldState[action.user.id],
          ...action.user,
        },
      };

    default:
      return oldState;
  }
};

export default usersReducer;
