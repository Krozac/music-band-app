// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AlbumList } from '../datas/albums'; // Liste d'album à importer
import '../styles/Home.css';  // Style si nécessaire

function Home() {
  return (
    <div className="home">
      <h1>Albums</h1>
      <ul className="album-list">
        {AlbumList.map((album) => (
          <li key={album.id} className="album-item">
            <Link to={`/album/${album.id}`} className="album-link">
              <img src={album.cover} alt={album.name} />
              <h2>{album.name}</h2>
              <p>{album.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
