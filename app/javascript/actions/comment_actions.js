import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveComment = (track) => ({ type: RECEIVE_COMMENT, track });
export const deleteCommentAction = (trackId) => ({
  type: DELETE_COMMENT,
  trackId,
});

export const createComment = (comment) => (dispatch) =>
  APIUtil.createComment(comment).then((track) =>
    dispatch(receiveComment(track))
  );

export const deleteComment = (commentId, trackId) => (dispatch) =>
  APIUtil.deleteComment(commentId, trackId).then(() =>
    dispatch(deleteCommentAction(trackId))
  );
