import React, { useState } from 'react';
import '../styles/components/ReviewStyles.css';

// StarRating Component
const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(0);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onRatingChange(index);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "star on" : "star off"}
            onClick={() => onRatingChange(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <span className="star-icon" aria-hidden="true">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", rating: 4, comment: "Great product, highly recommend!", date: "2024-08-16" },
    { id: 2, name: "Jane Smith", rating: 5, comment: "Exceeded my expectations!", date: "2024-08-15" },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });
  const [errors, setErrors] = useState({});
  const [averageRating, setAverageRating] = useState(
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!newReview.name.trim()) formErrors.name = "Name is required";
    if (newReview.rating <= 0) formErrors.rating = "Please select a rating";
    if (!newReview.comment.trim()) formErrors.comment = "Comment is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const updatedReviews = [
      ...reviews,
      { ...newReview, id: reviews.length + 1, date: new Date().toISOString().split("T")[0] }
    ];
    setReviews(updatedReviews);
    setAverageRating(updatedReviews.reduce((acc, review) => acc + review.rating, 0) / updatedReviews.length);
    setNewReview({ name: "", rating: 0, comment: "" });
    setErrors({});
  };

  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>
      <div className="review-summary">
        <span>Average Rating: {averageRating.toFixed(1)} / 5</span>
        <span>Total Reviews: {reviews.length}</span>
      </div>

      <div className="review-list">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div className="review-item" key={review.id}>
              <div className="review-header">
                <span className="review-name">{review.name}</span>
                <span className="review-rating">
                  <StarRating rating={review.rating} onRatingChange={() => {}} />
                </span>
              </div>
              <p className="review-comment">{review.comment}</p>
              <span className="review-date">{review.date}</span>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to write one!</p>
        )}
      </div>

      <div className="review-form">
        <h3>Write a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className={errors.name ? "input-error" : ""}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <StarRating rating={newReview.rating} onRatingChange={handleRatingChange} />
            {errors.rating && <span className="error-message">{errors.rating}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              className={errors.comment ? "input-error" : ""}
              placeholder="Write your comment here"
            ></textarea>
            {errors.comment && <span className="error-message">{errors.comment}</span>}
          </div>
          <button type="submit" className="submit-button">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewComponent;
