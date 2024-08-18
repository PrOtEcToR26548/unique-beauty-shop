import React, { useState } from 'react';
import { Container, Dropdown, ListGroup } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import star icons
import products from '../utils/products'; // Ensure the path is correct
import '../styles/components/ProductsStyles.css'; // Import CSS for styling

const ProductsComponent = () => {
  const [sortOrder, setSortOrder] = useState('default');
  const [sortedProducts, setSortedProducts] = useState(products);

  // Function to handle sorting
  const handleSort = (order) => {
    let sortedArray = [...products];
    switch (order) {
      case 'price-asc':
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating-asc':
        sortedArray.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-desc':
        sortedArray.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedArray = products;
    }
    setSortOrder(order);
    setSortedProducts(sortedArray);
  };

  // Function to render star ratings
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="product-rating">
        {Array(fullStars).fill(<FaStar className="star-icon" />)}
        {halfStar && <FaStarHalfAlt className="star-icon" />}
        {Array(emptyStars).fill(<FaRegStar className="star-icon" />)}
      </div>
    );
  };

  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort by: {sortOrder === 'default' ? 'Default' : sortOrder}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSort('price-asc')}>Price: Low to High</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('price-desc')}>Price: High to Low</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('name-asc')}>Name: A to Z</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('name-desc')}>Name: Z to A</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('rating-asc')}>Rating: Low to High</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('rating-desc')}>Rating: High to Low</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ListGroup className="products-grid">
        {sortedProducts.map(product => (
          <ListGroup.Item key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            {renderRating(product.rating)} {/* Display product rating */}
            <p>${product.price.toFixed(2)}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ProductsComponent;
