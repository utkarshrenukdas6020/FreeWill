import React from 'react';
import './Faq.css';

const Faq = () => {
  const resources = [
    {
      icon: '📄',
      text: 'Estate planning 101'
    },
    {
      icon: '📋',
      text: '10 reasons to have a will'
    },
    {
      icon: '📑',
      text: 'Last will vs. living will'
    }
  ];

  return (
    <section className="faq">
      <div className="faq-content">
        <h2>Frequently asked questions</h2>
        
        <div className="question">
          <h3>Can I edit my documents after I'm done?</h3>
          <p>
            You can update your documents on FreeWill at any time, free of charge. 
            We know life is always changing, and we're here to help you keep your 
            wishes up to date.
          </p>
        </div>

        <div className="question">
          <h3>Where can I learn more?</h3>
          <p>
            <a href="#blog" className="blog-link">Visit the FreeWill blog</a> to read 
            articles about the important world of estate planning. Below are also some 
            popular resources to help you get started:
          </p>
          
          <div className="resources">
            {resources.map((resource, index) => (
              <div key={index} className="resource-item">
                <span className="resource-icon">{resource.icon}</span>
                <span className="resource-text">{resource.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;