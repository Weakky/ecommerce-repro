import { IResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { UserConnection } from "./UserConnection";
import { ProductConnection } from "./ProductConnection";
import { User } from "./User";
import { PageInfo } from "./PageInfo";
import { ProductEdge } from "./ProductEdge";
import { AggregateProduct } from "./AggregateProduct";
import { UserEdge } from "./UserEdge";
import { AggregateUser } from "./AggregateUser";
import { Product } from "./Product";
import { Brand } from "./Brand";

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  UserConnection,
  ProductConnection,
  User,
  PageInfo,
  ProductEdge,
  AggregateProduct,
  UserEdge,
  AggregateUser,
  Product,
  Brand
};
