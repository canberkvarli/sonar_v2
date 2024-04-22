import {
  RECEIVE_TRACKS,
  REMOVE_TRACK,
  RECEIVE_TRACK,
  PLAY_TRACK_ON_SHOW,
  PAUSE_TRACK_ON_SHOW,
} from "../actions/track_actions";

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_TRACKS:
      return Object.assign({}, oldState, action.tracks);
    case RECEIVE_TRACK:
      return Object.assign({}, oldState, { [action.track.id]: action.track });
    case REMOVE_TRACK:
      delete nextState[action.trackId];
      return nextState;
    case PLAY_TRACK_ON_SHOW:
      nextState["isTrackShowPlaying"] = true;
      return nextState;
    case PAUSE_TRACK_ON_SHOW:
      nextState["isTrackShowPlaying"] = false;
    default:
      return oldState;
  }
};

export default tracksReducer;
