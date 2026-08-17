import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <span>Amondi</span>
          <small>WEDS</small>
          <span>Ajuma</span>
        </div>

        <p className="footer-message">
          Thank you for being part of our story.
        </p>

        <div className="footer-date">
          12 · 12 · 2026
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">

          <span>
            © 2026 Amondi Weds Ajuma
          </span>

          <a href="#home">
            BACK TO TOP ↑
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;