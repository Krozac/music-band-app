// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AlbumList } from '../datas/albums'; // Liste d'album à importer
import '../styles/Home.css';  // Style si nécessaire

function Home() {
  return (
    <div className="home">
        <h1>Accueil</h1>
    </div>
  );
}

export default Home;
