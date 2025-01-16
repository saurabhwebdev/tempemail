import React, { useState } from 'react';
import ContactPage from '../../components/ContactPage';

function Partnerships() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    website: '',
    partnershipType: '',
    proposal: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Partnership inquiry submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const partnershipTypes = [
    'Technology Integration',
    'API Partnership',
    'Co-Marketing',
    'Reseller Program',
    'Other'
  ];

  return (
    <ContactPage 
      title="Partnerships" 
      description="Explore partnership opportunities with TempMailo and grow together."
    >
      <div className="contact-section">
        <h2>Partnership Opportunities</h2>
        <div className="partnership-types">
          <div className="partnership-type">
            <h3>Technology Integration</h3>
            <p>Integrate our temporary email service into your platform or application.</p>
          </div>
          <div className="partnership-type">
            <h3>API Solutions</h3>
            <p>Build custom solutions using our robust API infrastructure.</p>
          </div>
          <div className="partnership-type">
            <h3>Co-Marketing</h3>
            <p>Collaborate on marketing initiatives and reach new audiences.</p>
          </div>
          <div className="partnership-type">
            <h3>Reseller Program</h3>
            <p>Become an authorized reseller of TempMailo services.</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Partnership Inquiry Form</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactName">Contact Name</label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Business Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="website">Company Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="partnershipType">Partnership Type</label>
            <select
              id="partnershipType"
              name="partnershipType"
              value={formData.partnershipType}
              onChange={handleChange}
              required
            >
              <option value="">Select partnership type</option>
              {partnershipTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="proposal">Partnership Proposal</label>
            <textarea
              id="proposal"
              name="proposal"
              value={formData.proposal}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Describe your partnership proposal and how we can collaborate"
            />
          </div>

          <button type="submit" className="submit-button">Submit Inquiry</button>
        </form>
      </div>

      <div className="contact-section">
        <h2>Why Partner With Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Market Leadership</h3>
            <p>Join forces with a leading temporary email service provider.</p>
          </div>
          <div className="benefit-item">
            <h3>Technical Excellence</h3>
            <p>Access robust API infrastructure and technical support.</p>
          </div>
          <div className="benefit-item">
            <h3>Growth Opportunities</h3>
            <p>Expand your market reach and unlock new revenue streams.</p>
          </div>
          <div className="benefit-item">
            <h3>Dedicated Support</h3>
            <p>Get priority support and resources for your success.</p>
          </div>
        </div>
      </div>
    </ContactPage>
  );
}

export default Partnerships; 