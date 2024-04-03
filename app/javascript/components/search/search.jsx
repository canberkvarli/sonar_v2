import React from "react";
import { Link, Redirect } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: props.tracks,
            showMenu: false,
            enterClickRedirect: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        // this.props.fetchtracks();
        this.setState({
            filtered: this.props.tracks,
        });
    }


    handleChange(e) {
        let currList = [];
        let newList = [];

        if (e.target.value !== "") {
            currList = this.props.tracks;
            newList = currList.filter((track) => {
                let lowerCaseTrack;
                // ensure of an object
                typeof track == "object"
                    // lower case mandatory
                    ? (lowerCaseTrack = track.title.toLowerCase())
                    : (lowerCaseTrack = track.toLowerCase());
                let filter = e.target.value.toLowerCase();

                return lowerCaseTrack.includes(filter);
            });
        } else {
            newList = this.props.tracks;
        }
        this.setState({
            filtered: newList,
        });
    }

    showMenu(e) {
        e.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu) {
            return null;
        }
        if (
            event.target == "search-res-link" ||
            !this.dropdownMenu.contains(event.target)
        ) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener("click", this.closeMenu);
            });
        }
    }

    handleEnterClick = (e) => {
        const { filtered } = this.state;
        if (e.key === "Enter") {
            if (filtered.length > 0) {
                this.setState({ enterClickRedirect: true });
            }
        }
    };

    render() {
        const { filtered, enterClickRedirect } = this.state;
        return (

            <
                // className={this.props.location == 'header' ? '' : 'splash-search'}
                >
                {(() => {
                    if (enterClickRedirect) {
                        if (typeof filtered[0] == "object") {
                            return (
                                <Redirect
                                    to={{
                                        pathname: `/tracks/${filtered[0].id}`,
                                    }}
                                />
                            )
                        }
                    } else {
                        return null;
                    }
                })()}

                <input
                    ref={(element) => {
                        this.dropdownMenu = element;
                    }}
                    type="text"
                    className={this.props.location == 'header' ? 'headerSearch__input' : 'splash-search-bar'}
                    onChange={this.handleChange}
                    onFocus={this.showMenu}
                    placeholder={this.props.location == 'header' ? 'Search' : 'Search for tracks'}
                    onKeyPress={this.handleEnterClick}
                />
                {this.state.showMenu ? (
                    <ul id="search-res" className="search-results-ul">
                        {this.state.filtered.map((track, i) => {
                            return (
                                <li key={i} className="search-results-li">
                                    <Link
                                        key={i}
                                        className="search-res-link"
                                        to={{
                                            pathname: `/tracks/${track.id}`,
                                        }}
                                    >
                                        {track.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                ) : null}
            </>

        );
    }
}
export default Search;