import { combineReducers } from "redux";

import ModalsReducer from "./modals_reducer";

const UiReducer = combineReducers({
  ui: ModalsReducer,
});

export default UiReducer;
