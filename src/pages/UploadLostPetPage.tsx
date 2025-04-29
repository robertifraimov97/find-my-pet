import './UploadLostPetPage.css';

import React, { useState } from 'react';
import './UploadLostPetPage.css';

const UploadLostPetPage: React.FC = () => {
  const [petName, setPetName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      alert('Please upload an image.');
      return;
    }

    console.log('Submitting lost pet:', {
      petName,
      description,
      location,
      imageFile,
    });
  };

  return (
    <div className="lost-container">
      <h1>Report Lost Pet</h1>
      <form onSubmit={handleSubmit} className="lost-form">
        <div>
          <label>Pet Name:</label><br />
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Last Seen Location:</label><br />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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

        <button type="submit" className="lost-button">Submit</button>
      </form>
    </div>
  );
};

export default UploadLostPetPage;