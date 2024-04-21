export const RECEIVE_PLAY_TRACK = "RECEIVE_PLAY_TRACK";
export const CLEAR_PLAYHEAD = "CLEAR_PLAYHEAD";
export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const SEEK_TRACK = "SEEK_TRACK";

export const receivePlayTrack = (track) => ({
  type: RECEIVE_PLAY_TRACK,
  track,
});

export const playTrack = () => ({
  type: PLAY_TRACK,
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK,
});

export const seekTrack = (progress) => ({
  type: SEEK_TRACK,
  progress,
});

export const clearPlayhead = () => ({
  type: CLEAR_PLAYHEAD,
});

export const setCurrentProgress = (progress) => (dispatch) =>
  dispatch(seekTrack(progress));
