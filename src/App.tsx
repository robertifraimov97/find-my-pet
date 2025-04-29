import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UploadLostPetPage from './pages/UploadLostPetPage';
import FoundPetSimplePage from './pages/FoundPetSimplePage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lost" element={<UploadLostPetPage />} />
        <Route path="/found" element={<FoundPetSimplePage />} />
      </Routes>
    </Router>
  );
}

export default App;