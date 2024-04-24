import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Splash from "../components/splash/splash";
import HeaderContainer from "./header/header_container";
import TrackIndexContainer from "../components/tracks/track_index_container";
import TrackShowContainer from "../components/tracks/track_show_container";
import TrackUploadContainer from "../components/tracks/track_upload_container";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import PlayheadContainer from "../components/playhead/playhead_container";
import LibraryContainer from "../components/library/library_container";
import ErrorBoundary from "./error_boundry";

export default () => {
    const loggedIn = useSelector((state) => Boolean(state.session.id));

    return (
        <Router>
            <ErrorBoundary>
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
                        element={loggedIn ? (
                            <>
                                <HeaderContainer />
                                <LibraryContainer />
                                <PlayheadContainer />
                            </>
                        ) : (
                            <Navigate to="/" />
                        )}
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

                    <Route
                        path="/upload"
                        element={
                            loggedIn ? (
                                <>
                                    <HeaderContainer />
                                    <TrackUploadContainer />
                                    <PlayheadContainer />
                                </>
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                    <Route path="/login" element={loggedIn ? <Navigate to="/" /> :
                        <>
                            <LoginFormContainer />
                            <PlayheadContainer />
                        </>
                    } />
                    <Route path="/signup" element={loggedIn ? <Navigate to="/" /> :
                        <>
                            <PlayheadContainer />
                            <SignupFormContainer />
                        </>

                    } />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </ErrorBoundary>
        </Router >
    );
};
