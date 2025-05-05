// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Download from './pages/Download';
import Layout from './components/Layout';

import ScrollToTop from './components/ScrollToTop';
import Apropos from './pages/Apropos';


function App() {
  return (
    <>
      <Header />
      <Layout>
      <ScrollToTop /> {/* Ce composant agit à chaque changement de route */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/telechargement" element={<Download />} />
        <Route path="/apropos" element={<Apropos />} />
    
        {/* Tu peux ajouter d'autres routes plus tard */}
      </Routes>
      </Layout>
    </>
  );
}

export default App;
