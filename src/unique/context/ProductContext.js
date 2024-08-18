// src/unique/context/ProductContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the ProductContext
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If exists, increase the quantity (or just add again depending on your requirement)
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        // If not exists, add new item with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <ProductContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProducts = () => {
  return useContext(ProductContext);
};
