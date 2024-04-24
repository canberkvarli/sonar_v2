import * as APIUtil from "../util/like_api_util";


export const RECEIVE_LIKE = "w";
export const DELETE_LIKE = "REMOVE_LIKE";

export const receiveLike = (track) => ({ type: RECEIVE_LIKE, track });
export const removeLike = (trackId) => ({ type: DELETE_LIKE, trackId });

export const createLike = (likerId, trackId) => (dispatch) =>
  APIUtil.createLike(likerId, trackId).then((track) =>
    dispatch(receiveLike(track))
  );

export const deleteLike = (likeId, trackId) => (dispatch) =>
  APIUtil.deleteLike(likeId, trackId).then((track) => dispatch(removeLike(track)));