require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');
const errorHandler = require('./middlewares/errorHandler');
const path = require('path');

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json({limit:"10mb"}));

// Static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Debug middleware (remove in production)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// Routes
app.use('/api/forms', formRoutes);
app.use('/api/forms/:id/responses', responseRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}).catch(err => {
  console.error('Database connection failed:', err);
  process.exit(1);
});
