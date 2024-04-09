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
    showcaseImageUrl: [String]
  }
  
  type Product {
    id: ID!
    _id: ID!
    productType: String!
    name: String!
    basePrice: Float!
    colors: [ColorVariant!]
    brand: String
    baseUrl: String
    descriptions: [String!]!
  }

  type Collection {
    id: ID!
    title: String!
    collectionImageUrl: String
    description: String
    products: [Product]
    created_at: String
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

  type UpdateProductQuantitiesResult {
    success: Boolean!
    message: String
    updatedProducts: [Product!]
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
    showcaseImageUrl: [String]
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

  # Order confirmation implementation

  type Order {
    id: ID!
    items: [CartItem!]!
    deliveryDetails: DeliveryDetails
    createdAt: String! # ISO date string
  }

  type DeliveryDetails {
    firstName: String
    email: String
    address: String
    city: String
    state: String
    phoneNumber: String
  }

  input OrderInput {
    items: [CartItemInput!]!
    deliveryDetails: DeliveryDetailsInput
  }

  input CartItemInput {
    name: String!
    quantity: Int!
    imageUrl: String!
    basePrice: Float!
    colorName: String!
    size: String!
  }
  
  input DeliveryDetailsInput {
    firstName: String
    email: String
    address: String
    city: String
    state: String
    phoneNumber: String
  }
  
  type Query {
    getProductById(productId: ID!): Product
    getProductsByType(productType: String!): [Product!]
    getRandomProductsByType(productType: String!, excludeProductId: String!): [Product!]
    viewCart: Cart
    getAllProducts: [Product]
    getCollectionById(id: ID!): Collection
    getAllCollections: [Collection]
  }

  type Mutation {
    addProduct(input: ProductInput!): Product
    createCollection(title: String!, description: String, products: [ID], collectionImageUrl: String): Collection
    addProductsToCollection(collectionId: ID!, productIds: [ID!]!): Collection
    createPaymentIntent(amount: Int!): PaymentIntent
    addToCart(sessionId: String!, productId: ID!, sizeVariantId: String!, quantity: Int!): Cart
    removeFromCart(sessionId: String!, sizeVariantId: String!): Cart
    adjustCartItemQuantity(sessionId: String!, productId: ID!, sizeVariantId: String!, delta: Int!): Cart
    removeAllItemsFromCart(sessionId: ID!): Cart!
    updateProductQuantities(sessionId: ID!): UpdateProductQuantitiesResult!
    createOrder(orderInput: OrderInput!): Order!
  }

`;

module.exports = typeDefs;
