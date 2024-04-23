import { connect } from "react-redux";
import Playhead from "./playhead";
import { receivePlayTrack, clearPlayhead, playTrack, pauseTrack } from "../../actions/playhead_actions";
import { playTrackOnShow, pauseTrackOnShow } from "../../actions/track_actions";

const mSTP = state => ({
    track: state.playhead.currentTrack,
    isTrackPlayingOnShow: state.entities.tracks.isTrackShowPlaying,
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    clearPlayhead: () => dispatch(clearPlayhead()),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    playTrackOnShow: () => dispatch(playTrackOnShow()),
    pauseTrackOnShow: () => dispatch(pauseTrackOnShow()),
});

export default connect(mSTP, mDTP)(Playhead);