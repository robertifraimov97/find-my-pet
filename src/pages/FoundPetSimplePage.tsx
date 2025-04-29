import './FoundPetSimplePage.css';

import React, { useState } from 'react';
import './FoundPetSimplePage.css';

const FoundPetSimplePage: React.FC = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [dateFound, setDateFound] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      alert('Please upload an image.');
      return;
    }

    console.log('Submitting found pet:', {
      description,
      location,
      dateFound,
      imageFile,
    });

    setSubmitted(true);
  };

  return (
    <div className="found-container">
      <h1>Report Found Pet</h1>
      <form onSubmit={handleSubmit} className="found-form">
        <div>
          <label>Description:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
          />
        </div>

        <div>
          <label>Location Found:</label><br />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Date Found:</label><br />
          <input
            type="date"
            value={dateFound}
            onChange={(e) => setDateFound(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Upload Image:</label><br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImageFile(e.target.files[0]);
              }
            }}
            required
          />
        </div>

        <button type="submit" className="found-button">
          Submit
        </button>
      </form>

      {submitted && (
        <div className="found-submitted">
          <h2>Submitted Information:</h2>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Date Found:</strong> {dateFound}</p>
          <p><strong>Image File:</strong> {imageFile?.name}</p>
        </div>
      )}
    </div>
  );
};

export default FoundPetSimplePage;