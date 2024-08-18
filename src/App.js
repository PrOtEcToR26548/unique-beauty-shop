import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './unique/context/ProductContext';
import { CartProvider } from './unique/context/CartContext';
import { NotificationProvider } from './unique/context/NotificationContext';
import HeaderComponent from './unique/components/HeaderComponent';
import FooterComponent from './unique/components/FooterComponent';
import HomeComponent from './unique/components/HomeComponent';
import ToysComponent from './unique/components/ToysComponent';
import ProductsComponent from './unique/components/ProductsComponent';
import JewelryComponent from './unique/components/JewelryComponent';
import ReviewComponent from './unique/components/ReviewComponent';
import CartComponent from './unique/components/CartComponent';
import NotificationComponent from './unique/components/NotificationComponent';
import AboutPage from './unique/pages/AboutPage';
import ContactPage from './unique/pages/ContactPage';
import LoginPage from './unique/pages/LoginPage';
import SignUpPage from './unique/pages/SignUpPage';
import LearnMorePage from './unique/pages/LearnMorePage';
import ToysDetailPage from './unique/pages/ToysDetailPage';
import NotFoundPage from './unique/pages/NotFoundPage';

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NotificationProvider>
          <Router>
            <HeaderComponent />
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/learn-more" element={<LearnMorePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/products" element={<ProductsComponent />} />
              <Route path="/toys" element={<ToysComponent />} />
              <Route path="/toys/:id" element={<ToysDetailPage />} />
              <Route path="/jewelry" element={<JewelryComponent />} />
              <Route path="/reviews" element={<ReviewComponent />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/cart" element={<CartComponent />} />
              <Route path="/notifications" element={<NotificationComponent />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <FooterComponent />
          </Router>
        </NotificationProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
