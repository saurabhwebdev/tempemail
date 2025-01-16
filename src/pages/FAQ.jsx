import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiChevronRight } from 'react-icons/fi';

function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      id: 'what',
      question: "What's a temporary email and how does it work?",
      answer: "A temporary email (temp mail) is a disposable email service that creates a temporary email address that self-destructs after a set period. It works by providing you with an instant email address that you can use to receive emails, without revealing your personal email address. Our service automatically deletes the address and all associated emails after one hour for your privacy."
    },
    {
      id: 'where',
      question: "Where can I use a temporary email?",
      answer: <>
        Temp mail is perfect for:
        <ul>
          <li>Signing up for free trials or services</li>
          <li>Downloading digital content that requires email verification</li>
          <li>Testing website functionalities without using your real email</li>
          <li>Protecting your privacy when using online services</li>
          <li>Avoiding spam in your personal inbox</li>
        </ul>
      </>
    },
    {
      id: 'how',
      question: "How do I use TempMailo?",
      answer: <>
        Using our temp mail service is simple:
        <ol>
          <li>Click the "Generate Email Address" button to get a unique email address</li>
          <li>Copy the email address using the copy button</li>
          <li>Use this email address where needed</li>
          <li>Receive and view emails in real-time</li>
          <li>Extend the email lifetime if needed, or let it expire automatically</li>
        </ol>
      </>
    },
    {
      id: 'duration',
      question: "How long do emails last?",
      answer: <>
        For your privacy and security:
        <ul>
          <li>Each email address is valid for 1 hour by default</li>
          <li>You can extend the time if needed (up to 3 hours total)</li>
          <li>All emails and data are automatically deleted when the time expires</li>
          <li>You can manually delete individual emails or reset the address at any time</li>
          <li>We never store or share your data beyond the temporary period</li>
        </ul>
      </>
    },
    {
      id: 'safe',
      question: "Is TempMailo safe to use?",
      answer: "Yes, TempMailo is completely safe to use. We prioritize your privacy and security by not collecting any personal information, automatically deleting all data after expiration, and using encrypted connections. We also don't display any ads or track user behavior."
    },
    {
      id: 'attachments',
      question: "Can I receive attachments?",
      answer: "Yes, you can receive attachments through your temporary email address. However, for security reasons, we scan all attachments for viruses and limit the maximum file size to protect our users."
    },
    {
      id: 'multiple',
      question: "Can I create multiple email addresses?",
      answer: "Currently, you can use one temporary email address at a time. When you generate a new address, the previous one is automatically deactivated. This helps us maintain service quality and prevent abuse."
    },
    {
      id: 'reply',
      question: "Can I reply to emails?",
      answer: "Yes, you can reply to emails received in your temporary inbox. However, remember that the recipient will see your temporary email address as the sender, and any replies will only be receivable while your temporary address is active."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - TempMailo</title>
        <meta name="description" content="Find answers to common questions about TempMailo's temporary email service. Learn how to use disposable email addresses, manage your privacy, and avoid spam." />
        <meta name="keywords" content="temporary email FAQ, disposable email questions, email privacy FAQ, spam protection help" />
        <link rel="canonical" href="https://tempmailbox.com/faq" />
      </Helmet>

      <div className="page-container">
        <section className="hero-section">
          <h1>Frequently Asked Questions</h1>
          <p className="subtitle">Find answers to common questions about our service</p>
        </section>

        <section className="faq-container">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="faq-item"
              onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
            >
              <div className="faq-question">
                {faq.question}
                <FiChevronRight className={expandedFaq === faq.id ? 'expanded' : ''} />
              </div>
              {expandedFaq === faq.id && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="contact-section">
          <h2>Still have questions?</h2>
          <p>If you couldn't find the answer you were looking for, feel free to contact our support team.</p>
          <a href="/support" className="contact-button">Contact Support</a>
        </section>
      </div>
    </>
  );
}

export default FAQ; 