// AlbumDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { AlbumList } from '../datas/albums';
import { TrackList } from '../datas/tracks';  // Si tu utilises une tracklist globale

import Tracks from './Tracks';  // Pour afficher la liste des pistes
import '../styles/AlbumDetail.css';  // Style si nécessaire

function AlbumDetail() {
  const { id } = useParams();  // Récupère l'ID de l'album depuis l'URL
  const album = AlbumList.find((album) => album.id === id); // Recherche l'album correspondant

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
        <p id="album-date"><strong>Date de sortie :</strong> {album.date}</p>
      </div>

      <div className="album-info">
        <h3>Tracklist</h3>
        <Tracks tracks={albumTracks} />
      </div>
    </div>
  );
}

export default AlbumDetail;
