import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Splash from "../components/splash/splash";
import HeaderContainer from "./header/header_container";
import TrackIndexContainer from "../components/tracks/track_index_container";
import TrackShowContainer from "../components/tracks/track_show_container";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import PlayheadContainer from "../components/playhead/playhead_container";
import LibraryContainer from "../components/library/library_container";

export default () => {
    const loggedIn = useSelector((state) => Boolean(state.session.id));

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <HeaderContainer />
                            <TrackIndexContainer />
                            {loggedIn ? null : <Splash />}
                            <PlayheadContainer />
                        </>
                    }
                />
                <Route
                    path="/library"
                    element={
                        <>
                            <HeaderContainer />
                            <LibraryContainer />
                        </>
                    }
                />
                <Route
                    path="/tracks/:trackId"
                    element={
                        <>
                            <HeaderContainer />
                            <TrackShowContainer />
                            <PlayheadContainer />
                        </>
                    }
                />
                <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <LoginFormContainer />} />
                <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <SignupFormContainer />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};
