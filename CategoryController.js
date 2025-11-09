const Category = require('../models/Category');

// GET all categories
exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch categories', error: err.message });
  }
};
if (category) {
  query.categoryId = category;
}


// GET single category by ID
exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch category', error: err.message });
  }
};

// POST create category
exports.createCategory = async (req, res) => {
  try {
    const { name, slug, description, parentCategoryId } = req.body;
    const category = new Category({ name, slug, description, parentCategoryId });
    await category.save();
    res.status(201).json({ message: 'Category created', category });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create category', error: err.message });
  }
};

// PUT update category
exports.updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json({ message: 'Category updated', category: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update category', error: err.message });
  }
};

// DELETE category
exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Category not found' });
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete category', error: err.message });
  }
};
