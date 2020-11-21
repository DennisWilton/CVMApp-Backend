import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

const methodsList = fileLoader(
  path.join(__dirname, "*.js")
);

const methods = {}

methodsList.forEach( method => {
    methods[method.name] = method;
})

export default methods;
