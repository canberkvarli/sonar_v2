import {
  RECEIVE_TRACKS,
  REMOVE_TRACK,
  RECEIVE_TRACK,
} from "../actions/track_actions";

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_TRACKS:
      return Object.assign({}, oldState, action.tracks);
    case RECEIVE_TRACK:
      return Object.assign({}, oldState, { [action.track.id]: action.track });
    case REMOVE_TRACK:
      const nextState = Object.assign({}, oldState);
      delete nextState[action.trackId];
      return nextState;
    default:
      return oldState;
  }
};

export default tracksReducer;
