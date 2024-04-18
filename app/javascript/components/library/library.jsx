import React, { useEffect } from 'react';
import PlayButtonContainer from '../play_button/play_button_container';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Library = (props) => {
  const navigate = useNavigate();

  const { tracks, currentUser, fetchTracks, fetchUser } = props;

  useEffect(() => {
    fetchTracks();
    fetchUser(currentUser.id);
  }, [currentUser.id, fetchTracks, fetchUser]);

  if (currentUser.likes === undefined) {
    return (
      <div className="outside-wrapper">
        <h1 id="library-username">Hey {currentUser.username}! You don't have any favorite tracks. Start by liking some!</h1>
      </div>
    );
  } else if (tracks === undefined) {
    return null; // Returning null to handle undefined tracks case
  } else if (Object.keys(tracks).length === 0) {
    return null; // Handle case when there are no tracks
  } else {
    return (
      <div className="wrapper">
        <hr className='container-line' />
        <div className="grid-header">
          <br />
        </div>
        <h1 className='container-title'>Liked Tracks</h1>
        <ul className='likes-container'>
          {Object.values(tracks).map((track, i) => (
            Object.keys(currentUser.likes).map((key, j) => {
              const trackId = parseInt(key);
              if ((track.id === trackId)) {
                return (
                  <div key={i} className="likes-box">
                    <Link to={`/tracks/${track.id}`}>
                      <img id="track-show-image" src={track.photoUrl} alt={track.title} />
                    </Link>
                    <div className='lib-play-btn'>
                      <PlayButtonContainer trackId={track.id} track={track} />
                    </div>
                    <Link to={`/tracks/${track.id}`}>
                      <span id="track-show-title">{track.title}</span>
                    </Link>
                  </div>
                );
              }
              return null;
            })
          ))}
        </ul>
      </div>
    );
  }
};

export default Library;
