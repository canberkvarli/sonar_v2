import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import configureStore from "../store/store"
import { fetchTracks } from '../actions/track_actions'

import App from "./App";

document.addEventListener("turbo:load", () => {
    let store;
    const root = createRoot(
        document.body.appendChild(document.createElement("div"))
    );

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    //TESTING
    window.getState = store.getState;
    window.fetchTracks = fetchTracks;
    //TESTING
});