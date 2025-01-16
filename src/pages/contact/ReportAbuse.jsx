import React, { useState } from 'react';
import ContactPage from '../../components/ContactPage';

function ReportAbuse() {
  const [formData, setFormData] = useState({
    reporterEmail: '',
    abuseType: '',
    offendingEmail: '',
    evidence: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Abuse report submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const abuseTypes = [
    'Spam',
    'Phishing',
    'Malware',
    'Harassment',
    'Illegal Content',
    'Other'
  ];

  return (
    <ContactPage 
      title="Report Abuse" 
      description="Help us maintain a safe environment by reporting any misuse of our service."
    >
      <div className="contact-section">
        <h2>Report Abuse Form</h2>
        <p className="section-description">
          We take abuse reports seriously and investigate each case thoroughly. Please provide as much detail as possible to help us address the issue.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="reporterEmail">Your Email</label>
            <input
              type="email"
              id="reporterEmail"
              name="reporterEmail"
              value={formData.reporterEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="abuseType">Type of Abuse</label>
            <select
              id="abuseType"
              name="abuseType"
              value={formData.abuseType}
              onChange={handleChange}
              required
            >
              <option value="">Select abuse type</option>
              {abuseTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="offendingEmail">Offending Email Address</label>
            <input
              type="text"
              id="offendingEmail"
              name="offendingEmail"
              value={formData.offendingEmail}
              onChange={handleChange}
              placeholder="The temporary email address involved"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="evidence">Evidence (URLs, screenshots, email headers)</label>
            <textarea
              id="evidence"
              name="evidence"
              value={formData.evidence}
              onChange={handleChange}
              rows="3"
              placeholder="Paste relevant links or evidence here"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Detailed Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Please describe the abuse in detail"
            />
          </div>

          <button type="submit" className="submit-button">Submit Report</button>
        </form>
      </div>

      <div className="contact-section">
        <h2>Our Commitment</h2>
        <div className="commitment-grid">
          <div className="commitment-item">
            <h3>Quick Response</h3>
            <p>We aim to review all abuse reports within 24 hours.</p>
          </div>
          <div className="commitment-item">
            <h3>Thorough Investigation</h3>
            <p>Each report is carefully investigated by our security team.</p>
          </div>
          <div className="commitment-item">
            <h3>Appropriate Action</h3>
            <p>We take necessary measures to prevent further abuse.</p>
          </div>
        </div>
      </div>
    </ContactPage>
  );
}

export default ReportAbuse; 