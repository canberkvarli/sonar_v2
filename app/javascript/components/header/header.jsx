import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FaGithubSquare } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa"
import SearchContainer from '../search/search_container'

class Header extends React.Component {

    constructor(props) {
        super(props)
        // this.openModalSignUp = this.openModalSignUp.bind(this);
        // this.openModalSignIn = this.openModalSignIn.bind(this);
    }


    handleClickTab(e) {
        const currEle = e.currentTarget;
        currEle.classList.add('selected');

    }



    handleLogout() {
        let origin = window.location.origin
        this.props.logout().then(() => {

            window.location.href = origin
        })
    }

    render() {

        const { signup, login, logout, currentUser, disabled } = this.props
        const search = <FontAwesomeIcon icon={faSearch} />
        const github = <FontAwesomeIcon icon={["fab", "github"]} />


        // Not Logged In
        const sessionLinks = () => (

            <div className="session-links">

                <nav className="nav-header">
                    <Link to="/" id="header-link">
                        <img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAsCAQAAAAwC3WkAAACUklEQVR4Ae2YA4wdURSGv+fattu4MWrbtu24bqOacWrbjNHYrm3bOF3vSXrzOpM7d3c22e8k31P03//ME0WdCM6QsvSlNS1pQGV+8JxnPOEKlyM3CD9SVjbJFzFzV1ZKJcKMVJBrkp6PslaqEFZku3jhmXQjPEhjuZkxjQHkgXjjj2yQBOFAFolksAhA/HBM4lgQJShKK/thMPskFoYASWV/DGeTTQCLXdeQUPbLHOlWcA0Mo0nGDAs0AOyQigUVoEyuVRt2KwRQm+UFFSClrNqwbAAmS0UnAdKedFlluwagNDPdNaBPOmW0fQMw3V2AcspJZRXAugGoIy1cBSihnFLWz9s3AB3wTdx3AHcNwABJ0I3m1EB4wm0ucCbyKIgAJZXdXQPQJWNyaZYxPdgiu1geeeJlhdS7jdUKBUuMyVyTvh4DMJwmGTPcwQrZUJZTMtdbgEq5Vm2oABYrZEeUTdLXS4ByyrqNkspJZWMzjiLsl1rGF/RJU1a5mrJ9A/aUZaU52QiaZMyIfxqoqFyI14BigtQxBagNkGHdgApQyO9Cmhj9TAGqA2QYc4AAPwfs6ZU+QNhXCBqbAtQAyHD4Vwhqhb8By2+johxR/q38y2x+KrviiSnAc4AcfwzIrrhtCvAMIMvhD3Dhfw18CMhu+M2Zor1CuyKPTAEeA2Q47A18ZDmYAhziVsYcCnkDfxgdeYKBeOQ2TQFC3cAfFkTOevkcCKqBpwEvz4DIVvAS4E1A3ktQ/GY7LSJn/f91bnc/KavlidjwUa7LRZkldSimGLf8BYloKYNdaWi1AAAAAElFTkSuQmCC" alt="" />
                        <span id="sonar">S O N A R</span>
                    </Link>

                    <Link to="https://github.com/canberkvarli">
                        <span className="icon-github"> <FaGithubSquare /></span>
                    </Link>
                    <Link
                        to="/login"
                        type="button"
                        className="nav-button"
                        id="sign-in-button"
                    >Sign in

                    </Link>

                    <br />
                    <Link
                        className="nav-button"
                        id="sign-up-button"
                        to="/signup"
                    >
                        Create account</Link>

                    <br />
                    <label htmlFor="For Creators" id="nav-label-creator">For Creators</label>
                </nav>
                <div className="outer-div">
                    <div className="homepage-image">
                        <span id="outer-onimage-label">What's next in music is first on Sonar</span>
                        <br />
                        <span id="inner-onimage-label">Upload your first track and begin your journey. Sonar gives you space to create, find your fans, and connect with other artists.</span>
                        <Link
                            to="/signup"
                            className="nav-button"
                            id="start-uploading-button"
                        >
                            Start uploading today</Link>
                    </div>
                </div>
                <div className="search-div">
                    <SearchContainer />
                </div>
                <span id="or">or</span>
                <Link
                    to="/signup"
                    className="nav-button"
                    id="upload-your-own-button"
                >
                    Upload your own</Link>
                <span id="intro">Hear what’s trending for free in the Sonar community</span>
            </div>
        )

        // If Logged In
        const personalSpace = () => (
            <div className="personal-space">
                <nav className="personal-nav-header">
                    <div className="left-nav-header">
                        <Link to="/" id="header-link">
                            <img id="personal-logo" src="https://logos-world.net/wp-content/uploads/2020/10/SoundCloud-Emblem.png" alt="" />
                            <div className="selected" id="home">Home</div>
                        </Link>
                        <br />
                        <Link
                            to="/library"
                            className="nav-header-label"
                            id="nav-header-stream"
                            onFocus={this.handleClickLibrary}
                        >
                            <span className="selected" id="selected">Library</span>
                        </Link>
                    </div>
                    <br />
                    <Link
                        to="/upload"
                        className="nav-header-label"
                        id="nav-header-upload"
                        onFocus={this.handleClickTab}
                    >
                        <span className="selected" id="selected">Upload</span>
                    </Link>
                    <br />
                    <a href="https://github.com/canberkvarli" target="_blank">
                        <span id="icon-github-personal"> <FaGithub /></span>
                    </a>

                    <div className="middle-nav-header">
                        <SearchContainer />
                    </div>
                    <div className="right-nav-header">
                        {/* <Link className="link-profile" to={`users/${this.props.currentUserId}`}>{this.props.currentUser.username}</Link> */}
                        <span className="link-profile">{this.props.currentUser.username}</span>

                        <a htmlFor="Logout"
                            className="header-nav-setting"
                            onClick={() => this.handleLogout()}>
                            <span className="selected" id="selected">Log out</span>
                        </a>
                    </div>
                </nav>
            </div>
        )

        return currentUser ? personalSpace() : sessionLinks()
    }
}

export default Header;