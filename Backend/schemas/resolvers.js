const Product = require('../models/Product');
const Cart = require('../models/Cart');

const resolvers = {
  Query: {
    getProductById: async (_, { productId }) => {
      try {
        const product = await Product.findById(productId);
        return product;
      } catch (error) {
        console.error("Error fetching product:", error);
        throw new Error("Failed to fetch product.");
      }
    },
    getProductsByType: async (_, { productType }) => {
      return await Product.find({ productType: productType });
    },
    viewCart: async (_, { sessionId }, { Cart }) => {
      let cart = await Cart.findOne({ sessionId });
      if (!cart) {
        // Optionally create a new cart if one doesn't exist
        cart = new Cart({ sessionId, items: [] });
        // Save the new cart if you choose to create one
        await cart.save();
      }
      return cart;
    },
  },
  Mutation: {
    addProduct: async (_, { input }) => {
      try {
        const newProduct = new Product(input); // `input` includes `descriptions`
        await newProduct.save();
        return newProduct;
      } catch (error) {
        console.error("Failed to add product:", error);
        throw new Error("Error adding product.");
      }
    },
    createPaymentIntent: async (_, { amount }, { stripe }) => {
      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: 'aud',
        });
        return { clientSecret: paymentIntent.client_secret };
      } catch (error) {
        console.error("Stripe error:", error.message);
        throw new Error("Failed to create PaymentIntent.");
      }
    },
    addToCart: async (_, { sessionId, productId, quantity, colorVariantId, sizeVariantId }, { Cart }) => {
      let cart = await Cart.findOne({ sessionId });
      if (!cart) {
        cart = new Cart({ sessionId, items: [] });
      }

      const existingItemIndex = cart.items.findIndex(item => 
        item.productId.toString() === productId && 
        item.colorVariantId === colorVariantId && 
        item.sizeVariantId === sizeVariantId);

      if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity, colorVariantId, sizeVariantId });
      }

      await cart.save();
      return cart;
    },
  },
};

module.exports = resolvers;
