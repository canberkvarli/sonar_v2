import * as APITrackUtil from "../util/track_api_util";

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_MAIN_TRACK = "RECEIVE_MAIN_TRACK";
export const UPLOAD_TRACK = "UPLOAD_TRACK";
export const PLAY_TRACK_ON_SHOW = "PLAY_TRACK_ON_SHOW";
export const PAUSE_TRACK_ON_SHOW = "PAUSE_TRACK_ON_SHOW";

// regular actions

const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track,
});

const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks,
});

const removeTrack = (trackId) => ({
  type: REMOVE_TRACK,
  trackId,
});

export const receiveMainTrack = (track) => ({
  type: RECEIVE_MAIN_TRACK,
  track,
});

export const playTrackOnShow = () => ({
  type: PLAY_TRACK_ON_SHOW,
});

export const pauseTrackOnShow = () => ({
  type: PAUSE_TRACK_ON_SHOW,
});

//thunk actions

export const fetchTrack = (trackId) => (dispatch) =>
  APITrackUtil.fetchTrack(trackId).then((track) =>
    dispatch(receiveTrack(track))
  );

export const fetchTracks = () => (dispatch) =>
  APITrackUtil.fetchTracks().then((tracks) => dispatch(receiveTracks(tracks)));

export const deleteTrack = (trackId) => (dispatch) =>
  APITrackUtil.deleteTrack(trackId).then(() => dispatch(removeTrack(trackId)));

export const uploadTrack = (track) => (dispatch) =>
  APITrackUtil.uploadTrack(track).then((track) =>
    dispatch(receiveTrack(track))
  );

export const setMainTrack = (track) => (dispatch) =>
  dispatch(receiveMainTrack(track));
