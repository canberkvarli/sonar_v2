import * as APIUtil from "../util/comment_api.util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveComment = (track) => ({ type: RECEIVE_COMMENT, track });
export const deleteCommentAction = (trackId) => ({
  type: DELETE_COMMENT,
  trackId,
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments,
});

export const createComment = (comment) => (dispatch) =>
  APIUtil.createComment(comment).then((track) =>
    dispatch(receiveComment(track))
  );

export const deleteComment = (commentId, trackId) => (dispatch) =>
  APIUtil.deleteComment(commentId, trackId).then(() =>
    dispatch(deleteCommentAction(trackId))
  );

export const fetchComments = (trackId) => (dispatch) => {
  return APIUtil.fetchComments(trackId)
    .then((comments) => {
      dispatch(receiveComments(comments));
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });
};
