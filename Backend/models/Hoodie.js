const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SizeVariantSchema = new mongoose.Schema({
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  additionalPrice: { type: Number, required: false } // Optional
});

const ColorVariantSchema = new mongoose.Schema({
  colorName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  sizeVariants: [SizeVariantSchema]
});

const HoodieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  basePrice: { type: Number, required: true },
  colors: [ColorVariantSchema],
  brand: { type: String, required: false }
});

const Hoodie = mongoose.model('Hoodie', HoodieSchema);

module.exports = Hoodie;
