import React from 'react';
import './MediaMentions.css';

const MediaMentions = () => {
  const mediaLogos = [
    { name: 'AARP', src: '/brand11.png' },
    { name: 'The New York Times', src: '/brand2.png' },
    { name: 'Yahoo Finance', src: '/brand3.png' },
    { name: 'Forbes', src: '/brand4.png' },
    { name: 'Good Housekeeping', src: '/brand5.png' },
    { name: 'Marie Claire', src: '/brand6.png' }
  ];

  return (
    <section className="media-mentions">
      <div className="media-content">
        <h2>MEDIA MENTIONS</h2>
        <div className="logo-container">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.src} alt={logo.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaMentions;