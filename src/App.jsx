import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import EmailBox from './components/EmailBox';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import GDPRCompliance from './pages/legal/GDPRCompliance';
import Support from './pages/contact/Support';
import ReportAbuse from './pages/contact/ReportAbuse';
import Partnerships from './pages/contact/Partnerships';
import APIAccess from './pages/contact/APIAccess';
import SEO from './components/SEO';
import './App.css';

// SEO configurations for each route
const routeSEO = {
  '/': {
    title: 'Secure Temporary Email Service',
    description: 'Generate secure, temporary email addresses instantly. Perfect for testing, privacy, and avoiding spam. Free, fast, and no registration required.',
    type: 'website'
  },
  '/how-it-works': {
    title: 'How It Works',
    description: 'Learn how TempMailo provides secure, temporary email addresses. Simple steps to generate and manage disposable emails for enhanced privacy.',
    type: 'article'
  },
  '/features': {
    title: 'Features',
    description: 'Discover TempMailo\'s powerful features: instant email generation, secure inbox, file attachments, and more. All free, no registration needed.',
    type: 'article'
  },
  '/faq': {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about TempMailo\'s temporary email service. Learn about security, usage, and features.',
    type: 'article'
  },
  '/privacy': {
    title: 'Privacy Policy',
    description: 'Our commitment to your privacy. Learn how TempMailo protects your data and maintains security in our temporary email service.',
    type: 'article'
  },
  '/terms': {
    title: 'Terms of Service',
    description: 'Terms and conditions for using TempMailo\'s temporary email service. Understanding your rights and responsibilities.',
    type: 'article'
  },
  '/cookies': {
    title: 'Cookie Policy',
    description: 'Information about how TempMailo uses cookies to enhance your temporary email service experience.',
    type: 'article'
  },
  '/gdpr': {
    title: 'GDPR Compliance',
    description: 'Details about TempMailo\'s compliance with GDPR regulations and your data protection rights.',
    type: 'article'
  },
  '/support': {
    title: 'Customer Support',
    description: 'Get help with TempMailo\'s temporary email service. Our support team is ready to assist you.',
    type: 'article'
  },
  '/report-abuse': {
    title: 'Report Abuse',
    description: 'Report misuse of TempMailo\'s temporary email service. Help us maintain a safe environment for all users.',
    type: 'article'
  },
  '/partnerships': {
    title: 'Partnership Opportunities',
    description: 'Explore partnership opportunities with TempMailo. Integrate our temporary email service into your platform.',
    type: 'article'
  },
  '/api': {
    title: 'API Documentation',
    description: 'Integrate TempMailo\'s temporary email service into your applications. Comprehensive API documentation and resources.',
    type: 'article'
  }
};

function AppContent() {
  const location = useLocation();
  const currentSEO = routeSEO[location.pathname] || routeSEO['/'];

  // Generate structured data based on the current route
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'TempMailo',
      url: 'https://tempmailbox.com',
      applicationCategory: 'Email Service',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    };

    // Add FAQ structured data for the FAQ page
    if (location.pathname === '/faq') {
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why do we need a temp mail address?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Websites and online services often require a valid email address to register, access or receive protected content, etc. However, the problem is that some of these websites may use our email addresses to send unwanted messages.'
            }
          },
          {
            '@type': 'Question',
            name: 'What\'s a temp mail and how does it work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A temporary email (temp mail) is a disposable email service that creates a temporary email address that self-destructs after a set period. It works by providing you with an instant email address that you can use to receive emails, without revealing your personal email address. Our service automatically deletes the address and all associated emails after one hour for your privacy.'
            }
          },
          {
            '@type': 'Question',
            name: 'Where can I use a temp mail?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Temp mail is perfect for: Signing up for free trials or services, Downloading digital content that requires email verification, Testing website functionalities without using your real email, Protecting your privacy when using online services, Avoiding spam in your personal inbox.'
            }
          },
          {
            '@type': 'Question',
            name: 'How to use disposable email?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Using our temp mail service is simple: 1. Click the "Generate Email Address" button to get a unique email address, 2. Copy the email address using the copy button, 3. Use this email address where needed, 4. Receive and view emails in real-time, 5. Extend the email lifetime if needed, or let it expire automatically.'
            }
          },
          {
            '@type': 'Question',
            name: 'How long do we keep your mail messages?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For your privacy and security: Each email address is valid for 1 hour by default, You can extend the time if needed (up to 3 hours total), All emails and data are automatically deleted when the time expires, You can manually delete individual emails or reset the address at any time, We never store or share your data beyond the temporary period.'
            }
          }
        ]
      };
    }

    // Add article structured data for blog-like pages
    if (currentSEO.type === 'article') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: currentSEO.title,
        description: currentSEO.description,
        publisher: {
          '@type': 'Organization',
          name: 'TempMailo',
          logo: {
            '@type': 'ImageObject',
            url: 'https://tempmailbox.com/logo.png'
          }
        },
        datePublished: '2024-03-21',
        dateModified: new Date().toISOString()
      };
    }

    return baseData;
  };

  return (
    <>
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
        canonical={location.pathname}
        type={currentSEO.type}
        structuredData={getStructuredData()}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<EmailBox />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/gdpr" element={<GDPRCompliance />} />
          <Route path="/support" element={<Support />} />
          <Route path="/report-abuse" element={<ReportAbuse />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/api" element={<APIAccess />} />
        </Routes>
      </Layout>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
