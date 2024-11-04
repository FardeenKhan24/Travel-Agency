import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h2 className="footer-title">TripCrafters</h2>
            <p className="footer-description">
              Your trusted partner for unforgettable travel experiences. Explore
              the world with us.
            </p>
          </div>
          <div className="footer-links">
            <h2 className="footer-link-title">Quick Links</h2>
            <div className="footer-link-list">
              <Link to="home">Home</Link>
              <Link to="popular" >Popular Destination</Link>
              <Link to="services">Services</Link>
              <Link to="reviews" >Reviews</Link>
              <Link to="contact" >Contact Us</Link>
            </div>
          </div>
          <div className="footer-social">
            <h3 className="footer-social-title">Follow Us</h3>
            <div className="social-icons">
              <FaFacebookF className="social-icon facebook-icon" />
              <FaInstagram className="social-icon instagram-icon" />
              <FaTwitter className="social-icon twitter-icon" />
              <FaYoutube className="social-icon youtube-icon" />
            </div>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Your Email"
                className="email-input"
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copy">© 2024 Travel Agency. All rights reserved</p>
          <div className="footer-legal-links">
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms Of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
