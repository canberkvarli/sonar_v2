import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

const Playhead = ({
    track,
    receivePlayTrack,
    clearPlayhead,
    playTrack,
    pauseTrack,
    isTrackPlayingOnShow,
    playTrackOnShow,
    pauseTrackOnShow,
}) => {
    const [time, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [interval, setInterval] = useState(null);

    const currentTrack = document.getElementById("current-song");

    useEffect(() => {
        track ? receivePlayTrack(track) : null;

        return clearPlayhead;
    }, [track]);

    useEffect(() => {
        return () => clearInterval(interval)
    })

    useEffect(() => {
        // If isTrackPlayingOnShow is true, play the current track
        if (isTrackPlayingOnShow) {
            playCurrentTrack();
        } else {
            // If isTrackPlayingOnShow is false, pause the current track
            pauseCurrentTrack();
        }
    }, [isTrackPlayingOnShow]);

    const playCurrentTrack = () => {
        currentTrack?.play();
        playTrack();
        playTrackOnShow();
    };

    const pauseCurrentTrack = () => {
        currentTrack?.pause();
        pauseTrack();
        pauseTrackOnShow();
    };

    const replayTrack = () => {
        currentTrack.currentTime = 0;
        currentTrack.play();
        pauseCurrentTrack();
    }

    const updateProgressBar = () => {
        const progressBar = document.getElementById("progress-bar");
        progressBar.value = currentTrack.currentTime;
        //Tells the state and play button that song is done playing
        Math.floor(time) === Math.floor(currentTrack.duration) ? pauseTrack() : null;
    }

    const updateTimer = () => {
        const intervalId = setInterval(() => {
            setCurrentTime(currentTrack.currentTime)
        }, 1000);
        setInterval(intervalId)
    }

    const formatTime = time => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            return `${minutes}:0${seconds}`
        } else {
            return `${minutes}:${seconds}`
        };
    }

    const formatDuration = duration => {
        if (Math.floor(duration % 60) < 10) {
            return `${Math.floor(duration / 60)}:0${Math.floor(duration) % 60}`
        } else {
            return `${Math.floor(duration / 60)}:${Math.floor(duration) % 60}`
        }
    }

    const togglePlay = () => {
        if (currentTrack) {
            if (currentTrack.paused) {
                return <FontAwesomeIcon id="toggle-play-btn" icon={faPlay} onClick={playCurrentTrack} />
            } else {
                return <FontAwesomeIcon id="toggle-play-btn" icon={faPause} onClick={pauseCurrentTrack} />
            }
        }
    }

    return track ? (
        <div className="playhead-bar-container">
            <div className="playhead-container">
                <audio
                    className="playhead"
                    onLoadedData={() => {
                        setDuration(currentTrack.duration);
                        setCurrentTime(currentTrack.currentTime);
                    }}
                    onTimeUpdate={() => {
                        updateProgressBar();
                        updateTimer();
                    }}
                    autoPlay
                    controlsList="nodownload"
                    id="current-song"
                    src={track.audioUrl}
                />

                {togglePlay()}
                <FontAwesomeIcon id="replay-btn" icon={faRedoAlt} onClick={replayTrack} />

                <div id="track-timer">
                    {formatTime(Math.floor(time))}
                </div>

                <div className="progress-bar-div">
                    <input type="range"
                        id="progress-bar"
                        min="0"
                        max={Math.ceil(duration)}
                        onChange={e => {
                            setCurrentTime(e.target.value)
                            currentTrack.currentTime = e.target.value
                        }}
                    />
                </div>

                <div id="track-duration">
                    {formatDuration(duration)}
                </div>

                <div className="playing-track-details">
                    <img className="playing-track-art" src={track.photoUrl} />
                    <div className="playing-track-labels">
                        {<Link className="current-track-title" to={`/tracks/${track.id}`}>{track.title}</Link>}
                        {/* {<Link className="current-track-uploader" to={`/users/${track.uploader.id}`}>{track.uploader.username}</Link>} */}
                    </div>
                </div>

            </div>
        </div>
    ) : null
}

export default Playhead;