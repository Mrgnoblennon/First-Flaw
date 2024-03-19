const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Tshirt {
    id: ID!
    name: String!
    basePrice: Float!
    variants: [Variant!]!
    brand: String
    imageUrl: String 
    colorCount: Int
  }

  type Pants {
    id: ID!
    name: String!
    basePrice: Float!
    variants: [Variant!]!
    brand: String
    imageUrl: String 
    colorCount: Int
  }

  type Hoodie {
    id: ID!
    name: String!
    basePrice: Float!
    variants: [Variant!]!
    brand: String
    imageUrl: String 
    colorCount: Int
  }

  type Ring {
    id: ID!
    name: String!
    basePrice: Float!
    variants: [Variant!]!
    brand: String
    imageUrl: String 
  }
  
  type Variant {
    color: String
    size: String!
    quantity: Int!
    additionalPrice: Float
    imageUrl: String
  }

  input VariantInput {
    color: String
    size: String!
    quantity: Int!
    additionalPrice: Float
    imageUrl: String
  }

  input TshirtInput {
    name: String!
    basePrice: Float!
    brand: String
    imageUrl: String
    variants: [VariantInput!]!
  }

  input PantsInput {
    name: String!
    basePrice: Float!
    brand: String
    imageUrl: String
    variants: [VariantInput!]!
  }

  input HoodieInput {
    name: String!
    basePrice: Float!
    brand: String
    imageUrl: String
    variants: [VariantInput!]!
  }

  input RingInput {
    name: String!
    basePrice: Float!
    brand: String
    imageUrl: String
    variants: [VariantInput!]!
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    createTshirt(input: TshirtInput!): Tshirt
    createPants(input: PantsInput!): Pants
    createHoodie(input: HoodieInput!): Hoodie
    createRing(input: RingInput!): Ring
  }

  type Query {
    getAllTshirts: [Tshirt]
    getAllHoodies: [Hoodie]
    getAllRings: [Ring]
    getAllPants: [Pants]
    users: [User]
  }
`;

module.exports = typeDefs;
