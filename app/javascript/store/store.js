import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "../reducers/root_reducer";
import logger from "redux-logger";

const configureAppStore = (preloadedState = {}) => {
  return configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
  });
};

export default configureAppStore;
