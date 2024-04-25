import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTrack, fetchTracks, setMainTrack, playTrackOnShow, pauseTrackOnShow } from "../../actions/track_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { fetchComments, createComment, deleteComment } from "../../actions/comment_actions"
import { fetchUser } from "../../actions/user_actions";
import { pauseTrack, playTrack, receivePlayTrack } from "../../actions/playhead_actions";

import TrackShow from "./track_show";

const mSTP = (state) => {

  let tracks = Object.values(state.entities.tracks)
  let { trackId } = useParams()
  let currentLikeId;
  let currentUser;
  let userLikesTrack;

  const trackLoaded = () => {
    if (state.entities.tracks[trackId]) {
      return true;
    } else {
      return false
    }
  }

  const comments = tracks ? state.entities.tracks[trackId].comments : null;

  if (state.session.id) {  // if there is a current session

    currentUser = state.entities.users[state.session.id];
    if (currentUser.likes) {

      if (currentUser.likes[trackId]) {

        currentLikeId = currentUser.likes[trackId].id
        userLikesTrack = true;

      }
    } else {
      userLikesTrack = false;

    }
  } else {

    currentLikeId = null

  }

  return {

    currentUser: state.entities.users[state.session.id],
    trackId: trackId,
    track: state.entities.tracks[trackId],
    userLikesTrack: userLikesTrack,
    currentLikeId,
    currentTime: state.playhead.currentTime,
    isPlaying: state.playhead.isPlaying,
    isTrackPlayingOnShow: state.entities.tracks.isTrackShowPlaying,
    comments: comments
  }

}


const mDTP = dispatch => {
  return {

    fetchTracks: () => dispatch(fetchTracks()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    uploadTrack: (track) => dispatch(uploadTrack(track)),
    createLike: (like, trackId) => dispatch(createLike(like, trackId)),
    deleteLike: (likeId, trackId) => dispatch(deleteLike(likeId, trackId)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    setMainTrack: (track) => dispatch(setMainTrack(track)),
    receivePlayTrack: (track) => dispatch(receivePlayTrack(track)),
    playTrackOnShow: () => dispatch(playTrackOnShow()),
    pauseTrackOnShow: () => dispatch(pauseTrackOnShow()),
    fetchComments: (trackId) => dispatch(fetchComments(trackId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  }

}

export default connect(mSTP, mDTP)(TrackShow)