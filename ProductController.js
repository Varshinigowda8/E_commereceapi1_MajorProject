const Product = require('../models/Product');

// CREATE
exports.createProduct = async (req, res) => {
  try {
    const sellerId = req.user.userId;
    const product = new Product({ ...req.body, sellerId });
    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    res.status(500).json({ message: 'Create failed', error: err.message });
  }
};

// READ ALL
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};

// READ ONE
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.id });
    if (!product) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findOneAndUpdate(
      { productId: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Updated', product: updated });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ productId: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};
const Product = require('../models/Product');

// ✅ CREATE
exports.createProduct = async (req, res) => {
  try {
    const sellerId = req.user.userId;
    const product = new Product({ ...req.body, sellerId });
    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    res.status(500).json({ message: 'Create failed', error: err.message });
  }
};

// ✅ READ ALL with Pagination + Filtering
exports.getAllProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = '',
      category,
      sortBy = 'createdAt'
    } = req.query;

    const query = {
      isActive: true,
      name: { $regex: search, $options: 'i' }
    };

    if (category) {
      query.categoryId = category;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const products = await Product.find(query)
      .sort({ [sortBy]: 1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Product.countDocuments(query);

    res.status(200).json({
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      totalPages: Math.ceil(total / limit),
      products
    });
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};

// ✅ READ ONE
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.id });
    if (!product) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};

// ✅ UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findOneAndUpdate(
      { productId: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Updated', product: updated });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, categoryId, sellerId } = req.body;

    // Collect uploaded image paths
    const images = req.files.map(file => file.path);

    const product = new Product({
      name,
      description,
      price,
      stock,
      categoryId,
      sellerId,
      images
    });

    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, categoryId, sellerId } = req.body;

    // Collect uploaded image paths
    const images = req.files.map(file => file.path);

    const product = new Product({
      name,
      description,
      price,
      stock,
      categoryId,
      sellerId,
      images
    });

    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, categoryId, sellerId } = req.body;

    // Collect uploaded image paths
    const images = req.files.map(file => file.path);

    const product = new Product({
      name,
      description,
      price,
      stock,
      categoryId,
      sellerId,
      images
    });

    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, categoryId, sellerId } = req.body;

    // Collect uploaded image paths
    const images = req.files.map(file => file.path);

    const product = new Product({
      name,
      description,
      price,
      stock,
      categoryId,
      sellerId,
      images
    });

    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const images = req.files.map(file => file.path); // local paths
    const product = new Product({ ...req.body, images });
    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// ✅ DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ productId: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};
