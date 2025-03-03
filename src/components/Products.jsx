import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      icon: '❤️',
      title: 'Living Will',
      description: 'Use an advance healthcare directive, or living will, to specify your healthcare wishes and appoint someone to make decisions on your behalf if you\'re unable.',
      buttonText: 'Learn about living wills',
      bgColor: '#ffebee'
    },
    {
      icon: '💰',
      title: 'Durable Financial Power of Attorney (DFPOA)',
      description: 'Keep your financial accounts accessible and bills paid by appointing someone to make financial decisions on your behalf if you\'re unable.',
      buttonText: 'Learn about DFPOAs',
      bgColor: '#fff3e0'
    },
    {
      icon: '📋',
      title: 'Beneficiary Designations',
      description: 'Document and distribute assets that your last will and testament does not cover, including 401(k)s, IRAs, and life insurance policies.',
      buttonText: 'Learn about beneficiary designations',
      bgColor: '#e8f5e9'
    },
    {
      icon: '🏦',
      title: 'Revocable Living Trusts',
      description: 'Create a revocable living trust and fulfill many functions of a last will and testament. Also, placing assets in a trust can avoid California\'s lengthy probate process.',
      buttonText: 'Learn about trusts',
      bgColor: '#e3f2fd',
      badge: 'Only in California'
    }
  ];

  return (
    <section className="products">
      <h2>Other FreeWill products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card" style={{ backgroundColor: product.bgColor }}>
            <div className="product-icon">{product.icon}</div>
            <div className="product-content">
              <div className="product-header">
                <h3>{product.title}</h3>
                {product.badge && <span className="badge">{product.badge}</span>}
              </div>
              <p>{product.description}</p>
              <button className="learn-more-btn">{product.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;