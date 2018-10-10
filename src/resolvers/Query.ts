import { QueryResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  users: (parent, args, ctx) => {
    return ctx.db.usersConnection();
  },
  products: (parent, args, ctx) => ctx.db.productsConnection()
};