const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  productId: { type: String, default: uuidv4 },
  name: { type: String, required: true, maxlength: 200 },
  description: { type: String, minlength: 50 },
  price: { type: Number, min: 0 },
  discountPrice: { type: Number },
  stock: { type: Number, min: 0 },
  sku: { type: String, unique: true },
  
  // ✅ Updated categoryId to reference Category model
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },

  sellerId: { type: String, required: true },
  images: [String],
  specifications: { type: Map, of: String },
  tags: [String],
  rating: { type: Number, min: 0, max: 5 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
