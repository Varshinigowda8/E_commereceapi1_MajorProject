const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/ProductController');

const { auth, sellerOnly } = require('../middlewares/authMiddleware');

router.route('/')
  .get(getAllProducts)
  .post(auth, sellerOnly, createProduct);

router.route('/:id')
  .get(getProduct)
  .put(auth, sellerOnly, updateProduct)
  .delete(auth, sellerOnly, deleteProduct);
  const upload = require('../middlewares/upload');

router.post(
  '/products',
  authenticateUser,
  authorizeRoles('admin', 'seller'),
  upload.array('images', 5),
  createProduct
);
const { authenticateUser, authorizeRoles } = require('../middlewares/auth');

router.post(
  '/',
  authenticateUser,
  authorizeRoles('admin', 'seller'),
  upload.array('images', 5),
  createProduct
);

router.put(
  '/:id',
  authenticateUser,
  authorizeRoles('admin', 'seller'),
  updateProduct
);

router.delete(
  '/:id',
  authenticateUser,
  authorizeRoles('admin', 'seller'),
  deleteProduct
);

const upload = require('../middlewares/upload');

router.post(
  '/',
  authenticateUser,
  authorizeRoles('admin', 'seller'),
  upload.array('images', 5), // up to 5 images
  createProduct
);

module.exports = router;

