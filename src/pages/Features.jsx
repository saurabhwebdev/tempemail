import React from 'react';
import { Helmet } from 'react-helmet';
import { FiShield, FiClock, FiRefreshCcw, FiTrash2, FiMail, FiLock, FiZap, FiSmartphone } from 'react-icons/fi';

function Features() {
  return (
    <>
      <Helmet>
        <title>TempMailo Features - Temporary Email Service Features</title>
        <meta name="description" content="Explore TempMailo's powerful features: instant email generation, real-time notifications, auto-destruction, and more. Protect your privacy with our disposable email service." />
        <meta name="keywords" content="temporary email features, disposable email service, email privacy, spam protection features" />
        <link rel="canonical" href="https://tempmailbox.com/features" />
      </Helmet>

      <div className="page-container">
        <section className="hero-section">
          <h1>Powerful Features</h1>
          <p className="subtitle">Everything you need in a temporary email service</p>
        </section>

        <section className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FiZap />
            </div>
            <h2>Instant Generation</h2>
            <p>Create a temporary email address in one click. No registration or personal information required.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiRefreshCcw />
            </div>
            <h2>Real-Time Updates</h2>
            <p>Receive emails instantly with automatic inbox updates. No need to manually refresh.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiClock />
            </div>
            <h2>Flexible Duration</h2>
            <p>Emails valid for 1 hour by default, with the option to extend up to 3 hours.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiTrash2 />
            </div>
            <h2>Auto-Destruction</h2>
            <p>All emails and data are automatically deleted after expiration for your privacy.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiMail />
            </div>
            <h2>Full Email Features</h2>
            <p>View HTML emails, attachments, and reply to messages just like a regular email service.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiShield />
            </div>
            <h2>Spam Protection</h2>
            <p>Keep your personal inbox clean by using disposable addresses for sign-ups and services.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiLock />
            </div>
            <h2>Privacy First</h2>
            <p>No logging, no tracking, and no personal data collection. Your privacy is our priority.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiSmartphone />
            </div>
            <h2>Mobile Friendly</h2>
            <p>Fully responsive design works perfectly on all devices and screen sizes.</p>
          </div>
        </section>

        <section className="premium-features">
          <h2>Advanced Features</h2>
          <div className="premium-grid">
            <div className="premium-feature">
              <h3>Custom Domains</h3>
              <p>Coming soon: Use your own domain for temporary email addresses.</p>
            </div>
            <div className="premium-feature">
              <h3>API Access</h3>
              <p>Coming soon: Integrate temporary email functionality into your applications.</p>
            </div>
            <div className="premium-feature">
              <h3>Extended Storage</h3>
              <p>Coming soon: Keep your temporary emails for longer periods.</p>
            </div>
            <div className="premium-feature">
              <h3>Multiple Addresses</h3>
              <p>Coming soon: Manage multiple temporary email addresses simultaneously.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Features; 