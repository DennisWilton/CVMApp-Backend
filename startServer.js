import mongoose from "mongoose";
import { ApolloServer, gql, PubSub } from 'apollo-server-express';
import express from 'express';
import bodyParser from "body-parser";

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

    server.applyMiddleware({app})

    app.listen(process.env.PORT, function(){
      console.log(new Date().toLocaleString())
      console.log(`> > > > Server is running at ${process.env.PORT}.`);
    });

    app.use(express.static('public'));

  } catch (e) {
    console.log("\nServer starting fail:\n");
    console.log(`>`, e.message);
  }
}
