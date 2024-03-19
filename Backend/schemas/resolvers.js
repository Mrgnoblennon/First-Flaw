const User = require('../models/User');
const Tshirt = require('../models/Tshirt');
const Pants = require('../models/Pants');

const resolvers = {
  Query: {
    getAllTshirts: async () => {
      try {
        const tshirts = await Tshirt.find(); // Fetch all T-shirts from the database
        const tshirtsEnhanced = tshirts.map(tshirt => {
          // Assuming each tshirt has a `variants` array with a color property
          const uniqueColors = new Set(tshirt.variants.map(variant => variant.color));
          return {
            ...tshirt.toObject(), // Convert to a plain object if using Mongoose
            colorCount: uniqueColors.size // Add the count of unique colors
          };
        });
        return tshirtsEnhanced;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch T-shirts');
      }
    },
  },
  Mutation: {
    // Resolver for creating a T-shirt
    createTshirt: async (_, { input }) => {
      try {
        // Create a new T-shirt document
        const newTshirt = new Tshirt({
          name: input.name,
          basePrice: input.basePrice,
          variants: input.variants // Assumes variants is an array of VariantInput
        });

        // Save the T-shirt document to the database
        const savedTshirt = await newTshirt.save();

        return savedTshirt;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    createPants: async (_, { input }) => {
      try {
        // Create a new Pants document
        const newPants = new Pants({
          name: input.name,
          basePrice: input.basePrice,
          variants: input.variants // Assumes variants is an array of VariantInput
        });

        // Save the Pants document to the database
        const savedPants = await newPants.save();

        return savedPants;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;
