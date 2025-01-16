import React, { useState } from 'react';
import ContactPage from '../../components/ContactPage';

function APIAccess() {
  const [formData, setFormData] = useState({
    companyName: '',
    developerName: '',
    email: '',
    useCase: '',
    estimatedRequests: '',
    technicalDetails: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('API access request submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactPage 
      title="API Access" 
      description="Integrate TempMailo's powerful email API into your applications."
    >
      <div className="contact-section">
        <h2>API Overview</h2>
        <div className="api-features">
          <div className="api-feature">
            <h3>RESTful API</h3>
            <p>Simple and intuitive REST API with comprehensive documentation.</p>
            <ul>
              <li>Generate temporary email addresses</li>
              <li>Check inbox messages</li>
              <li>Download attachments</li>
              <li>Manage email lifecycle</li>
            </ul>
          </div>
          <div className="api-feature">
            <h3>Enterprise Features</h3>
            <p>Advanced features for business needs:</p>
            <ul>
              <li>Bulk email generation</li>
              <li>Webhook notifications</li>
              <li>Custom domain support</li>
              <li>Advanced filtering</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Request API Access</h2>
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
            <label htmlFor="developerName">Developer Name</label>
            <input
              type="text"
              id="developerName"
              name="developerName"
              value={formData.developerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Developer Email</label>
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
            <label htmlFor="useCase">Use Case</label>
            <textarea
              id="useCase"
              name="useCase"
              value={formData.useCase}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Describe how you plan to use our API"
            />
          </div>

          <div className="form-group">
            <label htmlFor="estimatedRequests">Estimated Monthly Requests</label>
            <select
              id="estimatedRequests"
              name="estimatedRequests"
              value={formData.estimatedRequests}
              onChange={handleChange}
              required
            >
              <option value="">Select volume</option>
              <option value="1-1000">1-1,000</option>
              <option value="1001-10000">1,001-10,000</option>
              <option value="10001-100000">10,001-100,000</option>
              <option value="100001+">100,000+</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="technicalDetails">Technical Requirements</label>
            <textarea
              id="technicalDetails"
              name="technicalDetails"
              value={formData.technicalDetails}
              onChange={handleChange}
              rows="3"
              placeholder="Any specific technical requirements or questions?"
            />
          </div>

          <button type="submit" className="submit-button">Request Access</button>
        </form>
      </div>

      <div className="contact-section">
        <h2>API Documentation</h2>
        <div className="api-docs">
          <div className="doc-section">
            <h3>Quick Start</h3>
            <pre className="code-block">
              {`curl -X POST https://api.tempmailbox.com/v1/email/generate 
  -H "Authorization: Bearer YOUR_API_KEY" 
  -H "Content-Type: application/json"`}
            </pre>
          </div>

          <div className="doc-section">
            <h3>Rate Limits</h3>
            <ul>
              <li>Free tier: 100 requests/hour</li>
              <li>Basic tier: 1,000 requests/hour</li>
              <li>Premium tier: 10,000 requests/hour</li>
              <li>Enterprise tier: Custom limits</li>
            </ul>
          </div>

          <div className="doc-section">
            <h3>Sample Response</h3>
            <pre className="code-block">
              {`{
  "email": "user123@tempmailbox.com",
  "expires_in": 3600,
  "created_at": "2024-03-21T10:00:00Z"
}`}
            </pre>
          </div>
        </div>
      </div>
    </ContactPage>
  );
}

export default APIAccess; 