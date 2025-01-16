import React from 'react';
import EmailBox from './components/EmailBox';
import './App.css';
import { TwitterIcon, FacebookIcon, RedditIcon, ShareIcon } from './components/Icons';

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo">
          <h1>TempMailo</h1>
        </div>
      </header>
      <main>
        <EmailBox />
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
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR Compliance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li><a href="#">Support</a></li>
              <li><a href="#">Report Abuse</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">API Access</a></li>
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

export default App;
