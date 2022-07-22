import { ApolloServer, gql } from "apollo-server";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";

const typeDefs = gql`
  type Query {
    records: [Record]
  }

  type Person {
    id: Int!
    email: String!
    name: String
    records: [Record]
  }

  type Record {
    id: Int!
    title: String!
    content: String
    published: Boolean!
    author: Person!
    authorId: Int!
  }
`;

const resolvers = {
  Query: {
    records: () => [
      {
        id: 1,
        title: "Tá morrendo na emergência",
        content: "Paciente chegou morrendo ali ó!",
        published: true,
        author: {
          id: 1,
          email: "contatofilipelopes.med.br",
          name: "Filipe Lopes",
        },
      },
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
