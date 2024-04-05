const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SizeVariantSchema = new Schema({
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  additionalPrice: { type: Number, default: 0 },
});

const ColorVariantSchema = new Schema({
  colorName: { type: String, required: false }, // Optional for products like rings
  imageUrl: { type: String, required: false },
  sizeVariants: [SizeVariantSchema],
  showcaseImageUrl: [{ type: String }]
});

const ProductSchema = new Schema({
  productType: { type: String, required: true, enum: ['Hoodie', 'Pants', 'Tshirt', 'Ring'] },
  name: { type: String, required: true },
  basePrice: { type: Number, required: true },
  colors: { type: [ColorVariantSchema], default: [] }, // Make this optional or an empty array by default for products without colors
  brand: { type: String, default: '' },
  baseUrl: { type: String, required: false }, // Base URL for the product, useful for rings or default images
  descriptions: { type: [String], default: [] } // Array of strings for various descriptions
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;