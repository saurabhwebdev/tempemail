import React from 'react';
import { Helmet } from 'react-helmet';

function LegalPage({ title, description, children }) {
  return (
    <>
      <Helmet>
        <title>{title} - TempMailo</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="page-container legal-page">
        <section className="hero-section">
          <h1>{title}</h1>
          <p className="subtitle">Last updated: {new Date().toLocaleDateString()}</p>
        </section>

        <section className="legal-content">
          {children}
        </section>

        <section className="legal-footer">
          <p>If you have any questions about these policies, please contact us:</p>
          <div className="contact-info">
            <p>Email: legal@tempmailbox.com</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default LegalPage; 