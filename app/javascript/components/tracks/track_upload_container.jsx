
import { connect } from 'react-redux';
import { uploadTrack } from '../../actions/track_actions';
import TrackUpload from './track_upload';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        track: {
            artistId: state.session.id,
            trackId: ownProps.match.params.trackId,
            title: '',
            description: '',
            imageFile: null,
            imageUrl: null,
            audioFile: null,
            audioUrl: null
        },
        tracks: Object.values(state.entities.tracks)
    }
}

const mDTP = dispatch => {
    return {
        uploadTrack: (data) => dispatch(uploadTrack(data)),
    }
}

export default connect(mSTP, mDTP)(TrackUpload)