import React from 'react';
import { Helmet } from 'react-helmet';

function HowItWorks() {
  return (
    <div className="page-container">
      <Helmet>
        <title>How It Works - BlinkMail</title>
        <meta name="description" content="Learn how BlinkMail provides instant, secure temporary email addresses. Simple steps to protect your privacy and manage unwanted emails effectively." />
      </Helmet>

      <div className="hero-section">
        <h1>How BlinkMail Works</h1>
        <p className="subtitle">Get a secure temporary email address in seconds</p>
      </div>

      <div className="steps-section">
        <div className="step-card">
          <div className="step-number">1</div>
          <h2>Generate Email</h2>
          <p>Click the "Generate Email" button to instantly create your temporary BlinkMail address. No registration required - it's that simple!</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h2>Use Instantly</h2>
          <p>Use your BlinkMail address wherever you need a temporary email. Perfect for signups, downloads, or testing.</p>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h2>Receive Messages</h2>
          <p>Messages appear instantly in your inbox. View, respond, or delete them with a single click.</p>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <h2>Auto-Cleanup</h2>
          <p>Your temporary inbox automatically cleans up after 24 hours, ensuring your privacy and keeping things tidy.</p>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure & Private</h3>
          <p>Your temporary emails are encrypted and automatically deleted. No personal data is ever stored.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Instant email generation and real-time message delivery. No delays, no waiting.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Zero Spam</h3>
          <p>Keep your real inbox clean. Use BlinkMail for temporary needs and avoid unwanted newsletters.</p>
        </div>
      </div>

      <div className="premium-features">
        <h2>Why Choose BlinkMail?</h2>
        <div className="premium-grid">
          <div className="premium-feature">
            <h3>No Registration</h3>
            <p>Start using BlinkMail instantly - no account creation or personal information required.</p>
          </div>

          <div className="premium-feature">
            <h3>User-Friendly</h3>
            <p>Clean, intuitive interface makes managing temporary emails effortless.</p>
          </div>

          <div className="premium-feature">
            <h3>Always Free</h3>
            <p>All core features are free to use. No hidden fees or premium restrictions.</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Ready to Get Started?</h2>
        <p>Try BlinkMail now and experience the easiest way to manage temporary emails.</p>
        <a href="/" className="contact-button">Generate Email Now</a>
      </div>
    </div>
  );
}

export default HowItWorks; 