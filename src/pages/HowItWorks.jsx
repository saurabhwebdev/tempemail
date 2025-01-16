import React from 'react';
import { Helmet } from 'react-helmet';

function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How TempMailo Works - Temporary Email Service</title>
        <meta name="description" content="Learn how TempMailo's temporary email service works. Generate disposable email addresses, protect your privacy, and manage unwanted emails effectively." />
        <meta name="keywords" content="temporary email, disposable email, how it works, email privacy, spam protection" />
        <link rel="canonical" href="https://tempmailbox.com/how-it-works" />
      </Helmet>

      <div className="page-container">
        <section className="hero-section">
          <h1>How TempMailo Works</h1>
          <p className="subtitle">Simple, secure, and efficient temporary email service</p>
        </section>

        <section className="steps-section">
          <div className="step-card">
            <div className="step-number">1</div>
            <h2>Generate Email Address</h2>
            <p>Click the "Generate Email Address" button to instantly create a unique, temporary email address that's valid for one hour.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h2>Use Your Temporary Email</h2>
            <p>Copy your temporary email address and use it wherever you need - sign up for services, download content, or test applications.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h2>Receive Messages Instantly</h2>
            <p>All incoming messages appear in real-time in your temporary inbox. No refresh needed - they show up automatically.</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h2>Manage Your Inbox</h2>
            <p>View, delete, or extend the life of your temporary email. All data is automatically deleted after the time expires.</p>
          </div>
        </section>

        <section className="features-highlight">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Privacy Protection</h3>
              <p>Keep your real email address private and avoid spam in your personal inbox.</p>
            </div>
            <div className="benefit-item">
              <h3>No Registration</h3>
              <p>Start using the service instantly - no sign-up or personal information required.</p>
            </div>
            <div className="benefit-item">
              <h3>Auto-Destruction</h3>
              <p>Emails and data are automatically deleted after the specified time period.</p>
            </div>
            <div className="benefit-item">
              <h3>Real-Time Updates</h3>
              <p>Receive and view messages instantly without manual refresh.</p>
            </div>
          </div>
        </section>

        <section className="security-section">
          <h2>Security & Privacy</h2>
          <div className="security-content">
            <p>At TempMailo, we take your privacy seriously. Our service is designed with security in mind:</p>
            <ul>
              <li>No personal data collection or storage</li>
              <li>Automatic data destruction</li>
              <li>Encrypted communication</li>
              <li>No tracking or advertising</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default HowItWorks; 