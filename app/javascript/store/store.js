import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "../reducers/root_reducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
