import React from "react";
import { Provider } from 'react-redux';
import store from '../store/store'
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {
    const root = createRoot(
        document.body.appendChild(document.createElement("div"))
    ); 
    root.render(<App />);
});