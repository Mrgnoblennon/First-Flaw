const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type SizeVariant {
    size: String!
    quantity: Int!
    additionalPrice: Float
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
  }

  type Mutation {
    addProduct(input: ProductInput!): Product
  }

`;

module.exports = typeDefs;
