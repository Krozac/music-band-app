// Banner.js
import React from 'react';
import '../styles/Banner.css';  // Importation du fichier CSS
import logo from '../assets/background.png'

function Banner({ title, subtitle, backgroundImage }) {
  return (
    <div 
      className="banner" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <img className="banner-img"  src = {logo}/>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

export default Banner;
