import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../styles/components/ContactStyles.css';

const ContactPage = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Write your message here" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;
