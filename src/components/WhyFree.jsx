import React from 'react';
import './WhyFree.css';

const WhyFree = () => {
  const benefits = [
    {
      icon: '💳',
      text: '100% free — no credit card required'
    },
    {
      icon: '🤝',
      text: 'Supported by nonprofits'
    },
    {
      icon: '🔒',
      text: 'We never sell your personal data'
    }
  ];

  return (
    <section className="why-free">
      <div className="why-free-content">
        <h2>Why is FreeWill free?</h2>
        <p className="mission">
          Our mission is to enable you to do the most good for the people and causes you love, 
          by providing free access to will-making services. We've partnered with 1900+ nonprofits 
          and businesses who support our mission and help ensure you can create a will for free, 
          while raising more than $11.3B+ in bequests to charities.
        </p>
        <p className="impact">
          One in six people who use FreeWill choose to leave a bequest to charity. They believe, 
          as we do, that leaving a bequest to nonprofit organizations in your will can be an 
          incredibly powerful way to make an impact for the causes you support.
        </p>
        <button className="make-will-btn">Make your free will today</button>
      </div>
      <div className="benefits-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <span className="benefit-icon">{benefit.icon}</span>
            <span className="benefit-text">{benefit.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyFree;