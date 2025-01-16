import React, { useState } from 'react';
import ContactPage from '../../components/ContactPage';

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactPage 
      title="Support" 
      description="Get help with TempMailo services. Our support team is here to assist you."
    >
      <div className="contact-section">
        <h2>Contact Support</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-section">
        <h2>Common Issues</h2>
        <div className="quick-help">
          <div className="help-item">
            <h3>Email Not Received</h3>
            <p>Check if the sender's email was sent correctly and verify your temporary email hasn't expired.</p>
          </div>
          <div className="help-item">
            <h3>Email Expired</h3>
            <p>Temporary emails expire after their set duration. Generate a new email address to continue.</p>
          </div>
          <div className="help-item">
            <h3>Technical Issues</h3>
            <p>Clear your browser cache and cookies, then refresh the page to resolve common technical issues.</p>
          </div>
        </div>
      </div>
    </ContactPage>
  );
}

export default Support; 