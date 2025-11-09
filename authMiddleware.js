const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

// Auth middleware
exports.auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access token missing' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};
exports.adminOnly = (req, res, next) => {
  if (req.user?.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Access denied: Admin only' });
};

// Role-based middleware
exports.sellerOnly = (req, res, next) => {
  if (req.user?.role === 'seller' || req.user?.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Access denied: Seller/Admin only' });
};

