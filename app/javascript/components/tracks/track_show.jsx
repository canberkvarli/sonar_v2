import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import PlayButtonContainer from "../play_button/play_button_container";
import { WaveformContainer } from '../tracks/waveform_container';
import WaveSurfer from 'wavesurfer.js';
import { Oval } from "react-loader-spinner";
import { useSelector } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';

const TrackShow = (props) => {
    const { trackId, fetchTrack, track, userLikesTrack: initialUserLikesTrack, currentUser, receivePlayTrack, playTrack, playTrackOnShow, pauseTrack, pauseTrackOnShow, createLike, deleteLike, fetchUser, fetchComments, comments, createComment, deleteComment } = props;
    const [userLikesTrack, setUserLikesTrack] = useState(initialUserLikesTrack);
    const [loading, setLoading] = useState(false);
    const [isCurrentTrackPlaying, setIsCurrentTrackPlaying] = useState(false);
    const [commentBody, setCommentBody] = useState("");
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

    useEffect(() => {
        if (track) {
            fetchComments(trackId);
        }

    }, [track, fetchComments, fetchUser, trackId, comments]);

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

    const handleCreateComment = async (event) => {
        const currentUserId = currentUser.id;
        if (event.type === 'keypress' && event.key !== 'Enter') {
            return;
        }

        if (commentBody.trim() !== "") {
            await createComment({
                body: commentBody,
                commenter_id: currentUserId,
                track_id: trackId,
            });

            setCommentBody("");
        }
    };

    const handleDeleteComment = (commentId) => {
        const currentUserId = currentUser.id;

        const comment = comments[commentId];

        if (comment && comment.commenterId === currentUserId) {
            deleteComment(commentId, trackId).then(() => {
                fetchTrack(trackId);
            });
        }
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

    const dispNumComments = () => {
        if (!comments) return "No comments yet!";
        const numOfComments = Object.keys(comments).length;
        return numOfComments === 1 ? "1 comment" : `${numOfComments} comments`;
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
            <div className='commentInput-container'>
                <input
                    className='commentInput'
                    type="text"
                    placeholder="Write a comment"
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                    onKeyPress={handleCreateComment}
                />
                <button
                    className={`createComment-btn ${commentBody.trim() !== "" ? "enabled" : ""}`}
                    onClick={handleCreateComment}
                    disabled={commentBody.trim() === ""}>

                    <BsSend
                        style={{
                            marginLeft: "15px",
                            fontSize: "45px",
                            paddingLeft: "12px",
                            paddingBottom: "7px",
                        }}
                    />
                </button>
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
            <div className="commentList mb-5">
                <div className="commentList-header">
                    <FaMessage fontSize={"13px"} /><span className='ms-2'>{dispNumComments()}</span>
                </div>
                <ul>
                    {Object.values(comments).map((comment) => {
                        const { id, body, createdAt, commenterId, username } = comment;
                        const relativeTime = formatDistanceToNow(createdAt, { addSuffix: true });
                        const isCurrentUserOwner = currentUser && currentUser.id === commenterId;

                        return (
                            <div className='commentList-item-container' key={id}>
                                <li className="commentList-item p-4 ps-5 pt-3">
                                    <div className="commentItemInfo pe-2">
                                        <strong className='commentItemInfo-username pe-2'>{username}</strong>
                                        <small className='commentItemInfo-time'>{relativeTime}</small>
                                    </div>
                                    <div className='d-flex '>
                                        <p className='commentItemInfo-body pt-1'>{body}</p>
                                        {isCurrentUserOwner && (
                                            <div className='trash-bin' style={{ cursor: "pointer", marginLeft: "5px" }}>
                                                <MdDeleteOutline
                                                    style={{ fontSize: "23px" }}
                                                    onClick={() => handleDeleteComment(id)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </li>
                            </div>
                        );
                    })}

                </ul>
            </div>
        </>
    );
};

export default TrackShow;
