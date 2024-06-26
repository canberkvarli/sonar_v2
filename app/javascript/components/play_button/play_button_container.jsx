import { connect } from "react-redux";
import PlayButton from "./play_button";
import { fetchTrack } from "../../actions/track_actions";
import { receivePlayTrack, playTrack, pauseTrack } from "../../actions/playhead_actions";

const mSTP = (state) => ({
    currentTrack: state.playhead.currentTrack,
    isPlaying: state.playhead.isPlaying
});

const mDTP = dispatch => ({
    receivePlayTrack: track => dispatch(receivePlayTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    fetchTrack: () => dispatch(fetchTrack()),
});

export default connect(mSTP, mDTP)(PlayButton);