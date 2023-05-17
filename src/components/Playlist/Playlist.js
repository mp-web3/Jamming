import React from 'react';
import './Playlist.css';
import TrackList from '../SearchResults/TrackList';
import Button from '../Button';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <div className='PlaylistNameButton-container'>
        <input value={playlistName} onChange={handleNameChange} />
        <Button 
        className="Playlist-save" 
        onClick={onSave}
        text='Save to Spotify'
        />
      </div>
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
    </div>
  );
}

export default Playlist;
