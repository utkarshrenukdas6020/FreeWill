import React, { useState } from 'react';
import './GetStarted.css';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    email: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="getting-started">
      <h1>Getting started</h1>
      <p className="required-text">Fields marked with * are required.</p>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="name-fields">
          <div className="form-group">
            <label>
              First name<span className="required">*</span>
              <button type="button" className="help-icon">?</button>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Middle name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Last name<span className="required">*</span>
              <button type="button" className="help-icon">?</button>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Preferred name</label>
          <input
            type="text"
            name="preferredName"
            value={formData.preferredName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>
            Email address<span className="required">*</span>
            <button type="button" className="help-icon">?</button>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="terms-checkbox">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          <label htmlFor="agreeToTerms">
            By checking this box, I confirm that I am at least 18 years of age, and that I have read and agree to FreeWill's{' '}
            <a href="#terms">Terms of Service</a> & <a href="#privacy">Privacy Notice</a>.
          </label>
        </div>

        <button type="submit" className="submit-button">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default GetStarted;