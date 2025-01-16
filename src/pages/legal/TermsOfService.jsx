import React from 'react';
import LegalPage from '../../components/LegalPage';

function TermsOfService() {
  return (
    <LegalPage 
      title="Terms of Service" 
      description="Read TempMailo's terms of service to understand the rules, guidelines, and restrictions for using our temporary email service."
    >
      <div className="legal-section">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using TempMailo's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
      </div>

      <div className="legal-section">
        <h2>2. Service Description</h2>
        <p>TempMailo provides temporary email services that:</p>
        <ul>
          <li>Generate disposable email addresses</li>
          <li>Allow receiving emails for a limited time period</li>
          <li>Automatically delete addresses and messages after expiration</li>
          <li>Provide basic email functionality</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>3. User Responsibilities</h2>
        <p>Users of TempMailo agree to:</p>
        <ul>
          <li>Not use the service for illegal activities</li>
          <li>Not attempt to bypass service limitations</li>
          <li>Not use the service to send spam or malicious content</li>
          <li>Not interfere with the service's operation</li>
          <li>Report any security vulnerabilities or abuse</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>4. Service Limitations</h2>
        <p>Users acknowledge that:</p>
        <ul>
          <li>Email addresses are temporary and will expire</li>
          <li>Messages are automatically deleted after expiration</li>
          <li>Service availability is not guaranteed</li>
          <li>Features may be modified or limited at any time</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>5. Intellectual Property</h2>
        <p>All content, features, and functionality of TempMailo are owned by us and are protected by copyright and other intellectual property laws.</p>
      </div>

      <div className="legal-section">
        <h2>6. Disclaimer of Warranties</h2>
        <p>The service is provided "as is" without warranties of any kind. We do not guarantee:</p>
        <ul>
          <li>Uninterrupted service availability</li>
          <li>Message delivery or retention</li>
          <li>Suitability for specific purposes</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>7. Limitation of Liability</h2>
        <p>TempMailo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
      </div>

      <div className="legal-section">
        <h2>8. Termination</h2>
        <p>We reserve the right to:</p>
        <ul>
          <li>Terminate or suspend access to the service</li>
          <li>Delete email addresses and content</li>
          <li>Modify or discontinue the service</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>9. Changes to Terms</h2>
        <p>We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.</p>
      </div>
    </LegalPage>
  );
}

export default TermsOfService; 