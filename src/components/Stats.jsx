import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat-item">
        <h2>1.2M+</h2>
        <p>Wills created</p>
      </div>
      <div className="stat-item">
        <h2>$11.3B+</h2>
        <p>Committed to nonprofits</p>
      </div>
    </section>
  );
};

export default Stats;