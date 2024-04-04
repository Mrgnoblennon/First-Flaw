const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  quantity: Number,
  imageUrl: String,
  basePrice: Number,
  brand: String,
  colorName: String,
  size: String,
  sizeVariantId: String,
});

const orderSchema = new mongoose.Schema({
  items: [cartItemSchema],
  deliveryDetails: {
    firstName: String,
    address: String,
    city: String,
    state: String,
    phoneNumber: String,
    email: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add other relevant fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
