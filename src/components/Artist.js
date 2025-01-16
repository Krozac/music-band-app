import React, { useEffect, useState } from 'react';
import LastFmApi from '../datas/lastfmApi';

const Artist = ({ artistName }) => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const data = await LastFmApi.fetchArtistInfo(artistName);
        setArtist(data.artist);
      } catch (error) {
        console.error('Error fetching artist info:', error);
      }
    };

    fetchArtist();
  }, [artistName]);

  if (!artist) {
    return <div>Loading...</div>;
  }
console.log(artist);
  return (
    <div>
      <h2>{artist.name}</h2>
      <p>{artist.bio.content}</p>
      {/* Render more artist details as needed */}
    </div>
  );
};

export default Artist;
