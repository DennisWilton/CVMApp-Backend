import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

const utilsList = fileLoader(
  path.join(__dirname, "*.js")
);

const utils = {}

utilsList.forEach( util => {
    utils[util.name] = util;
})

export default utils;
