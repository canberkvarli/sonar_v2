import { Link } from "react-router-dom";
import React from 'react';
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";


const mSTP = ({ errors }) => ({
    errors: errors.session,
    navLink: <Link to="/signup">Create a new account</Link>,
    formType: 'Log In'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    login: user => dispatch(login(user))
})


export default connect(mSTP, mDTP)(SessionForm);