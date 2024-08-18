import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toysData from '../utils/toysData';
import '../styles/components/ToysStyles.css';
import { useProducts } from '../context/ProductContext';

const ToysComponent = () => {
  const { addToCart } = useProducts();
  const navigate = useNavigate();
  const [expandedToyId, setExpandedToyId] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log(`${item.name} added to cart!`);
  };

  const handleBuyNow = (itemName) => {
    console.log(`Buying ${itemName} now!`);
    // Add your logic for buying the item
  };

  const toggleDescription = (toyId) => {
    setExpandedToyId(expandedToyId === toyId ? null : toyId);
  };

  const handleViewDetails = (toyId) => {
    navigate(`/toys/${toyId}`); // Navigate to toy detail page
  };

  return (
    <div className="toys-container">
      <h2 className="toys-title">Toys Collection</h2>
      <div className="toys-grid">
        {toysData.map((toy) => (
          <div
            className="toy-card"
            key={toy.id}
            onClick={() => handleViewDetails(toy.id)} // Navigate on click
          >
            <img
              src={require(`../assets/images/${toy.image}`)}
              alt={toy.name}
              className="toy-image"
            />
            <h3 className="toy-name">{toy.name}</h3>
            <p className={`toy-description ${expandedToyId === toy.id ? 'full' : ''}`}>
              {toy.description}
            </p>
            <button className="toggle-description" onClick={() => toggleDescription(toy.id)}>
              {expandedToyId === toy.id ? 'Read Less' : 'Read More'}
            </button>
            <p className="price">${toy.price}</p>
            <div className="toy-buttons">
              <button className="add-to-cart-button" onClick={() => handleAddToCart(toy)}>Add to Cart</button>
              <button className="buy-now-button" onClick={() => handleBuyNow(toy.name)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToysComponent;
