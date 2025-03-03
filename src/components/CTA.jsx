import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Try FreeWill today</h2>
          <div className="features">
            <div className="feature">
              <span className="check">✓</span>
              <span>100% free</span>
            </div>
            <div className="feature">
              <span className="check">✓</span>
              <span>Done in under 20 minutes</span>
            </div>
          </div>
        </div>
        <button className="cta-button">Create a will now—it's free!</button>
      </div>
      
    </section>
  );
};

export default CTA;