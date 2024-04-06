const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for items in the cart
const CartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  colorName: { type: String, required: false },
  sizeVariantId: { type: String, required: true }, // Stores the ID of the selected size variant
  size: { type: String, required: true }, // Consider storing the size label for easier retrieval/display
  imageUrl: { type: String, required: true },
  additionalPrice: { type: Number, default: 0 },
  basePrice: { type: Number, required: false },
  brand: { type: String, required: false }, 
});

// Define the schema for the cart
const CartSchema = new Schema({
  sessionId: { type: String, required: true, unique: true },
  items: [CartItemSchema],
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
