import React from 'react';

import PlayButtonContainer from '../play_button/play_button_container';
import Splash from '../splash/splash';
import TrackIndexItem from './track_index_item';


class TrackIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tracks: this.props.tracks,
            displayPlayhead: false
        }

    }

    componentDidMount() {
        this.props.fetchTracks();
        this.props.currentUser ? this.props.fetchUser(this.props.userId) : null;
    }

    componentWillUnmount() {
        this.props.currentTime ? this.props.setCurrentProgress(this.props.currentTime) : null
    }



    render() {
        const { tracks } = this.props;
        if (this.props.currentUser) {
            return (
                <div className="track-index-container" >
                    <ul className="track-index">
                        {tracks.map((track, idx) => (
                            <li key={idx} className="track-obj">
                                <TrackIndexItem track={track} />
                                <div className="play-btn">
                                    <PlayButtonContainer trackId={track.id} track={track} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (
                <>
                    <div className="track-index-container" >
                        <ul className="track-index">
                            {tracks.map((track, idx) => (
                                <li key={idx} className="track-obj">
                                    <TrackIndexItem track={track} />
                                    <div className="play-btn">
                                        <PlayButtonContainer trackId={track.id} track={track} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className='splash-main-container'>
                        <Splash />
                    </div> */}
                </>
            )
        }

    }
}


export default TrackIndex;