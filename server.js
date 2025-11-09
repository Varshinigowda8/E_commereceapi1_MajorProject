const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
const categoryRoutes = require('./routes/categoryRoutes');
app.use('/api/categories', categoryRoutes);
const userRouter = require('./routes/userRoutes');
app.use('/api/users', userRouter);



app.listen(5000, () => {
  console.log('✅ Server running on port 5000');
});

