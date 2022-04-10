const { ApolloServer } = require('apollo-server');
const dotenv = require('dotenv');
dotenv.config();

const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const server = new ApolloServer({
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
