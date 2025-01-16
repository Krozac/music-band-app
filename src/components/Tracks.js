// Tracks.js
import React from 'react';
import Track from './Track';

function Tracks({ tracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} name={track.name} duration={track.duration} />
      ))}
    </div>
  );
}

export default Tracks;
