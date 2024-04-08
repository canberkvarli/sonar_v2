import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchTrack, fetchTracks, uploadTrack, deleteTrack } from '../../actions/track_actions';
import TrackIndex from './track_index';


const mSTP = (state, ownProps) => ({
    tracks: Object.values(state.entities.tracks),
    currentTime: state.playhead.currentTime,
    track: state.entities.tracks[ownProps.trackId],
    trackId: ownProps.match?.params.trackId,
    userId: ownProps.match?.params.userId,
    currentUser: state.entities.users[state.session.id]


})

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUser: () => dispatch(fetchUser()),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    uploadTrack: (track) => dispatch(uploadTrack(track)),
})



export default connect(mSTP, mDTP)(TrackIndex)