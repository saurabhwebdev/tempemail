import React, { useState, useEffect } from 'react';
import { FiCopy, FiRefreshCw, FiTrash2, FiClock } from 'react-icons/fi';
import emailService from '../services/emailService';

function EmailBox() {
  const [emailAddress, setEmailAddress] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [nextRefresh, setNextRefresh] = useState(5);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    initializeEmail();
  }, []);

  useEffect(() => {
    let checkEmailsInterval;
    let timeRemainingInterval;
    let refreshCountdownInterval;

    if (emailAddress) {
      // Check for new emails every 5 seconds
      checkEmailsInterval = setInterval(() => {
        setIsRefreshing(true);
        checkNewEmails();
        setNextRefresh(5);
      }, 5000);

      // Update time remaining every second
      timeRemainingInterval = setInterval(updateTimeRemaining, 1000);

      // Update refresh countdown
      refreshCountdownInterval = setInterval(() => {
        setNextRefresh(prev => Math.max(0, prev - 1));
      }, 1000);

      // Initial check for emails
      setIsRefreshing(true);
      checkNewEmails();

      return () => {
        clearInterval(checkEmailsInterval);
        clearInterval(timeRemainingInterval);
        clearInterval(refreshCountdownInterval);
      };
    }
    return undefined;
  }, [emailAddress]);

  const initializeEmail = async () => {
    try {
      setLoading(true);
      const response = await emailService.initializeSession();
      setEmailAddress(response.email_addr);
      updateTimeRemaining();
      await checkNewEmails();
    } catch (error) {
      setError('Failed to initialize email service');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const checkNewEmails = async () => {
    try {
      // Get the highest mail_id from current messages
      const lastEmailId = messages.length > 0 
        ? Math.max(...messages.map(msg => parseInt(msg.mail_id)))
        : 0;

      const response = await emailService.checkEmails(lastEmailId);
      
      if (response.list && Array.isArray(response.list)) {
        setMessages(prevMessages => {
          // Filter out duplicates and sort by timestamp (newest first)
          const allMessages = [...response.list, ...prevMessages];
          const uniqueMessages = Array.from(
            new Map(allMessages.map(msg => [msg.mail_id, msg])).values()
          );
          return uniqueMessages.sort((a, b) => b.mail_timestamp - a.mail_timestamp);
        });
      }
    } catch (error) {
      console.error('Failed to fetch emails:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const updateTimeRemaining = () => {
    const remaining = emailService.getTimeRemaining();
    setTimeRemaining(remaining);
    
    // Only clear emails if the time has actually expired
    if (remaining <= 0) {
      setEmailAddress('');
      setMessages([]);
    }
  };

  const handleForgetMe = async () => {
    try {
      setLoading(true);
      await emailService.forgetMe();
      setEmailAddress('');
      setMessages([]);
      initializeEmail();
    } catch (error) {
      setError('Failed to reset email address');
    } finally {
      setLoading(false);
    }
  };

  const handleExtendTime = async () => {
    try {
      const response = await emailService.extendEmailLife();
      if (response && !response.expired) {
        updateTimeRemaining();
      }
    } catch (error) {
      setError('Failed to extend email lifetime');
    }
  };

  const handleDeleteEmail = async (emailId) => {
    try {
      setLoading(true);
      await emailService.deleteEmails([emailId]);
      setMessages(prevMessages => prevMessages.filter(msg => msg.mail_id !== emailId));
      if (selectedEmail?.mail_id === emailId) {
        setSelectedEmail(null);
      }
    } catch (error) {
      setError('Failed to delete email');
      console.error('Delete email error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailClick = async (emailId) => {
    try {
      const emailData = await emailService.fetchEmail(emailId);
      setSelectedEmail(emailData);
    } catch (error) {
      setError('Failed to fetch email content');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setError('Failed to copy to clipboard');
    }
  };

  const formatTimeRemaining = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="email-container">
      {error && (
        <div className="error-message">
          {error}
          <button className="close-button" onClick={() => setError(null)}>×</button>
        </div>
      )}

      <div className="email-controls">
        <div className="email-address-box">
          {emailAddress ? (
            <>
              <span className="email-text">{emailAddress}</span>
              <div className="time-remaining">
                <FiClock />
                <span>{formatTimeRemaining(timeRemaining)}</span>
              </div>
              <button 
                className="icon-button"
                onClick={copyToClipboard}
                title="Copy to clipboard"
              >
                <FiCopy />
                {copied && <span className="copied-tooltip">Copied!</span>}
              </button>
            </>
          ) : (
            <button 
              className="generate-button"
              onClick={initializeEmail}
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Generate Email Address'}
            </button>
          )}
        </div>
        
        <div className="action-buttons">
          <button 
            className={`icon-button ${isRefreshing ? 'spin' : ''}`}
            onClick={() => {
              setIsRefreshing(true);
              checkNewEmails();
              setNextRefresh(5);
            }}
            title="Refresh inbox"
            disabled={!emailAddress || isRefreshing}
          >
            <FiRefreshCw />
          </button>
          <button 
            className="icon-button"
            onClick={handleForgetMe}
            title="New email address"
            disabled={!emailAddress}
          >
            <FiTrash2 />
          </button>
          <button
            className="extend-button"
            onClick={handleExtendTime}
            disabled={!emailAddress || timeRemaining > 1800}
          >
            Extend Time
          </button>
        </div>
      </div>

      <div className="inbox-container">
        <div className={`inbox-header ${isRefreshing ? 'refreshing' : ''}`}>
          <div className="inbox-header-left">
            <h2>Inbox</h2>
            <span className="message-count">{messages.length} messages</span>
          </div>
          <div className="inbox-header-right">
            <span className={`next-refresh ${isRefreshing ? 'refreshing' : ''}`}>
              {isRefreshing ? 'Refreshing...' : `Next refresh in ${nextRefresh}s`}
            </span>
          </div>
        </div>
        
        <div className="messages-list">
          {messages.length === 0 ? (
            <div className="empty-inbox">
              <p>Your inbox is empty</p>
              <small>Waiting for new messages...</small>
            </div>
          ) : (
            messages.map((message) => (
              <div 
                key={message.mail_id} 
                className={`message-item ${selectedEmail?.mail_id === message.mail_id ? 'selected' : ''}`}
                onClick={() => handleEmailClick(message.mail_id)}
              >
                <div className="message-content">
                  <div className="message-sender">{message.mail_from}</div>
                  <div className="message-subject">{message.mail_subject}</div>
                  <div className="message-preview">{message.mail_excerpt}</div>
                </div>
                <div className="message-time">
                  {new Date(message.mail_timestamp * 1000).toLocaleTimeString()}
                </div>
                <div className="message-actions">
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteEmail(message.mail_id);
                    }}
                    title="Delete email"
                    disabled={loading}
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="faq-section">
          <h2>Why use BlinkMail?</h2>
          <p>
            Need a quick email address for signing up or testing? BlinkMail generates secure, disposable email addresses in a blink. Perfect for protecting your privacy and keeping your main inbox spam-free.
          </p>
          
          <div className="faq-items">
            <div className="faq-item" onClick={() => setExpandedFaq(expandedFaq === 'what' ? null : 'what')}>
              <div className="faq-question">
                What's BlinkMail and how does it work?
                <span className={expandedFaq === 'what' ? 'expanded' : ''}>›</span>
              </div>
              {expandedFaq === 'what' && (
                <div className="faq-answer">
                  BlinkMail is an instant temporary email service that creates disposable email addresses that self-destruct after a set period. It works by providing you with an instant email address that you can use to receive emails, without revealing your personal email address. Our service automatically deletes the address and all associated emails after one hour for your privacy.
                </div>
              )}
            </div>
            <div className="faq-item" onClick={() => setExpandedFaq(expandedFaq === 'where' ? null : 'where')}>
              <div className="faq-question">
                Where can I use BlinkMail?
                <span className={expandedFaq === 'where' ? 'expanded' : ''}>›</span>
              </div>
              {expandedFaq === 'where' && (
                <div className="faq-answer">
                  BlinkMail is perfect for:
                  <ul>
                    <li>Signing up for free trials or services</li>
                    <li>Downloading digital content that requires email verification</li>
                    <li>Testing website functionalities without using your real email</li>
                    <li>Protecting your privacy when using online services</li>
                    <li>Avoiding spam in your personal inbox</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="faq-item" onClick={() => setExpandedFaq(expandedFaq === 'how' ? null : 'how')}>
              <div className="faq-question">
                How to use BlinkMail?
                <span className={expandedFaq === 'how' ? 'expanded' : ''}>›</span>
              </div>
              {expandedFaq === 'how' && (
                <div className="faq-answer">
                  Using BlinkMail is simple:
                  <ol>
                    <li>Click the "Generate Email Address" button to get a unique email address</li>
                    <li>Copy the email address using the copy button</li>
                    <li>Use this email address where needed</li>
                    <li>Receive and view emails in real-time</li>
                    <li>Extend the email lifetime if needed, or let it expire automatically</li>
                  </ol>
                </div>
              )}
            </div>
            <div className="faq-item" onClick={() => setExpandedFaq(expandedFaq === 'duration' ? null : 'duration')}>
              <div className="faq-question">
                How long do we keep your mail messages?
                <span className={expandedFaq === 'duration' ? 'expanded' : ''}>›</span>
              </div>
              {expandedFaq === 'duration' && (
                <div className="faq-answer">
                  For your privacy and security:
                  <ul>
                    <li>Each email address is valid for 1 hour by default</li>
                    <li>You can extend the time if needed (up to 3 hours total)</li>
                    <li>All emails and data are automatically deleted when the time expires</li>
                    <li>You can manually delete individual emails or reset the address at any time</li>
                    <li>We never store or share your data beyond the temporary period</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {selectedEmail && (
          <div className="email-content-modal">
            <div className="modal-content">
              <button className="close-button" onClick={() => setSelectedEmail(null)}>×</button>
              <h3>{selectedEmail.mail_subject}</h3>
              <div className="email-meta">
                <p>From: {selectedEmail.mail_from}</p>
                <p>Date: {new Date(selectedEmail.mail_timestamp * 1000).toLocaleString()}</p>
              </div>
              <div 
                className="email-body"
                dangerouslySetInnerHTML={{ __html: selectedEmail.mail_body }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailBox; 