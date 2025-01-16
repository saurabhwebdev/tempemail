import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, FacebookIcon, RedditIcon, ShareIcon } from './Icons';

function Layout({ children }) {
  return (
    <div className="app-container">
      <header>
        <div className="logo">
          <Link to="/">
            <h1>TempMailo</h1>
          </Link>
        </div>
        <nav className="main-nav">
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/features">Features</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About TempMailo</h3>
            <p>TempMailo provides secure, disposable email addresses for your temporary email needs. Protect your privacy and avoid spam while maintaining your online presence.</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Reddit"><RedditIcon /></a>
              <a href="#" aria-label="Share"><ShareIcon /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
              <li><Link to="/gdpr">GDPR Compliance</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/report">Report Abuse</Link></li>
              <li><Link to="/partnerships">Partnerships</Link></li>
              <li><Link to="/api">API Access</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright ©{new Date().getFullYear()} TempMailo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 