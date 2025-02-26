import React, { useState } from 'react';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      rating: 4,
      text: 'This book was a fantastic read! The characters were well-developed, and the plot kept me hooked from start to finish.',
    },
    {
      name: 'Jane Smith',
      rating: 3,
      text: 'The book was good, but the pacing was a bit slow in some parts. Overall, enjoyable but could have been better.',
    },
  ]);

  // Form state
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);

  // Handle form submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { name, rating, text: reviewText }]);
    setName('');
    setReviewText('');
    setRating(5);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* Book Display Section */}
        <Book />

        {/* Review Form */}
        <ReviewForm 
          name={name}
          reviewText={reviewText}
          rating={rating}
          setName={setName}
          setReviewText={setReviewText}
          setRating={setRating}
          handleReviewSubmit={handleReviewSubmit}
        />

        {/* Reviews Display Section */}
        <div className="reviews">
          {reviews.map((review, index) => (
            <Review review={review} key={index} />
          ))}
        </div>
      </div>

      {/* Sign Up Section */}
      <SignUp />

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      Book Review & Rating Platform
    </header>
  );
}
function SignUp() {
  return (
    <div className="signup">
      <center>
        <form action="/signup" method="POST">
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="login.html">Login here</a></p>
      </center>
    </div>
);
}
function Book() {
  return (
    <div className="book">
      <img src="https://via.placeholder.com/150" alt="Book Cover" />
      <div className="book-details">
        <div className="book-title">Book Title</div>
        <div className="author">Author Name</div>
        <div className="rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">☆</span>
          <span>4/5</span>
        </div>
      </div>
    </div>
  );
}

function ReviewForm({ name, reviewText, rating, setName, setReviewText, setRating, handleReviewSubmit }) {
  return (
    <div className="review-form">
      <h2>Write a Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          rows="4"
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
        <label>Rating:</label>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className="star"
              onClick={() => setRating(index + 1)}
              style={{ color: index < rating ? '#ffcc00' : '#ccc' }}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

function Review({ review }) {
  return (
    <div className="review">
      <div className="review-header">
        <div>
          <strong>{review.name}</strong> - {review.rating}/5
        </div>
        <div className="rating">
          {[...Array(review.rating)].map((_, index) => (
            <span key={index} className="star">★</span>
          ))}
          {[...Array(5 - review.rating)].map((_, index) => (
            <span key={index} className="star">☆</span>
          ))}
        </div>
      </div>
      <div className="review-text">{review.text}</div>
    </div>
  );
}


function Footer() {
  return (
    <footer>
      &copy; 2025 Book Review Platform. All Rights Reserved.
    </footer>
  );
}

export default App;
