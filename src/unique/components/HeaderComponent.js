import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/HeaderStyles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ProductContext } from '../context/ProductContext';
import logo from '../assets/images/temp-logo.png'; // Update to the correct image file

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(ProductContext);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = (e) => {
    if (!e.target.closest('.menu-icon') && !e.target.closest('.overlay-menu')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="menu-icon-container">
          <div
            className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`overlay-menu ${isMenuOpen ? 'show' : ''}`}>
            <nav className="overlay-menu-container">
              <Link to="/" className="overlay-menu-item" onClick={toggleMenu}>Home</Link>
              <Link to="/jewelry" className="overlay-menu-item" onClick={toggleMenu}>Jewelry</Link>
              <Link to="/toys" className="overlay-menu-item" onClick={toggleMenu}>Toys</Link>
              <Link to="/products" className="overlay-menu-item" onClick={toggleMenu}>Products</Link> 
              <Link to="/reviews" className="overlay-menu-item" onClick={toggleMenu}>Reviews</Link>
              <Link to="/about" className="overlay-menu-item" onClick={toggleMenu}>About Us</Link>
              <Link to="/contact" className="overlay-menu-item" onClick={toggleMenu}>Contact Us</Link>
              <Link to="/learn-more" className="overlay-menu-item" onClick={toggleMenu}>Learn More</Link>
            </nav>
          </div>
        </div>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." aria-label="Search" />
        </div>
        <nav className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart" className="icon-link">
            <i className="bi bi-cart"></i>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>
          <Link to="/notifications" className="icon-link">
            <i className="bi bi-bell"></i>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
