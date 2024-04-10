import React from "react";
import Splash from "../components/splash/splash"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContainer from "./header/header_container"
import TrackIndexContainer from "../components/tracks/track_index_container"
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
// import { AuthRoute } from "../util/route_util";


export default props =>
    <>
        <Router>
            <HeaderContainer />
            <Routes>
                <Route path="/" element={
                    <>
                        <TrackIndexContainer />
                        <Splash />
                    </>
                } />
                {/* <AuthRoute path="/login" element={<LoginFormContainer />} />
                <AuthRoute path="/signup" element={<SignupFormContainer />} /> */}
            </Routes>
        </Router>
    </>;