import express from 'express';
import cors from 'cors';
import axios from 'axios';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import helmet from 'helmet';

const app = express();
const API_BASE_URL = 'https://api.guerrillamail.com/ajax.php';

// Security headers
app.use(helmet());

// Enable compression
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://tempemail-frontend.onrender.com',
        'https://tempemail-api.onrender.com',
        /\.onrender\.com$/      // Allow all Render domains
      ]
    : [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
        'http://127.0.0.1:5173',
        'http://127.0.0.1:5174',
        'http://127.0.0.1:5175'
      ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Also add OPTIONS handling for preflight requests
app.options('*', cors(corsOptions));

app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Helper function to forward requests
async function forwardRequest(params, method = 'GET') {
  try {
    const config = {
      method,
      url: API_BASE_URL,
      timeout: 5000, // 5 second timeout
      retry: 3, // Retry failed requests 3 times
      retryDelay: 1000 // Wait 1 second between retries
    };

    if (method === 'GET') {
      config.params = {
        ...params,
        ip: '127.0.0.1',
        agent: 'GuerrillaMail API Client'
      };
    } else {
      const formData = new URLSearchParams();
      Object.entries({ ...params, ip: '127.0.0.1', agent: 'GuerrillaMail API Client' })
        .forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach(v => formData.append(key + '[]', v));
          } else {
            formData.append(key, value);
          }
        });
      config.data = formData;
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
}

// Routes
app.get('/api/get-email', async (req, res) => {
  try {
    const data = await forwardRequest({
      f: 'get_email_address',
      lang: 'en'
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get email address' });
  }
});

app.get('/api/check-email', async (req, res) => {
  try {
    const data = await forwardRequest({
      f: 'check_email',
      seq: req.query.seq || 0,
      sid_token: req.query.sid_token
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to check emails' });
  }
});

app.get('/api/fetch-email/:id', async (req, res) => {
  try {
    const data = await forwardRequest({
      f: 'fetch_email',
      email_id: req.params.id,
      sid_token: req.query.sid_token
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch email' });
  }
});

app.post('/api/del-email', async (req, res) => {
  try {
    const data = await forwardRequest({
      f: 'del_email',
      sid_token: req.body.sid_token,
      email_ids: Array.isArray(req.body.email_ids) ? req.body.email_ids : [req.body.email_ids]
    }, 'POST');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete emails' });
  }
});

app.post('/api/forget-email', async (req, res) => {
  try {
    const data = await forwardRequest({
      f: 'forget_me',
      email_addr: req.body.email_addr,
      sid_token: req.body.sid_token
    }, 'POST');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to forget email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
}); 