import React from 'react';
import { Helmet } from 'react-helmet';

function ContactPage({ title, description, children }) {
  return (
    <>
      <Helmet>
        <title>{title} - BlinkMail</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="page-container contact-page">
        <section className="hero-section">
          <h1>{title}</h1>
          <p className="subtitle">{description}</p>
        </section>

        <section className="contact-content">
          {children}
        </section>

        <section className="contact-footer">
          <p>Need immediate assistance?</p>
          <div className="contact-info">
            <p>Email: support@blinkmail.xyz</p>
            <p>Response Time: Within 24 hours</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactPage; 