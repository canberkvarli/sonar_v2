import { connect } from "react-redux";
import { fetchTrack, fetchTracks, setMainTrack } from "../../actions/track_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { fetchUser } from "../../actions/user_actions";
import { pauseTrack, playTrack } from "../../actions/playhead_actions";
import { withRouter } from "react-router";

import TrackShow from "./track_show";

const mSTP = (state, ownProps) => {


  const trackLoaded = () => {
    if (state.entities.tracks[ownProps.match.params.trackId]) {
      return true;
    } else {
      return false
    }
  }


  let tracks = Object.values(state.entities.tracks)
  let currentLikeId;
  let currentUser;
  let userLikesTrack;


  if (state.session.id) {  // if there is a current session

    currentUser = state.entities.users[state.session.id];
    if (currentUser.likes) {

      if (currentUser.likes[ownProps.match.params.trackId]) {

        currentLikeId = currentUser.likes[ownProps.match.params.trackId].id
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
    trackId: ownProps.match.params.trackId,
    track: state.entities.tracks[ownProps.match.params.trackId],
    // trackUrl: (trackLoaded() ? tracks[ownProps.match.params.trackId].trackUrl : ''),
    userLikesTrack: userLikesTrack,
    currentLikeId,
    currentTime: state.playhead.currentTime,
    isPlaying: state.playhead.isPlaying
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
    setMainTrack: (track) => dispatch(setMainTrack(track))

  }

}

export default withRouter(connect(mSTP, mDTP)(TrackShow));