import React from 'react';
import '../styles/components/AboutStyles.css'; // Make sure this path is correct
import beautyImage from '../assets/images/beauty-products.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

// Team Members Data
const teamMembers = [
    {
        name: "Jane Doe",
        role: "CEO & Founder",
        image: "../assets/images/team-member1.jpg",
    },
    {
        name: "John Smith",
        role: "Head of Marketing",
        image: "../assets/images/team-member2.jpg",
    },
    {
        name: "Emily Johnson",
        role: "Customer Support Specialist",
        image: "../assets/images/team-member3.jpg",
    },
];

// Testimonials Data
const testimonials = [
    {
        text: "Absolutely love the products! They have transformed my beauty routine!",
        author: "Sarah P.",
    },
    {
        text: "Great service and amazing quality. Highly recommend!",
        author: "Mike R.",
    },
    {
        text: "Best beauty products I've ever used! Will definitely be back for more.",
        author: "Jessica L.",
    },
];

const AboutPage = () => {
    return (
        <Container className="about-container my-5">
            <h2 className="text-center mb-4">About Us</h2>
            <Row>
                <Col md={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Img variant="top" src={beautyImage} alt="Beauty Products" className="about-image" />
                        <Card.Body>
                            <Card.Title className="font-weight-bold">Our Mission</Card.Title>
                            <Card.Text>
                                We are committed to providing high-quality products that enhance your natural beauty and boost your confidence. Our aim is to empower individuals to express themselves through beauty.
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <h3 className="font-weight-bold">Why Choose Us?</h3>
                    <ul className="list-unstyled">
                        <li>✅ Top-notch products from trusted brands</li>
                        <li>✅ Affordable prices with great deals</li>
                        <li>✅ Excellent customer service and support</li>
                        <li>✅ Fast and reliable shipping</li>
                    </ul>
                    <Button variant="success" className="mt-3">Shop Now</Button>
                </Col>
            </Row>

            <h3 className="mt-4 font-weight-bold">Meet Our Team</h3>
            <Row>
                {teamMembers.map((member, index) => (
                    <Col md={4} key={index}>
                        <Card className="mb-4 shadow-sm team-member-card">
                            <Card.Img variant="top" src={member.image} alt={member.name} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.role}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <h3 className="mt-4 font-weight-bold">Customer Testimonials</h3>
            <Row>
                {testimonials.map((testimonial, index) => (
                    <Col md={4} key={index}>
                        <Card className="mb-4 shadow-sm testimonial-card">
                            <Card.Body>
                                <Card.Text>"{testimonial.text}"</Card.Text>
                                <footer className="blockquote-footer">{testimonial.author}</footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="join-community-section">
                <h3 className="font-weight-bold">Join Our Community</h3>
                <p>Connect with us on social media and stay updated with our latest products and promotions!</p>
                <p>Follow Us On:</p> {/* Moved Follow Us On text above social media icons */}
                <div className="social-media-icons">
                    <a href="https://www.facebook.com/share/Xhzi5dKpCewbzNax/?mibextid=LQQJ4d&direct_share_include_copy=0&fb_entity_type=unknown" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on Facebook">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://www.instagram.com/unique_store_ratia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on Instagram">
                        <FaInstagram size={30} />
                    </a>
                </div>
                {/* Removed the Subscribe to Newsletter button */}
            </div>
        </Container>
    );
};

export default AboutPage;
