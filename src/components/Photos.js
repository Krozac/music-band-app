import React, { useState } from 'react';
import { PhotosList } from '../datas/photos'; // Liste de photos à importer
import '../styles/Photos.css'; // Style si nécessaire

function Photos() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPhotos = PhotosList.filter(category => {
    return selectedCategory === 'all' || category.id === selectedCategory;
  });

  return (
    <div className="photos-container">
      <h1 className="photos-title">Photo gallery</h1>
      <div className="filter">
        <label htmlFor="photo-category-select">Filter by category : </label>
        <select id="photo-category-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          {PhotosList.map(category => (
            <option key={category.id} value={category.id}>{category.id}</option>
          ))}
        </select>
      </div>
      <div className="photo-list">
        {filteredPhotos.map((category) => (
          category.photos.map((photo, index) => (
              <img className="photo-item" key={index} src={photo} alt={`Photo ${index + 1}`} />
          ))
        ))}
      </div>
    </div>
  );
}

export default Photos;
