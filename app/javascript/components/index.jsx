import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store/store"
import { fetchTracks } from '../actions/track_actions'
import { fetchUsers } from '../actions/user_actions'

import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
    const root = createRoot(
        document.body.appendChild(document.createElement("div"))
    );

    // if (window.currentUser) {
    //     const preloadedState = {
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         },
    //         session: { id: window.currentUser.id }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // }

    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    //TESTING
    window.fetchTracks = store.dispatch(fetchTracks());
    window.fetchUsers = store.dispatch(fetchUsers());
    window.getState = store.getState;
    //TESTING

});