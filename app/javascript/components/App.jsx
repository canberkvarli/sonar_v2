import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Splash from "../components/splash/splash";
import HeaderContainer from "./header/header_container";
import TrackIndexContainer from "../components/tracks/track_index_container";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
// import TrackUploadContainer from "../components/tracks/track_upload_container"


export default () => {
    const loggedIn = useSelector((state) => Boolean(state.session.id));

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <LoginFormContainer />} />
                <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <SignupFormContainer />} />
                {/* <ProtectedRoute path="/upload" element={<TrackUploadContainer />} loggedIn={loggedIn} /> */}
            </Routes>
        </Router>
    );
};

const HomePage = () => {
    return (
        <>
            <HeaderContainer />
            <TrackIndexContainer />
            <Splash />
        </>
    );
};

// const ProtectedRoute = ({ element, loggedIn, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             element={loggedIn ? element : <Navigate to="/login" />}
//         />
//     );
// };