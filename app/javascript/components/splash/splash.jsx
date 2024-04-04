import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <>
            <div className='splash-container'>
                <div className='splash-text-container'>
                    <span className='splash-text' id='splash-text-big'>
                        Calling all creators
                    </span>
                    <h1 className='splash-text' id="splash-text-small">
                        Get on Sonar to connect with fans, share your sounds, and grow your audience. What are you waiting for?
                    </h1>
                    <div className='splash-button-container'>
                        <Link
                            to="/signup"
                            className='splash-button'>
                            Find out more
                        </Link>
                    </div>
                </div>
            </div>

            <div className='signupModule'>
                <div className="signupModule-title">
                    Thanks for listening. Now join in.
                </div>
                <p className="signupModule-text">
                    Save tracks, checkout new stuff and grow together. All for free.
                </p>
                <Link to="/signup"
                    className='signupModule-button'>
                    Create account
                </Link>
                <p className='signupModule-signin'>
                    Already have an account?
                    <Link
                        to="/login"
                        className='signupModule-signin-button'>
                        Sign in</Link>
                </p>
            </div>
        </>
    )
}

export default Splash
