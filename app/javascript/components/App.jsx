import React from "react";
import Routes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderContainer from "./header/header_container"

export default props =>
    <>
        <Router>
            <HeaderContainer />
            {Routes}
        </Router>
    </>;