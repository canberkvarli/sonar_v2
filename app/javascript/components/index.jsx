import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureAppStore from "../store/store";
import { fetchTracks } from "../actions/track_actions";

import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {};

    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser,
                },
            },
            session: {
                id: window.currentUser.id,
            },
        };
        delete window.currentUser;
    }

    const store = configureAppStore(preloadedState);

    store.dispatch(fetchTracks());

    const root = createRoot(
        document.body.appendChild(document.createElement("div"))
    );

    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});
