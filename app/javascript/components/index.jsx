import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import configureStore from "../store/store"
import App from "./App";

document.addEventListener("turbo:load", () => {
    const store = configureStore();
    const root = createRoot(
        document.body.appendChild(document.createElement("div"))
    );
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});