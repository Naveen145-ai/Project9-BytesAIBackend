const express = require('express');
const app = express();
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// DB Connection
connectDatabase();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend connection

// Route Imports
const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profileRoutes');
const paymentRoutes = require('./routes/payment');

// Routes
app.use('/api/v1', loginRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/profile', profileRoutes); // Profile POST/GET
app.use('/api/payment', paymentRoutes); // Payment logic (uses salary)

// Default 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
