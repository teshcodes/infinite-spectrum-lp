 import React from "react";
// Import Font Awesome icons
import { FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-brand">
          Infinite Spectrum
        </div>
        <nav className="footer-nav">
          <a href="#talent-gallery" className="footer-link">Talents</a>
          <a href="#journey" className="footer-link">Journey</a>
          <a href="#explore-hub" className="footer-link">Find Your Path</a>
          <a href="#conversion" className="footer-link">Join</a>
        </nav>
        <div className="footer-socials">
          <a
            href="mailto:teslimakano20@gmail.com" // Use mailto: for email links
            className="footer-social-icon"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope /> {/* Font Awesome Email icon */}
          </a>
          <a
            href="https://facebook.com/teshcodes"
            className="footer-social-icon"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebookF /> {/* Font Awesome Facebook icon */}
          </a>
          <a
            href="https://instagram.com/tesh_devs"
            className="footer-social-icon"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram /> {/* Font Awesome Instagram icon */}
          </a>
          <a
            href="https://tiktok.com/teshcodes"
            className="footer-social-icon"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
          >
            <FaTiktok /> {/* Font Awesome TikTok icon */}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          &copy; {new Date().getFullYear()} Infinite Spectrum. All rights reserved.
        </span>
        <div className="footer-developer-info">
          Built with <span aria-label="love" className="love-icon">❤</span> by
          <span className="developer-profile">
            <img
              src="/my-avatar.jpg"
              alt="Akano Teslim Ayomide"
              className="developer-avatar"
            />
            <span className="developer-name">Akano Teslim Ayomide</span>
          </span>
        </div>
        <div className="footer-legal-links">
            <a href="/privacy-policy" className="footer-legal-link">Privacy Policy</a>
            <a href="/terms-of-service" className="footer-legal-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}