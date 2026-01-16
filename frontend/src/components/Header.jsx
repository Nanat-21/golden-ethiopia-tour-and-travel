import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <img src="images/logo2.jpg" alt="Explore Ethiopia Brand Icon" className="logo-img" />
            <span className="logo-text">Golden Ethiopia Tour and Travel</span>
          </Link>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-label">&#9776;</label>

          <div className="nav-items-container nav-items-group">
            <ul className="nav-items">
              {/* Using NavLink with a function in className. 
                  React Router automatically passes 'isActive'.
              */}
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/packages" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Packages
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <Link to="/contact" className="btn-gold">Book Now</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;