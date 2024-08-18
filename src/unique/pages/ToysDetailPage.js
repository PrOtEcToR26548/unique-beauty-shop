// src/unique/pages/ToysDetailPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toysData from '../utils/toysData';
import '../styles/components/ToysDetailStyles.css';
import { FaArrowLeft } from 'react-icons/fa';

const ToysDetailPage = () => {
  const { id } = useParams(); // Get the toy ID from the URL
  const navigate = useNavigate();

  // Find the toy by ID
  const toy = toysData.find((toy) => toy.id === parseInt(id));

  if (!toy) {
    return <p>Toy not found!</p>;
  }

  return (
    <div className="toy-detail-container">
      <button className="back-button" onClick={() => navigate('/toys')}>
        <FaArrowLeft />
      </button>
      <h2 className="toy-detail-title">{toy.name}</h2>
      <img src={require(`../assets/images/${toy.image}`)} alt={toy.name} className="toy-detail-image" />
      <p className="toy-detail-description">{toy.description}</p>
      <p className="toy-detail-price">${toy.price}</p>
      <div className="toy-detail-images">
        {/* You can add more images of the toy here */}
        <img src={require(`../assets/images/${toy.image}`)} alt={`${toy.name} 1`} />
        <img src={require(`../assets/images/${toy.image}`)} alt={`${toy.name} 2`} />
        {/* Add more images if available */}
      </div>
    </div>
  );
};

export default ToysDetailPage;
