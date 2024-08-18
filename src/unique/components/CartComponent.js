// src/unique/components/CartComponent.js
import React from 'react';
import { useProducts } from '../context/ProductContext';
import { Container, ListGroup, Button } from 'react-bootstrap';

const CartComponent = () => {
  const { cart, removeFromCart } = useProducts();

  return (
    <Container>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <h5>{item.name}</h5>
              <p>Price: ${item.price}</p>
              <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default CartComponent;
