import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
dotenv.config();

import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import * as typeDefs from './graphql/models';

const app = express();
app.use(cors());

const server = new ApolloServer({
    typeDefs: Object.values(typeDefs),
    resolvers: {
        Query: { ...queries },
        // Mutation: { ...mutations }
    }
});

app.route('/').get((req, res) => (
    res.sendFile(path.join(__dirname + process.env.PUBLIC_URL + '/index.html'))
));
server.applyMiddleware({ app });


app.listen(process.env.PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${ process.env.PORT }${ server.graphqlPath }`)
);