import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "../components/splash/splash"
import TrackIndexContainer from "../components/tracks/track_index_container"
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import AuthRoute from "../util/route_util";


export default (
    <>
        <Routes>
            <Route path="/" element={
                <>
                    <TrackIndexContainer />
                    <Splash />
                </>
            } />
            <AuthRoute path="/login" element={<LoginFormContainer />} />
            <AuthRoute path="/signup" element={<SignupFormContainer />} />
        </Routes>
    </>
);