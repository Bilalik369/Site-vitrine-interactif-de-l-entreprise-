import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./lib/db.js"
import { config } from "./config.js"
import blogRoutes from "./route/blogRoutes.js"

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: config.CORS_ORIGIN,
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/blog', blogRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: config.NODE_ENV
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: '404.js API Server',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      blog: '/api/blog'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl 
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    message: config.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.PORT, () => {
      console.log(`🚀 Server is running on PORT ${config.PORT}`);
      console.log(`📡 API available at http://localhost:${config.PORT}`);
      console.log(`🔗 CORS enabled for: ${config.CORS_ORIGIN}`);
      console.log(`🌍 Environment: ${config.NODE_ENV}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();