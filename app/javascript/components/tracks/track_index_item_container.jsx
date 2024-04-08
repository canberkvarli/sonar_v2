import { connect } from 'react-redux';
import { fetchTrack, fetchTracks, uploadTrack, deleteTrack } from '../../actions/track_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { fetchUser } from '../../actions/user_actions';

import TrackIndexItem from './track_index';


const mSTP = (state) => {
  let currentUser;
  let userLikesTrack = false;

  if (state.session.id) {  // if there is a current session

    currentUser = state.entities.users[state.session.id];
    if (currentUser.likes) {

      if (currentUser.likes[ownProps.trackId]) {
        userLikesTrack = true;
        currentLikeId = currentUser.likes[ownProps.trackId].id
      } else {
        userLikesTrack = false;
      }
    }
  }
  return {
    tracks: Object.values(state.entities.tracks),
    trackId: ownProps.match.params.trackId,
    track: state.entities.tracks[ownProps.trackId],
    currentUser,
    userLikesTrack
  }
}

// const mDTP = dispatch => ({
//     // fetchTracks: () => dispatch(fetchTracks()),
//     // fetchUser: () => dispatch(fetchUser(userId)),
//     // fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
//     // deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
//     // uploadTrack: (track) => dispatch(uploadTrack(track)),
//     // createLike: (like, trackId) => dispatch(createLike(like)),
//     // deleteLike: (likeId, track) => dispatch(deleteLike(likeId, track))
// })



export default connect(mSTP)(TrackIndexItem)