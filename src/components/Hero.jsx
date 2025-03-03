import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Get peace of mind</h1>
        <p>
          It takes less than 20 minutes to write or update your legal will, for free.{' '}
          <a href="#why" className="link">
            Why is it free?
          </a>
        </p>
        <button className="make-will-btn">Make my will</button>
        <p className="trust-info">
          If you live in California, we also offer a{' '}
          <a href="#trust" className="link">
            Revocable Living Trust!
          </a>
        </p>
      </div>
      <div className="hero-image">
        <img src="/girl.jpg" alt="Mother and child" />
      </div>
    </div>
  );
};

export default Hero;