const express = require('express');
const router = express.Router();

const {
  getAllCategory,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/CategoryController');

const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

router.get('/', getAllCategory); // public
router.get('/:id', getCategory); // public
router.post('/', authMiddleware, adminMiddleware, createCategory); // admin only
router.put('/:id', authMiddleware, adminMiddleware, updateCategory); // admin only
router.delete('/:id', authMiddleware, adminMiddleware, deleteCategory); // admin only
router.post('/', authenticateUser, authorizeRoles('admin'), createCategory);
router.put('/:id', authenticateUser, authorizeRoles('admin'), updateCategory);
router.delete('/:id', authenticateUser, authorizeRoles('admin'), deleteCategory);

module.exports = router;
