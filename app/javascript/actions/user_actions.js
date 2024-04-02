import * as APIUserUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

// regular

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
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
