import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const steps = [
    { number: 1, label: 'Basics', active: true },
    { number: 2, label: 'Nominees', active: false },
    { number: 3, label: 'Assets', active: false },
    { number: 4, label: 'Residuary', active: false },
    { number: 5, label: 'Gifts', active: false },
    { number: 6, label: 'Funeral', active: false },
    { number: 7, label: 'Provisions', active: false },
    { number: 8, label: 'Review', active: false }
  ];

  return (
    <div className="progress-container">
      <div className="header">
        <img src="/images/freewill-logo.png" alt="FreeWill" className="logo" />
        <button className="close-button">×</button>
      </div>
      <h1 className="title">LAST WILL & TESTAMENT</h1>
      <div className="progress-wrapper">
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div key={index} className={`step ${step.active ? 'active' : ''}`}>
              <div className="step-number">{step.number}</div>
              <div className="step-label">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;