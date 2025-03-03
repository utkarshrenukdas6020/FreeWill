import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Fill out online',
      description: 'Just follow the step-by-step instructions to fill out the necessary information for your forms.'
    },
    {
      number: '2',
      title: 'Print out documents',
      description: 'The information you provided is turned into precise legal language, and provided back to you as a printable document.'
    },
    {
      number: '3',
      title: 'Sign and keep safe',
      description: 'Follow attached instructions to print, sign, and make your document official. Keep it somewhere safe, but accessible.'
    }
  ];

  return (
    <section className="how-it-works">
      <h2>How FreeWill works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div className="legal-note">
        <div className="legal-icon">⚖️</div>
        <p>
          We understand that online estate planning isn't suitable for everyone. If you have complex needs, 
          we encourage you to seek legal counsel. As you answer questions on FreeWill, we'll point out where 
          an attorney may be a better fit. We'll also provide your responses in an easy-to-read summary, 
          which you can print and bring to your attorney to save time.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;