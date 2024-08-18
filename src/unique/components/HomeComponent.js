import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Import images
import beautyImage from '../assets/images/beauty-products.jpg';
import toysImage from '../assets/images/toys.jpg';
import jewelryImage from '../assets/images/jewelry.jpg';
import promoImage from '../assets/images/unique-banner.jpeg';

const HomeComponent = () => {
    return (
        <Container className="home-container my-5">
            {/* Promotional Banner Section */}
            <Row className="promo-section text-center">
                <Col md={12}>
                    <img src={promoImage} alt="Promo Banner" className="img-fluid promo-image" />
                    <h1 className="mt-4 promo-title"><b>UNIQUE BEAUTY SHOP RATIA</b></h1>
                    <p className="promo-subtitle">A Complete Bridal Showroom.</p>
                    <Button variant="danger" className="promo-button mt-3">Shop the Sale</Button>
                </Col>
            </Row>

            {/* Social Media Icons */}
            <Row className="mt-5 text-center">
                <Col md={12}>
                    <FaFacebook size={30} className="mx-2" />
                    <FaInstagram size={30} className="mx-2" />
                    <FaTwitter size={30} className="mx-2" />
                    <FaLinkedin size={30} className="mx-2" />
                </Col>
            </Row>

            {/* Featured Categories Section */}
            <Row className="mt-5 text-center">
                <h2 className="featured-title">Explore Our Categories</h2>
                <Col md={4} className="category-card">
                    <Card className="mb-4 shadow-sm">
                        <Card.Img variant="top" src={beautyImage} alt="Beauty Products" />
                        <Card.Body>
                            <Card.Title>Beauty Products</Card.Title>
                            <Button variant="primary" href="/products">Shop Beauty</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="category-card">
                    <Card className="mb-4 shadow-sm">
                        <Card.Img variant="top" src={toysImage} alt="Toys" />
                        <Card.Body>
                            <Card.Title>Fun Toys</Card.Title>
                            <Button variant="primary" href="/toys">Shop Toys</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="category-card">
                    <Card className="mb-4 shadow-sm">
                        <Card.Img variant="top" src={jewelryImage} alt="Jewelry" />
                        <Card.Body>
                            <Card.Title>Jewelry Collection</Card.Title>
                            <Button variant="primary" href="/jewelry">Shop Jewelry</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Testimonial Section */}
            <Row className="mt-5">
                <Col md={12} className="text-center">
                    <h2 className="testimonials-title">What Our Customers Are Saying</h2>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Text>"Great quality and fast delivery. My kids love the toys, and the beauty products are amazing!"</Card.Text>
                            <footer className="blockquote-footer">Anna K.</footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Text>"I always find the best deals here. The jewelry is stunning and affordable."</Card.Text>
                            <footer className="blockquote-footer">Lisa M.</footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Text>"Excellent customer service! I highly recommend this store for all your needs."</Card.Text>
                            <footer className="blockquote-footer">Michael J.</footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Exclusive Offers & Discounts Section */}
            <div className="exclusive-offers-section text-center mt-5">
                <h2 className="font-weight-bold">Exclusive Offers & Discounts</h2>
                <p>Sign up for our newsletter and be the first to know about exclusive deals, special promotions, and more!</p>
                <Button className="subscribe-button mt-3">Subscribe Now</Button>
            </div>
        </Container>
    );
};

export default HomeComponent;
