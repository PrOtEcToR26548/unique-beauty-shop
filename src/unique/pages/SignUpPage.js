import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/components/SignUpStyles.css'; // Ensure the path is correct

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    signupMethod: 'email', // Default method
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMethodChange = (method) => {
    setFormData({ ...formData, signupMethod: method });
  };

  return (
    <div className="signup-container"> {/* Center container */}
      <div className="signup-page">
        <h2>Sign Up</h2>
        <form>
          <div className="method-options">
            <div
              className={`method-option ${formData.signupMethod === 'email' ? 'selected' : ''}`}
              onClick={() => handleMethodChange('email')}
            >
              <i className="bi bi-envelope-fill"></i> {/* Email icon */}
              <span>Email</span>
            </div>
            <div
              className={`method-option ${formData.signupMethod === 'phone' ? 'selected' : ''}`}
              onClick={() => handleMethodChange('phone')}
            >
              <i className="bi bi-phone-fill"></i> {/* Phone icon */}
              <span>Phone</span>
            </div>
          </div>
          {formData.signupMethod === 'email' && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          )}
          {formData.signupMethod === 'phone' && (
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="signin-link text-center">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
