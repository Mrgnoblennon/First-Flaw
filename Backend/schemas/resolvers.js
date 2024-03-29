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
    viewCart: async (_, __, { Cart, sessionId }) => {
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
          automatic_payment_methods: {
            enabled: true,
          },
        });
        return { clientSecret: paymentIntent.client_secret };
      } catch (error) {
        console.error("Stripe error:", error.message);
        throw new Error("Failed to create PaymentIntent.");
      }
    },
    addToCart: async (_, args, context) => {
      // Extract sessionId from the context, passed from the client
      const { sessionId } = context;
    
      // Destructure other arguments
      const { productId, sizeVariantId, quantity } = args;
    
      // Ensure the Product model is accessible via context
      const { Cart, Product } = context;
    
      // Find the product by ID to ensure it exists and to retrieve its details
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error("Product not found");
      }
    
      // Extract and find the specified size variant from the product
      let variantDetails;
      product.colors.forEach(colorVariant => {
        colorVariant.sizeVariants.forEach(sizeVariant => {
          if (sizeVariant._id.toString() === sizeVariantId) {
            variantDetails = {
              productId: product._id,
              name: product.name,
              quantity,
              brand: product.brand,
              basePrice: product.basePrice,
              colorName: colorVariant.colorName,
              size: sizeVariant.size,
              imageUrl: colorVariant.imageUrl,
              additionalPrice: sizeVariant.additionalPrice,
              sizeVariantId
            };
          }
        });
      });
    
      if (!variantDetails) {
        throw new Error("Size variant not found");
      }
    
      // Find or create a cart based on the sessionId
      let cart = await Cart.findOne({ sessionId });
      if (!cart) {
        cart = new Cart({ sessionId, items: [] });
      }
    
      // Check if the item (by product and sizeVariantId) already exists in the cart
      const existingItemIndex = cart.items.findIndex(item => 
        item.productId.toString() === productId && item.sizeVariantId === sizeVariantId
      );
    
      if (existingItemIndex > -1) {
        // If the item exists, update its quantity
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        cart.items.push(variantDetails);
      }
    
      // Save the updated or new cart
      await cart.save();
    
      return cart; // Return the updated cart
    },
    removeFromCart: async (_, { sessionId, sizeVariantId }, { Cart }) => {
      // Find the cart based on sessionId
      const cart = await Cart.findOne({ sessionId });
      if (!cart) {
        throw new Error("Cart not found");
      }
    
      // Find the index of the item to be removed
      const itemIndex = cart.items.findIndex(item => item.sizeVariantId === sizeVariantId);
      if (itemIndex === -1) {
        throw new Error("Item not found in cart");
      }
    
      // Remove the item from the cart
      cart.items.splice(itemIndex, 1);
    
      // Save the updated cart
      await cart.save();
    
      return cart; // Return the updated cart
    },
    adjustCartItemQuantity: async (_, { sessionId, productId, sizeVariantId, delta }, { Cart }) => {
      const cart = await Cart.findOne({ sessionId });
      if (!cart) {
        throw new Error("Cart not found");
      }
    
      // Find the item in the cart
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId && item.sizeVariantId === sizeVariantId);
      if (itemIndex === -1) {
        throw new Error("Item not found in cart");
      }
    
      // Adjust the quantity
      cart.items[itemIndex].quantity += delta;
    
      // Optionally, remove the item if quantity becomes 0 or less
      if (cart.items[itemIndex].quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      }
    
      await cart.save();
      return cart;
    },
  },
};

module.exports = resolvers;
