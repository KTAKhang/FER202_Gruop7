import React, { useState } from 'react';
import '../assets/styles/UnicornGundam.css';
import Header from '../components/Header';
import UnicornGundamImage from '../assets/images/UnicornGundam/RG-25-UNICORN-GUNDAM-AZGUNDAM-11-247x296.jpg';
import UnicornGundamImage2 from '../assets/images/UnicornGundam/RG-25-RX-0-UNICORN-1-247x296.jpg';
import UnicornGundamImage3 from '../assets/images/UnicornGundam/RG-25-RX-0-UNICORN-247x296.jpg';
import Shop from '../assets/images/UnicornGundam/Shop.png'
import * as Icon from "react-bootstrap-icons";
import { Carousel } from 'react-bootstrap';

function UnicornGundam() {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  const handleRating = (value) => {
    setRating(value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };


  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <>
      <div className='body-unicorngundam'>
        <Header />
        <div className="unicorngundam-container">
          <div className="unicorngundam-avatar">
            <img src={UnicornGundamImage} alt="Unicorn Gundam" />
          </div>
          <div className="unicorngundam-name">
            <h1>Unicorn Gundam Destroy Mode</h1>

          </div>
          <div className="unicorngundam-info">
            <p>
              The Unicorn Gundam Destroy Mode is a transformation state in the Mobile Suit Gundam Unicorn anime series. It represents the full unlocking of the Unicorn Gundam's potential, showcasing glowing psycho-frame components and greatly enhancing its combat abilities.
            </p>
          </div>

          <div className="unicorngundam-intro">
            <h2>Description</h2>
            <p>
              The Unicorn Gundam Destroy Mode is a transformation state in the Mobile Suit Gundam Unicorn anime series. Activated when the suit's psycho-frame system is fully engaged, this mode reveals the inner structure of the Gundam with glowing psycho-frame components. It enhances combat capabilities, boosting speed, agility, and firepower.
            </p>
            <p>
              One of the most iconic features of the Unicorn Gundam in Destroy Mode is the glowing "unicorn horn" on its forehead. The Gundam also utilizes high-powered weapons such as the "Hyper Beam Magnum" rifle, making it a formidable opponent on the battlefield.
            </p>
          </div>

          {/* Flex container for Carousel and product details */}
          <div className="unicorngundam-product-container">
            <div className="unicorngundam-carousel">
              <Carousel interval={3000} indicators={false} controls={true} aria-label="Unicorn Gundam Image Carousel">
                <Carousel.Item>
                  <img className="d-block w-100" src={UnicornGundamImage} alt="Unicorn Gundam" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={UnicornGundamImage2} alt="Unicorn Gundam - Pose 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={UnicornGundamImage3} alt="Unicorn Gundam - Detail" />
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="unicorngundam-details">
              <h2 className="product-title">RG 25 RX-0 Unicorn Gundam</h2>
              <h4 className="reviews">
                4.92 <Icon.StarFill color="red" /> (13 reviews) | 242 sold
              </h4>
              <div className="price-section">
                <span className="original-price">999,000đ</span>
                <span className="discounted-price">900,000đ</span>
                <span className="discount-tag">-10%</span>
              </div>
              <ul className="product-details">
                <li>Series: Real Grade</li>
                <li>Scale: 1/144</li>
                <li>Official product from Bandai (Japan)</li>
              </ul>
              <div className="buy-options">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="quantity-input"
                  aria-label="Quantity"
                />
                <button className="buy-now-button">BUY NOW</button>
              </div>
            </div>
          </div>
          {/* Rating Section */}
          <div>
            <div className="rating-section">
              <h2>Rate this product:</h2>
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon.StarFill
                  key={star}
                  color={star <= rating ? 'gold' : 'gray'}
                  onClick={() => handleRating(star)}
                  style={{ cursor: 'pointer', fontSize: '1.5em' }}
                  aria-label={`${star} star rating`}
                />
              ))}
              <p>Your rating: {rating} / 5</p>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
              <h2>Comments</h2>
              <form onSubmit={handleCommentSubmit} className="comment-form">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment here..."
                  rows="3"
                  className="comment-input"
                  required
                />
                <button type="submit" className="comment-submit-button">Post Comment</button>
              </form>
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p>{comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <span>Welcome to Gundam Universe!</span>
              <h2>Welcome to Gundam Universe!</h2>
              <p>Your go-to shop for authentic Gundam models, featuring the iconic of Gundam. Stay updated on new releases and exclusive collectibles.</p>
            </div>


            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in-right">
                <div className="info-box">
                  <i className="bx bx-share-alt"></i>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="https://twitter.com" className="twitter" aria-label="Twitter"><Icon.Twitter /></a>
                    <a href="https://facebook.com" className="facebook" aria-label="Facebook"><Icon.Facebook /></a>
                    <a href="https://instagram.com" className="instagram" aria-label="Instagram"><Icon.Instagram /></a>
                    <a href="https://skype.com" className="skype" aria-label="Skype"><Icon.Skype /></a>
                    <a href="https://linkedin.com" className="linkedin" aria-label="LinkedIn"><Icon.Linkedin /></a>
                  </div>
                </div>
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>support@gundamshop.com</p>
                </div>
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+123 456 7890</p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="zoom-in-left">
                <div className="shop-image-container" style={{ position: 'relative', textAlign: 'center' }}>
                  {/* Display the image */}
                  <img
                    src={Shop} // Thay thế `imageUrl` bằng đường dẫn đến ảnh bạn muốn hiển thị
                    alt="Shop Image"
                    className="img-fluid"
                    style={{ width: '100%', borderRadius: '8px' }} // Tùy chỉnh kích thước và kiểu ảnh
                  />
                </div>
                {/* Button to navigate to the shop */}
                <div className="text-center mt-3">
                  <a href="http://localhost:8080" className="btn btn-primary">View Shop</a>
                  {/* Thay `/shop` bằng đường dẫn thực tế của trang shop */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div className="container">
            <h3></h3>
            <p>As one as wind and cloud</p>
            <div className="social-links">
              <a href="#" className="twitter" aria-label="Twitter"><Icon.Twitter /></a>
              <a href="#" className="facebook" aria-label="Facebook"><Icon.Facebook /></a>
              <a href="#" className="instagram" aria-label="Instagram"><Icon.Instagram /></a>
              <a href="#" className="google-plus" aria-label="Skype"><Icon.Skype /></a>
              <a href="#" className="linkedin" aria-label="LinkedIn"><Icon.Linkedin /></a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default UnicornGundam;
