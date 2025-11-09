const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authMiddleware, authController.logout);
router.post('/refresh-token', authController.refreshToken);

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied: insufficient role' });
    }
    next();
  };
};
const { refreshToken, logout } = require('../controllers/authController');
const { authenticateUser } = require('../middlewares/auth');

router.post('/refresh-token', refreshToken);
router.post('/logout', authenticateUser, logout);


module.exports = router;
