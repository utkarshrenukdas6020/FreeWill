import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> {/* Navigate to Home */}
          <h1>FREEWILL</h1>
        </Link>
      </div>

      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
      </button>

      <div className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
        <div className="navbar-links">
          <a href="#individuals">For individuals</a>
          <a href="#nonprofits">For nonprofits</a>
          <a href="#advisors">For advisors</a>
          <a href="#about">About us</a>
        </div>
        <div className="navbar-auth">
          <button className="login-btn">Log in</button>
          <Link to="/get-started" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
