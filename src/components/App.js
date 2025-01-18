import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Albums from './Albums';
import Home from './Home';
import Banner from './Banner';
import AlbumDetail from './AlbumDetail';

function App() {
  return (
    <div>
      <Banner title="Tri Yann" subtitle="" backgroundImage=""/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
      </Routes>
    </div>
  );
}

export default App;
