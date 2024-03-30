const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type PaymentIntent {
    clientSecret: String!
  }

  type SizeVariant {
    size: String!
    quantity: Int!
    additionalPrice: Float
    id: ID!
  }
  
  type ColorVariant {
    colorName: String
    imageUrl: String
    sizeVariants: [SizeVariant!]
  }
  
  type Product {
    id: ID!
    productType: String!
    name: String!
    basePrice: Float!
    colors: [ColorVariant!]
    brand: String
    baseUrl: String
    descriptions: [String!]!
  }

  type Cart {
    sessionId: String!
    items: [CartItem!]!
    createdAt: String
    updatedAt: String
  }

  type CartItem {
    productId: ID!
    name: String!
    quantity: Int!
    colorName: String
    size: String
    imageUrl: String
    additionalPrice: Float
    sizeVariantId: String!
    brand: String
    basePrice: Float
  }

  input SizeVariantInput {
    size: String!
    quantity: Int!
    additionalPrice: Float
  }
  
  input ColorVariantInput {
    colorName: String
    imageUrl: String
    sizeVariants: [SizeVariantInput!]
  }
  
  input ProductInput {
    productType: String!
    name: String!
    basePrice: Float!
    colors: [ColorVariantInput!]
    brand: String
    baseUrl: String
    descriptions: [String!]
  }
  
  type Query {
    getProductById(productId: ID!): Product
    getProductsByType(productType: String!): [Product!]
    viewCart: Cart
  }

  type Mutation {
    addProduct(input: ProductInput!): Product
    createPaymentIntent(amount: Int!): PaymentIntent
    addToCart(sessionId: String!, productId: ID!, sizeVariantId: String!, quantity: Int!): Cart
    removeFromCart(sessionId: String!, sizeVariantId: String!): Cart
    adjustCartItemQuantity(sessionId: String!, productId: ID!, sizeVariantId: String!, delta: Int!): Cart
    removeAllItemsFromCart(sessionId: ID!): Cart!
  }

`;

module.exports = typeDefs;
