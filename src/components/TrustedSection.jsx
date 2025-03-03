import React from 'react';
import './TrustedSection.css';

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-content">
        <h2>Trusted by thousands</h2>
        <p>
          Writing your own will can feel daunting — that's why we worked with the nation's top legal experts to create our
          interactive online will maker. Enter your information and create a last will and testament customized to your wishes.
        </p>
        <p>
          We also have <a href="#estate-planning" className="link">other estate planning products</a> available to help
          you get all your affairs in order.
        </p>
      </div>
      <div className="trusted-image">
        <img src="/girl2.jpg" alt="Happy person" loading="lazy" />
      </div>
    </section>
  );
};

export default TrustedSection;