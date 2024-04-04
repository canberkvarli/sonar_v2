import * as APIUserUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

// regular

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});
// thunk

export const fetchUser = (userId) => (dispatch) => {
  APIUserUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)));
};

export const updateUser = (user, userId) => {
  APIUserUtil.updateUser(user, userId).then((user) =>
    dispatch(receiveUser(user))
  );
};

export const fetchUsers = () => (dispatch) => {
  APIUserUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)));
};
