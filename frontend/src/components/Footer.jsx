import React from "react";
import "../styles/style.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Matches the brand class from your Gallery HTML */}
        <p className="brand">Explore Ethiopia</p>

        <div className="footer-links">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#twitter">Twitter</a>
        </div>

        <div className="contact-info">
          <p>Contact Us:</p>
          <a href="tel:+251-900-123-456">Phone: +251 900 123 456</a>
          {/* Updated to match the email in your gallery HTML */}
          <a href="mailto:info@exploreethiopia.com">
            Email: info@exploreethiopia.com
          </a>
          <p>Address: Bole Road, Addis Ababa, Ethiopia</p>
        </div>

        <p className="footer-note">© 2024 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
