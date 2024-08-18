import React from 'react';
import { useProducts } from '../context/ProductContext';
import jewelryData from '../utils/jewelryData';
import '../styles/components/JewelryStyles.css';

const JewelryComponent = () => {
  const { addToCart } = useProducts();

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log(`${item.name} added to cart!`);
  };

  // Define the handleBuyNow function
  const handleBuyNow = (itemName) => {
    console.log(`Buying ${itemName} now!`);
    // Add your logic for buying the item
  };

  return (
    <div className="jewelry-container">
      <h2 className="jewelry-title">Jewelry Collection</h2>
      <div className="jewelry-grid">
        {jewelryData.map((item) => (
          <div key={item.id} className="jewelry-item">
            <img src={item.image} alt={item.name} className="jewelry-image" />
            <h3 className="jewelry-name">{item.name}</h3>
            <p className="jewelry-description">{item.description}</p>
            <p className="price">${item.price}</p>
            <div className="jewelry-buttons">
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              <button className="buy-now-button" onClick={() => handleBuyNow(item.name)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryComponent;
