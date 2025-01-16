import React from 'react';
import LegalPage from '../../components/LegalPage';

function CookiePolicy() {
  return (
    <LegalPage 
      title="Cookie Policy" 
      description="Understand how TempMailo uses cookies and similar technologies. Learn about our cookie policy and how it affects your privacy."
    >
      <div className="legal-section">
        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files that are placed on your device when you visit our website. They help provide you with a better experience by:</p>
        <ul>
          <li>Remembering your preferences</li>
          <li>Understanding how you use our service</li>
          <li>Improving website performance</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>2. How We Use Cookies</h2>
        <p>TempMailo uses cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for basic service functionality</li>
          <li><strong>Performance Cookies:</strong> Help us understand how users interact with our service</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>3. Types of Cookies We Use</h2>
        <div className="cookie-types">
          <div className="cookie-type">
            <h3>Essential Cookies</h3>
            <ul>
              <li>Session management</li>
              <li>Security features</li>
              <li>Basic functionality</li>
            </ul>
          </div>
          
          <div className="cookie-type">
            <h3>Performance Cookies</h3>
            <ul>
              <li>Usage statistics</li>
              <li>Error monitoring</li>
              <li>Service optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="legal-section">
        <h2>4. Cookie Management</h2>
        <p>You can control cookies through your browser settings:</p>
        <ul>
          <li>Block all cookies</li>
          <li>Delete existing cookies</li>
          <li>Allow cookies from specific sites</li>
          <li>Set cookie preferences</li>
        </ul>
        <p>Note: Blocking essential cookies may affect service functionality.</p>
      </div>

      <div className="legal-section">
        <h2>5. Third-Party Cookies</h2>
        <p>We minimize the use of third-party cookies. When used, they are for:</p>
        <ul>
          <li>Performance monitoring</li>
          <li>Security features</li>
          <li>Service improvements</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>6. Cookie Duration</h2>
        <p>We use two types of cookies based on duration:</p>
        <ul>
          <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
          <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>7. Updates to This Policy</h2>
        <p>We may update this cookie policy to reflect:</p>
        <ul>
          <li>Changes in how we use cookies</li>
          <li>New regulatory requirements</li>
          <li>Service improvements</li>
        </ul>
      </div>
    </LegalPage>
  );
}

export default CookiePolicy; 