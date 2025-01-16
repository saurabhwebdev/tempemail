import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './App.css';

function HomePage() {
  return <EmailBox />;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
    </Router>
  );
}

export default App;
