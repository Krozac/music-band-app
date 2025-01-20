import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlbumList } from '../datas/albums'; // Liste d'albums à importer
import '../styles/Albums.css'; // Style si nécessaire

function Albums() {
  const [selectedType, setSelectedType] = useState('all');
  const [sortOrder, setSortOrder] = useState('date');
  const [selectedYear, setSelectedYear] = useState('all');

  // Liste des années uniques disponibles dans les albums
  const years = [...new Set(AlbumList.map(album => album.date))];
  years.sort((a, b) => a - b); // Trier les années par ordre décroissant

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredAlbums = AlbumList.filter(album => {
    const isTypeMatch = selectedType === 'all' || album.type === selectedType;
    const isYearMatch = selectedYear === 'all' || album.date == selectedYear;
    return isTypeMatch && isYearMatch;
  });

  const sortedAlbums = filteredAlbums.sort((a, b) => {
    if (sortOrder === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
    if (sortOrder === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="albums-container">
      <h1 className="albums-title">Discographie</h1>
      <div className="filter">
        <label htmlFor="album-type-select">Filtrer by type: </label>
        <select id="album-type-select" value={selectedType} onChange={handleTypeChange}>
          <option value="all">All</option>
          <option value="studio">Studio</option>
          <option value="live">Live</option>
          <option value="compil">Compilation</option>
        </select>
      </div>
      <div className="filter">
        <label htmlFor="album-year-select">Filter by release year : </label>
        <select id="album-year-select" value={selectedYear} onChange={handleYearChange}>
          <option value="all">All</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="sort">
        <label htmlFor="album-sort-select">Order By : </label>
        <select id="album-sort-select" value={sortOrder} onChange={handleSortChange}>
          <option value="date">Year</option>
          <option value="name">Name</option>
        </select>
      </div>
      <ul className="album-list">
        {sortedAlbums.map((album) => (
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

export default Albums;
