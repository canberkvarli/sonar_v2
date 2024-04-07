import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store/store"

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

});