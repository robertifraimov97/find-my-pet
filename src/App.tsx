import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/lost" element={<h1>Report Lost Pet</h1>} />
        <Route path="/found" element={<h1>Report Found Pet</h1>} />
      </Routes>
    </Router>
  );
}

export default App;