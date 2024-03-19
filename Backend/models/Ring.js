const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariantSchema = new Schema({
  color: { type: String, required: false },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  additionalPrice: { type: Number, required: false }, // Optional, in case different variants have different prices
  imageUrl: { type: String, required: false }
});

const RingSchema = new Schema({
  name: { type: String, required: true },
  basePrice: { type: Number, required: true }, // Base price, variants might add to this price
  variants: [VariantSchema], // Array of Variant documents
  brand: { type: String, required: false},
  imageUrl: { type: String, required: false } // Add this line
});

const Ring = mongoose.model('Ring', RingSchema);

module.exports = Ring;