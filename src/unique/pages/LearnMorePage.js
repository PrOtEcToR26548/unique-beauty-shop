// src/unique/pages/LearnMorePage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/components/LearnMorePageStyles.css'; // Create this CSS file for styles if needed

const LearnMorePage = () => {
  return (
    <Container className="learn-more-container my-5">
      <h2>Learn More About Unique Beauty Shop</h2>
      <p>
        At Unique Beauty Shop, we believe that beauty is not just about appearances, but also about the experience. Our mission is to provide high-quality beauty products that empower you to express yourself and feel confident in your own skin.
      </p>
      <h3>Our Commitment to Quality</h3>
      <p>
        We source our products from trusted brands that prioritize quality and safety. Every product we offer is carefully selected to ensure it meets our high standards and caters to the diverse needs of our customers.
      </p>
      <h3>Customer Satisfaction</h3>
      <p>
        Your satisfaction is our top priority. We are dedicated to providing excellent customer service and support, ensuring that your shopping experience is as enjoyable and seamless as possible.
      </p>
      <h3>Join Our Community</h3>
      <p>
        Become a part of our beauty community! Follow us on social media and subscribe to our newsletter for the latest updates on products, promotions, and beauty tips.
      </p>
      <img src={require('../assets/images/store.jpg')} alt="Store" className="learn-more-image" />
    </Container>
  );
};

export default LearnMorePage;
