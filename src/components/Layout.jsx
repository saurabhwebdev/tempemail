import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, FacebookIcon, RedditIcon, ShareIcon } from './Icons';

function Layout({ children }) {
  return (
    <div className="app-container">
      <header>
        <div className="logo">
          <Link to="/">
            <svg 
              className="logo-icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M19,4 L5,4 C3.89543,4 3,4.89543 3,6 L3,18 C3,19.1046 3.89543,20 5,20 L19,20 C20.1046,20 21,19.1046 21,18 L21,6 C21,4.89543 20.1046,4 19,4 Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M3,6 L10.5858,13.5858 C11.3668,14.3668 12.6332,14.3668 13.4142,13.5858 L21,6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
            <h1>BlinkMail</h1>
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
            <h3>About BlinkMail</h3>
            <p>BlinkMail provides instant, disposable email addresses for your temporary email needs. Protect your privacy and avoid spam while maintaining your online presence.</p>
            <div className="social-links">
              <a href="https://twitter.com/blinkmailxyz" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
              <a href="https://facebook.com/blinkmailxyz" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://reddit.com/r/blinkmail" target="_blank" rel="noopener noreferrer" aria-label="Reddit"><RedditIcon /></a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out BlinkMail - Generate secure, temporary email addresses in a blink! 📧✨')}&url=${encodeURIComponent('https://blinkmail.xyz')}`} target="_blank" rel="noopener noreferrer" aria-label="Share"><ShareIcon /></a>
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
              <li><Link to="/report-abuse">Report Abuse</Link></li>
              <li><Link to="/partnerships">Partnerships</Link></li>
              <li><Link to="/api">API Access</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright ©{new Date().getFullYear()} BlinkMail. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 