import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Find My Pet 🐾</h1>

      <p className="home-description">
        Find My Pet is an app designed to help reunite lost pets with their owners.  
        Whether you've lost your beloved companion or found a wandering animal,  
        we're here to connect the right pet to the right person — quickly and safely.
      </p>

      <div>
        <h2>How it works:</h2>
        <ol className="home-steps">
          <li>Lost your pet? Report it and upload a photo.</li>
          <li>Found a pet? Upload details and help locate its owner.</li>
          <li>Our smart system matches lost and found pets based on images and descriptions.</li>
        </ol>
      </div>

      <div className="home-buttons">
        <Link to="/lost" className="button-lost">Report Lost Pet</Link>
        <Link to="/found" className="button-found">Report Found Pet</Link>
      </div>
    </div>
  );
};

export default HomePage;