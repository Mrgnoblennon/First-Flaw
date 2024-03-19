const User = require('../models/User');
const Tshirt = require('../models/Tshirt');
const Pants = require('../models/Pants');
const Ring = require('../models/Ring');
const Hoodie = require('../models/Hoodie')

const resolvers = {
  Query: {
    getAllTshirts: async () => {
      try {
        const tshirts = await Tshirt.find(); // Fetch all T-shirts from the database
        const tshirtsEnhanced = tshirts.map(tshirt => {
          // Assuming each t-shirt has a `variants` array with a color property
          const uniqueColors = new Set(tshirt.variants.map(variant => variant.color));
    
          const tshirtObject = tshirt.toObject(); // Convert to a plain object if using Mongoose
          // Explicitly map `_id` to `id`
          const tshirtWithId = {
            ...tshirtObject,
            id: tshirtObject._id.toString(),
            colorCount: uniqueColors.size // Add the count of unique colors
          };
    
          // Since we've manually added `id`, delete `_id` to avoid confusion (optional)
          delete tshirtWithId._id;
    
          return tshirtWithId;
        });
        return tshirtsEnhanced;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch Tshirts');
      }
    },
    getAllHoodies: async () => {
      try {
        const hoodies = await Hoodie.find(); // Fetch all T-shirts from the database
        const hoodiesEnhanced = hoodies.map(hoodie => {
          // Assuming each t-shirt has a `variants` array with a color property
          const uniqueColors = new Set(hoodie.variants.map(variant => variant.color));
    
          const hoodieObject = hoodie.toObject(); // Convert to a plain object if using Mongoose
          // Explicitly map `_id` to `id`
          const hoodieWithId = {
            ...hoodieObject,
            id: hoodieObject._id.toString(),
            colorCount: uniqueColors.size // Add the count of unique colors
          };
    
          // Since we've manually added `id`, delete `_id` to avoid confusion (optional)
          delete hoodieWithId._id;
    
          return hoodieWithId;
        });
        return hoodiesEnhanced;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch Hoodies');
      }
    },
    getAllRings: async () => {
      try {
        const rings = await Ring.find(); // Fetch all T-shirts from the database
        return rings;
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
    createHoodie: async (_, { input }) => {
      try {
        // Create a new Pants document
        const newHoodie = new Hoodie({
          name: input.name,
          basePrice: input.basePrice,
          variants: input.variants // Assumes variants is an array of VariantInput
        });

        // Save the Pants document to the database
        const savedHoodie = await newHoodie.save();

        return savedHoodie;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    createRing: async (_, { input }) => {
      try {
        // Create a new Pants document
        const newRing = new Ring({
          name: input.name,
          basePrice: input.basePrice,
          variants: input.variants // Assumes variants is an array of VariantInput
        });

        // Save the Pants document to the database
        const savedRing = await newRing.save();

        return savedRing;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;
