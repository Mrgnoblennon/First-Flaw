const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  colorVariantId: { type: String, required: false }, // Optional, depends on product
  sizeVariantId: { type: String, required: false }, // Optional, depends on product
  quantity: { type: Number, required: true },
});

const CartSchema = new Schema({
  sessionId: { type: String, required: true, unique: true },
  items: [CartItemSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
