import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>Freewill</h1>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>FOR INDIVIDUALS</h3>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#donate-stock">Donate stock</a></li>
              <li><a href="#donate-crypto">Donate crypto</a></li>
              <li><a href="#glossary">Glossary</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>FOR NONPROFITS</h3>
            <ul>
              <li><a href="#for-nonprofits">For nonprofits</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#case-studies">Case studies</a></li>
              <li><a href="#webinars">Nonprofit webinars</a></li>
              <li><a href="#demo">Request a demo</a></li>
              <li><a href="#support">Support for T&E lawyers</a></li>
              <li><a href="#fellow">Become a FreeWill Fellow</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>ABOUT US</h3>
            <ul>
              <li><a href="#who-we-are">Who we are</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#help">Help center</a></li>
              
            </ul>
          </div>

          <div className="footer-column">
            <h3>FOLLOW US</h3>
            <div className="social-links">
              <a href="#facebook" className="social-link">Facebook</a>
              <a href="#linkedin" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;