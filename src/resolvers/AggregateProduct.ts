import { AggregateProductResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface AggregateProductParent {
  count: number;
}

export const AggregateProduct: AggregateProductResolvers.Type<TypeMap> = {
  count: parent => parent.count
};
