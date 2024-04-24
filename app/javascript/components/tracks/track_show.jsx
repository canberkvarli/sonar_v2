import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import PlayButtonContainer from "../play_button/play_button_container";
import { WaveformContainer } from '../tracks/waveform_container';
import WaveSurfer from 'wavesurfer.js';
import { Oval } from "react-loader-spinner";
import { useSelector } from 'react-redux';

const TrackShow = (props) => {
    const { trackId, fetchTrack, track, userLikesTrack: initialUserLikesTrack, currentUser, receivePlayTrack, playTrack, playTrackOnShow, pauseTrack, pauseTrackOnShow, createLike, deleteLike, fetchUser, fetchComments } = props;
    const [userLikesTrack, setUserLikesTrack] = useState(initialUserLikesTrack);
    const [loading, setLoading] = useState(false);
    const [isCurrentTrackPlaying, setIsCurrentTrackPlaying] = useState(false);
    const waveformRef = useRef(null);

    useEffect(() => {
        // Clean up the existing WaveSurfer instance if it exists
        if (waveformRef.current) {
            waveformRef.current.destroy();
            waveformRef.current = null;
        }

        // Initialize WaveSurfer only if track is available
        if (track) {
            initializeWaveSurfer();
        }

        // Clean up when the component unmounts
        return () => {
            if (waveformRef.current) {
                waveformRef.current.destroy();
            }
        };
    }, [track]);

    const isPlaying = useSelector(state => state.playhead.isPlaying);
    const isTrackPlayingOnShow = useSelector(
        (state) => state.playhead.isTrackPlayingOnShow
    );
    useEffect(() => {
        if (isPlaying) {
            handlePlay();
        } else {
            handlePause();
        }
    }, [isPlaying, isTrackPlayingOnShow]);

    const initializeWaveSurfer = () => {
        if (!waveformRef.current) {
            waveformRef.current = WaveSurfer.create({
                barWidth: 2,
                cursorWidth: 0,
                container: '#waveform',
                backend: 'WebAudio',
                height: 200,
                showCursor: false,
                cursorColor: "black",
                progressColor: '#ff5500',
                responsive: true,
                waveColor: "lightgray",
                partialRender: true,
                pixelRatio: 1,
                forceDecode: true,
                normalize: true,
                interact: false,
            });

            waveformRef.current.load(track.audioUrl);

            waveformRef.current.on("loading", () => {
                setLoading(true);
            });

            waveformRef.current.on("ready", () => {
                setLoading(false);
                setIsCurrentTrackPlaying(true);
                receivePlayTrack(track);
                playTrack();
                waveformRef.current.play();
                waveformRef.current.setMuted({ muted: true });
                playTrackOnShow();
            });
        }
    };

    const handlePlay = () => {
        setIsCurrentTrackPlaying(true);
        waveformRef.current.play();
        playTrack();
        playTrackOnShow();
    };

    const handlePause = () => {
        setIsCurrentTrackPlaying(false);
        waveformRef.current.pause();
        pauseTrack();
        pauseTrackOnShow();
    };

    const handlePlayPause = () => {
        if (isCurrentTrackPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    const handleCreateLike = () => {
        const trackId = props.trackId;
        const currentUserId = currentUser.id;

        createLike({ liker_id: currentUserId, track_id: trackId })
            .then(() => {
                fetchUser(currentUserId);
                fetchTrack(trackId);
            });

        setUserLikesTrack(true);
    };

    const handleDeleteLike = () => {
        const { currentLikeId } = props;

        deleteLike(currentLikeId, track.id)
            .then(() => {
                fetchUser(currentUser.id);
                fetchTrack(track.id);
            });

        setUserLikesTrack(false);
    };

    const toggleLike = () => {
        if (!props.currentUser) {
            return (
                <Link to="/login">
                    <span className="icon-heart">
                        <FaHeart />
                    </span>
                    <span id="liked-button-text">Like</span>
                </Link>
            );
        } else if (userLikesTrack) {
            return (
                <button
                    onClick={handleDeleteLike}
                    className='liked'
                >
                    <span className="icon-heart">
                        <FaHeart /> <span id="liked-button-text">Liked</span>
                    </span>
                </button>
            );
        } else {
            return (
                <button
                    className="not-liked"
                    onClick={handleCreateLike}
                >
                    <span className="icon-heart">
                        <FaHeart /> <span id="liked-button-text">Like</span>
                    </span>
                </button>
            );
        }
    };

    const dispNumLikes = () => {
        if (!track) return 'Like';
        return track.likes ? Object.keys(track.likes).length : 'Like';
    };

    if (!track) {
        return null;
    }

    return (
        <>
            <div className="track-banner">
                <div className="track-banner-left" onClick={handlePlayPause}>
                    <PlayButtonContainer
                        trackId={trackId}
                        track={track}
                        isCurrentTrackPlaying={isCurrentTrackPlaying}
                    />
                    <div className="track-banner-labels">
                        <h2 className="track-banner-title">{track.title}</h2>
                    </div>
                </div>
                <div className="track-banner-right">
                    <div className='track-banner-middle'>
                        <div className="waveform-outer-div">
                            <WaveformContainer className="waveform-div">
                                <div id="waveform" />

                                <audio id="track" src={track.audioUrl} />
                                <div className='loader'>
                                    {loading ? <Oval arialLabel="loading-indicator" color="whitesmoke" type='Oval' width="750" height="120" /> : null}
                                </div>
                            </WaveformContainer>
                        </div>
                    </div>
                    <div className="track-banner-right-labels">
                        {/* Time ago label */}
                    </div>
                    <img className="track-show-cover-img" src={track.photoUrl} alt="Track Cover" />
                </div>
            </div>
            <h1 className="description">{track.description}</h1>
            <div className='interact-buttons-container'>
                <div className="track-interact-buttons">
                    <div id="track-like-button">
                        {toggleLike()}
                    </div>
                </div>
                <hr className='container-line' />
            </div>
        </>
    );
};

export default TrackShow;
