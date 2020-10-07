import {config as useEnvironmentVariables} from 'dotenv';
import startServer from './startServer';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
useEnvironmentVariables();

startServer({typeDefs, resolvers});