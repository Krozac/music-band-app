// Track.js
import React from 'react';

function Track({ name, duration }) {
  return (
    <div>
      <p><strong>{name}</strong> - {duration}</p>
    </div>
  );
}

export default Track;
