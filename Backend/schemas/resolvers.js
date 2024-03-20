const Product = require('../models/Product');

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
  },
};

module.exports = resolvers;
