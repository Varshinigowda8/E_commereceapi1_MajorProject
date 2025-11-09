const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('E-Commerce API is running...');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err.message);
});
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);
const { swaggerUi, specs } = require('./configs/swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
const { swaggerUi, specs } = require('./configs/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
