import { combineReducers } from "redux";

import EntitiesReducer from "./entities_reducer";
import ErrorsReducer from "./errors_reducer";
import ModalsReducer from "./modals_reducer";
import SessionReducer from "./session_reducer";
import PlayheadReducer from "./playhead_reducer";

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
  ui: ModalsReducer,
  playhead: PlayheadReducer,
});

export default RootReducer;
