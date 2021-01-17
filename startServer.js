import mongoose from "mongoose";
import { ApolloServer, gql, PubSub } from 'apollo-server-express';
import express from 'express';
import bodyParser from "body-parser";
import axios from 'axios';
import convert from 'xml-js';
import cors from 'cors';
import * as pagseguro from './pagseguro';
import morgan from 'morgan';

//routes
import userRoute from './routes/User';

export default async function startServer({ typeDefs, resolvers }) {
  try {
    let url;
    if(process.env.DBUSER && process.env.DBPASS){
      url = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}/${process.env.DBNAME}`;
    }else{
      url = `mongodb://${process.env.DBHOST}/${process.env.DBNAME}`;
    }
    
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set('useCreateIndex', true);


    
    const pubsub = new PubSub();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: { pubsub },
    });

    const app = express();

    
    app.use(function(req, res, next){
      if(req.url == '/graphql') {
        return next();
      }
      console.log(req.method + ' ' + req.url);
      next();
    })

    app.use( morgan('dev', { skip: (req) => (!req.url.match(/graphql/)) }));

    
    server.applyMiddleware({app})
    
    app.use(express.static('public'));

    app.use('/buying', pagseguro.routes);
    app.use('/user', userRoute)

    app.listen(process.env.PORT, function(){

      console.log(new Date().toLocaleString())
      console.log(`> > > > Server is running at ${process.env.PORT}.`);
    });

    
  } catch (e) {
    console.log("\nServer starting fail:\n");
    console.log(`>`, e.message);
  }
}
