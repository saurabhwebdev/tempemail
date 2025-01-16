import axios from 'axios';

const API_BASE_URL = import.meta.env.PROD 
  ? import.meta.env.VITE_PRODUCTION_API_URL 
  : import.meta.env.VITE_API_URL;

// Add request interceptor for performance monitoring
axios.interceptors.request.use((config) => {
  config.metadata = { startTime: new Date() };
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add response interceptor for performance monitoring
axios.interceptors.response.use((response) => {
  const endTime = new Date();
  const duration = endTime - response.config.metadata.startTime;
  console.debug(`Request to ${response.config.url} took ${duration}ms`);
  return response;
}, (error) => {
  return Promise.reject(error);
});

class EmailService {
  constructor() {
    this.sessionId = null;
    this.emailAddress = null;
    this.emailTimestamp = null;
    this.cache = new Map();
    this.pendingRequests = new Map();
  }

  // Add request deduplication
  async makeRequest(key, requestFn) {
    // Check if there's a pending request
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key);
    }

    // Create new request
    const request = requestFn().finally(() => {
      this.pendingRequests.delete(key);
    });

    this.pendingRequests.set(key, request);
    return request;
  }

  // Add caching for email fetching
  getCacheKey(emailId) {
    return `email_${emailId}_${this.sessionId}`;
  }

  async initializeSession() {
    try {
      const response = await this.makeRequest('init', () => 
        axios.get(`${API_BASE_URL}/get-email`)
      );
      
      if (response.data) {
        this.emailAddress = response.data.email_addr;
        this.emailTimestamp = response.data.email_timestamp;
        this.sessionId = response.data.sid_token;
        return response.data;
      }
      throw new Error('Failed to initialize session');
    } catch (error) {
      console.error('Session initialization error:', error);
      throw error;
    }
  }

  async checkEmails(seq = 0) {
    try {
      const response = await this.makeRequest(`check_${seq}`, () =>
        axios.get(`${API_BASE_URL}/check-email`, {
          params: {
            seq,
            sid_token: this.sessionId
          }
        })
      );

      if (response.data) {
        if (response.data.email_timestamp) {
          this.emailTimestamp = response.data.email_timestamp;
        }
        
        if (!response.data.list && response.data.sid_token) {
          return {
            list: [],
            count: 0,
            email: this.emailAddress,
            timestamp: this.emailTimestamp
          };
        }

        // Cache individual emails from the list
        if (response.data.list) {
          response.data.list.forEach(email => {
            this.cache.set(this.getCacheKey(email.mail_id), email);
          });
        }

        return {
          list: response.data.list || [],
          count: response.data.count || 0,
          email: response.data.email || this.emailAddress,
          timestamp: response.data.timestamp || this.emailTimestamp
        };
      }
      return { list: [], count: 0 };
    } catch (error) {
      console.error('Check emails error:', error);
      throw error;
    }
  }

  async fetchEmail(emailId) {
    // Check cache first
    const cacheKey = this.getCacheKey(emailId);
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const response = await this.makeRequest(`fetch_${emailId}`, () =>
        axios.get(`${API_BASE_URL}/fetch-email/${emailId}`, {
          params: {
            sid_token: this.sessionId
          }
        })
      );

      // Cache the response
      if (response.data) {
        this.cache.set(cacheKey, response.data);
      }

      return response.data;
    } catch (error) {
      console.error('Fetch email error:', error);
      throw error;
    }
  }

  async deleteEmails(emailIds) {
    try {
      const response = await this.makeRequest(`delete_${emailIds.join('_')}`, () =>
        axios.post(`${API_BASE_URL}/del-email`, {
          email_ids: Array.isArray(emailIds) ? emailIds : [emailIds],
          sid_token: this.sessionId
        })
      );
      
      // Clear cache for deleted emails
      emailIds.forEach(id => {
        this.cache.delete(this.getCacheKey(id));
      });

      if (response.data && response.data.status === 'success') {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Delete emails error:', error);
      throw error;
    }
  }

  async forgetMe() {
    try {
      const response = await this.makeRequest('forget', () =>
        axios.post(`${API_BASE_URL}/forget-email`, {
          email_addr: this.emailAddress,
          sid_token: this.sessionId
        })
      );
      
      if (response.data) {
        this.emailAddress = null;
        this.emailTimestamp = null;
        this.sessionId = null;
        this.cache.clear();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Forget me error:', error);
      throw error;
    }
  }

  isSessionValid() {
    return (
      this.sessionId &&
      this.emailAddress &&
      this.emailTimestamp &&
      this.getTimeRemaining() > 0
    );
  }

  getTimeRemaining() {
    if (!this.emailTimestamp) return 0;
    const now = Math.floor(Date.now() / 1000);
    const remaining = 3600 - (now - this.emailTimestamp);
    
    if (remaining <= 0) {
      this.sessionId = null;
      this.emailAddress = null;
      this.emailTimestamp = null;
      this.cache.clear();
      return 0;
    }
    
    return remaining;
  }

  // Clear cache periodically
  startCacheCleanup() {
    setInterval(() => {
      const now = Date.now();
      for (const [key, value] of this.cache.entries()) {
        if (now - value.timestamp > 3600000) { // 1 hour
          this.cache.delete(key);
        }
      }
    }, 300000); // Clean every 5 minutes
  }
}

const emailService = new EmailService();
emailService.startCacheCleanup();
export default emailService; 