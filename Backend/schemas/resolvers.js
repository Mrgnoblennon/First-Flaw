const User = require('../models/User');
const Tshirt = require('../models/Tshirt');
const Pants = require('../models/Pants');

const resolvers = {
  Query: {
    users: () => User.find({})
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
