// server.js
const express = require('express');
const connectDB = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();

const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const app = express();
const PORT = process.env.PORT;


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start Apollo Server and apply middleware
async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();