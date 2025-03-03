import React from 'react';
import './Footer2.css';

const Footer2 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/freewill-logo.png" alt="FreeWill" />
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
            </ul>
            <h3 className="lawyers-heading">FOR LAWYERS</h3>
            <ul>
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
            </ul>
            <h3 className="contact-heading">CONTACT US</h3>
            <ul>
              <li><a href="#help">Help center</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>

          <div className="footer-column">
          <h3>FOLLOW US</h3>
            <ul>
              <li><a href="#who-we-are">Facebook</a></li>
              <li><a href="#careers">Linkdin</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-text">
            <p>
              Copyright © 2025 FreeWill Co., a Delaware Public Benefit Corporation. All rights reserved. FreeWill offers 
              online self-help solutions for common estate planning needs and related educational content. Estate planning 
              may implicate both state and federal laws, and estate planning needs will differ based on personal 
              circumstance and applicable law. FreeWill is not a law firm and its services are not substitutes for an attorney's 
              advice. The information here is provided for educational purposes only and is not intended to provide, and 
              should not be construed as providing legal or tax advice. This information is general in nature and is not 
              intended to serve as the primary or sole basis for investment or tax-planning decisions. Use of FreeWill's 
              services is subject to the <a href="#terms" className="legal-link">Terms of Service</a> & <a href="#privacy" className="legal-link">Privacy Notice</a>.
            </p>
          </div>
          <div className="trust-badges">
            <img src="/logo1.png" alt="Trustpilot rating" className="badge" />
            <img src="/logo2.png" alt="BBB Accredited Business" className="badge" />
            <img src="/logo3.png" alt="AICPA SOC" className="badge" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;