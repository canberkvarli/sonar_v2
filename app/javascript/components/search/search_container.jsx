import { connect } from "react-redux";
import Search from "./search";
import { fetchTracks } from "../../actions/track_actions";

const mSTP = (state, ownProps) => {

    return {
        location: ownProps.location,
        tracks: Object.values(state.entities.tracks)
    }
}

const mDTP = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks())
    }
}

export default connect(mSTP, mDTP)(Search);