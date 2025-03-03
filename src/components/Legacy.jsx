import React from 'react';
import './Legacy.css';

const Legacy = () => {
  return (
    <section className="legacy">
      <div className="legacy-content">
        <h2>Leave a lasting legacy</h2>
        <p className="mission">
          We're on a mission to help people plan for the future while doing the most good 
          for the people and causes they care about.
        </p>
        <p className="impact">
          By using FreeWill, you help keep this service free for everyone no matter their 
          circumstances. If you choose to commit a small gift to a nonprofit, you'll also 
          be helping them continue their work for generations to come, all at no cost to 
          you during your lifetime.
        </p>
        <button className="make-will-btn">Make my will today</button>
      </div>
      <div className="legacy-image">
        <img src="/girl3.jpg" alt="Family walking at sunset" />
      </div>
    </section>
  );
};

export default Legacy;