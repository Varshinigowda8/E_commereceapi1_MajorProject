const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const categorySchema = new mongoose.Schema({
  categoryId: { type: String, default: uuidv4 },
  name: { type: String, required: true, unique: true },
  slug: { type: String, unique: true },
  description: String,
  parentCategoryId: String,
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);

