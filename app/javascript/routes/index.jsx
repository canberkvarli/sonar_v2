import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "../components/splash/splash"

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Splash />} />
        </Routes>
    </Router>
);