import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "../components/splash/splash"
import TrackIndexContainer from "../components/tracks/track_index_container"

export default (
    <>
        <Routes>
            <Route path="/" element={
                <>
                    <TrackIndexContainer />
                    <Splash />
                </>
            } />
        </Routes>
    </>
);