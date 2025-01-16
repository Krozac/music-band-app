// Album.js
import React, { useEffect, useState } from 'react';
import LastFmApi from '../datas/lastfmApi';
import Tracks from './Tracks';
import { TrackList } from '../datas/tracks';  // Assurez-vous que la tracklist combinée est importée

function Album({ artistName, id, albumName, cover, date, description }) {
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupérer la tracklist de l'album actuel
  const albumTracks = TrackList.filter(track => track.albumId === id);

  useEffect(() => {
    async function fetchAlbum() {
      try {
        setLoading(true);
        const data = await LastFmApi.fetchAlbum(artistName, albumName);
        setAlbum(data.album);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAlbum();
  }, [artistName, albumName]);

  if (loading) {
    return <div>Loading album information...</div>;
  }

  if (error) {
    return <div>Error fetching album information: {error.message}</div>;
  }

  if (!album) {
    return <div>No album information found.</div>;
  }

  return (
    <div>
      <h2>{albumName}</h2>
      <img src={cover} alt={`${albumName} cover`} />
      <p>{description}</p>
      <p>Release Date: {date}</p>

      <h3>Tracklist</h3>
      <Tracks tracks={albumTracks} />
    </div>
  );
}

export default Album;
