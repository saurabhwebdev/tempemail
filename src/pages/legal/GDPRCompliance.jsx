import React from 'react';
import LegalPage from '../../components/LegalPage';

function GDPRCompliance() {
  return (
    <LegalPage 
      title="GDPR Compliance" 
      description="Learn about TempMailo's compliance with the General Data Protection Regulation (GDPR) and how we protect EU users' privacy rights."
    >
      <div className="legal-section">
        <h2>1. Our Commitment to GDPR</h2>
        <p>TempMailo is committed to protecting your privacy rights under the General Data Protection Regulation (GDPR). We ensure that:</p>
        <ul>
          <li>Your personal data is processed lawfully and transparently</li>
          <li>Data collection is limited to what is necessary</li>
          <li>Your rights as a data subject are respected</li>
          <li>Data is handled securely and confidentially</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>2. Your Rights Under GDPR</h2>
        <p>As a user, you have the following rights:</p>
        <div className="rights-grid">
          <div className="right-item">
            <h3>Right to Access</h3>
            <p>Request information about your personal data processing</p>
          </div>
          <div className="right-item">
            <h3>Right to Rectification</h3>
            <p>Correct inaccurate personal data</p>
          </div>
          <div className="right-item">
            <h3>Right to Erasure</h3>
            <p>Request deletion of your personal data</p>
          </div>
          <div className="right-item">
            <h3>Right to Restriction</h3>
            <p>Limit how we use your personal data</p>
          </div>
          <div className="right-item">
            <h3>Right to Object</h3>
            <p>Object to processing of your data</p>
          </div>
          <div className="right-item">
            <h3>Data Portability</h3>
            <p>Receive and transfer your personal data</p>
          </div>
        </div>
      </div>

      <div className="legal-section">
        <h2>3. Data Processing Principles</h2>
        <p>We adhere to these GDPR principles:</p>
        <ul>
          <li><strong>Lawfulness:</strong> Processing based on legitimate grounds</li>
          <li><strong>Purpose Limitation:</strong> Data collected for specified purposes</li>
          <li><strong>Data Minimization:</strong> Only necessary data is collected</li>
          <li><strong>Accuracy:</strong> Data is kept accurate and up-to-date</li>
          <li><strong>Storage Limitation:</strong> Data deleted after purpose fulfilled</li>
          <li><strong>Integrity and Confidentiality:</strong> Appropriate security measures</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>4. Data Protection Measures</h2>
        <p>We implement these security measures:</p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments</li>
          <li>Access controls and authentication</li>
          <li>Staff training on data protection</li>
          <li>Incident response procedures</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>5. International Data Transfers</h2>
        <p>For users in the European Economic Area (EEA):</p>
        <ul>
          <li>Data is processed in accordance with GDPR requirements</li>
          <li>Appropriate safeguards are in place for data transfers</li>
          <li>Data transfer agreements comply with EU standards</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>6. Data Breach Procedures</h2>
        <p>In case of a data breach, we will:</p>
        <ul>
          <li>Notify relevant supervisory authorities within 72 hours</li>
          <li>Inform affected users without undue delay</li>
          <li>Investigate and remediate the breach</li>
          <li>Implement measures to prevent future breaches</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>7. Contact Our DPO</h2>
        <p>For GDPR-related inquiries, contact our Data Protection Officer:</p>
        <div className="contact-details">
          <p>Email: dpo@tempmailbox.com</p>
          <p>Address: [DPO Office Address]</p>
          <p>Phone: [DPO Contact Number]</p>
        </div>
      </div>
    </LegalPage>
  );
}

export default GDPRCompliance; 