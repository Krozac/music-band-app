import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AlbumDetail from './AlbumDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
      </Routes>
    </div>
  );
}

export default App;
