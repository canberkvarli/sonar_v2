import { connect } from "react-redux";
import Playhead from "./playhead";
import { receivePlayTrack, clearPlayhead, playTrack, pauseTrack } from "../../actions/playhead_actions";

const mSTP = state => ({
    track: state.playhead.currentTrack
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    clearPlayhead: () => dispatch(clearPlayhead()),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(Playhead);