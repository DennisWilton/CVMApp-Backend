import { ApolloServer, PubSub } from "apollo-server";
import mongoose from "mongoose";

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

    server.listen(process.env.PORT).then(({ url }) => {
      console.log(new Date().toLocaleString())
      console.log(`Server is running at ${url}`);
    });
  } catch (e) {
    console.log("\nServer starting fail:\n");
    console.log(`>`, e.message);
  }
}
