import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: '#f8f8f8', padding: '10px' }}>
      <h2 style={{ display: 'inline', marginRight: '20px' }}>Find My Pet</h2>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/lost" style={{ marginRight: '15px' }}>Report Lost Pet</Link>
      <Link to="/found">Report Found Pet</Link>
    </nav>
  );
};

export default Navbar;