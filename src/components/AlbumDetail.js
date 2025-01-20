import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumList } from '../datas/albums';
import { TrackList } from '../datas/tracks';  // Si tu utilises une tracklist globale

import Tracks from './Tracks';  // Pour afficher la liste des pistes
import '../styles/AlbumDetail.css';  // Style si nécessaire

function AlbumDetail() {
  const { id } = useParams();  // Récupère l'ID de l'album depuis l'URL
  const album = AlbumList.find((album) => album.id === id); // Recherche l'album correspondant

  useEffect(() => {
    if (album) {
      // Change le fond du body à la couverture de l'album
      document.body.style.backgroundImage = `url(${album.cover})`;
        console.log(`url(${album.cover})`)
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
    }

    // Restaure le fond par défaut quand le composant est démonté
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
    };
  }, [album]);  // Cette dépendance va refaire l'effet chaque fois que l'album change

  if (!album) {
    return <div>Album non trouvé.</div>;
  }

  // Filtrer la tracklist en fonction de l'album
  const albumTracks = TrackList.filter((track) => track.albumId === album.id);

  return (
    <div className="album-detail">
      <div className="album-details-header">
        <h1 id="album-title">{album.name}</h1>
        <img className="album-cover" src={album.cover} alt={album.name} />
        <p id="album-description" className="album-description">{album.description}</p>
        <p id="album-date"><strong>Release date :</strong> {album.date}</p>
      </div>

      <div className="album-info">
        <h3>Tracklist</h3>
        <Tracks tracks={albumTracks} />
      </div>
    </div>
  );
}

export default AlbumDetail;
