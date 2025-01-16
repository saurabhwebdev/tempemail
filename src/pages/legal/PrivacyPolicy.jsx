import React from 'react';
import LegalPage from '../../components/LegalPage';

function PrivacyPolicy() {
  return (
    <LegalPage 
      title="Privacy Policy" 
      description="Learn about how TempMailo collects, uses, and protects your personal information. Our privacy policy explains our commitment to data protection and user privacy."
    >
      <div className="legal-section">
        <h2>1. Information We Collect</h2>
        <p>TempMailo is designed with privacy in mind. We collect minimal information necessary to provide our temporary email service:</p>
        <ul>
          <li>Temporary email addresses generated through our service</li>
          <li>Email messages received during the active period</li>
          <li>Basic usage metrics (non-personally identifiable)</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>2. How We Use Your Information</h2>
        <p>The information we collect is used solely for:</p>
        <ul>
          <li>Providing the temporary email service</li>
          <li>Maintaining and improving our service</li>
          <li>Preventing abuse and ensuring security</li>
          <li>Complying with legal obligations</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>3. Data Retention</h2>
        <p>We follow strict data retention policies:</p>
        <ul>
          <li>Temporary email addresses are automatically deleted after expiration (1-3 hours)</li>
          <li>All associated emails are permanently deleted upon address expiration</li>
          <li>No backups of expired addresses or emails are maintained</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>4. Information Sharing</h2>
        <p>We do not sell, trade, or share your information with third parties. Information may only be disclosed:</p>
        <ul>
          <li>When required by law</li>
          <li>To protect our rights or property</li>
          <li>To prevent abuse of our service</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>5. Security Measures</h2>
        <p>We implement various security measures to protect your information:</p>
        <ul>
          <li>Encryption of data in transit</li>
          <li>Regular security assessments</li>
          <li>Access controls and monitoring</li>
          <li>Automated data deletion</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Delete your temporary email address at any time</li>
          <li>Request information about your data</li>
          <li>Report abuse or security concerns</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>7. Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify users of any material changes by posting the new policy on this page.</p>
      </div>
    </LegalPage>
  );
}

export default PrivacyPolicy; 