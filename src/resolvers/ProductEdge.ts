import { ProductEdgeResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ProductParent } from "./Product";

export interface ProductEdgeParent {
  node: ProductParent;
  cursor: string;
}

export const ProductEdge: ProductEdgeResolvers.Type<TypeMap> = {
  node: parent => parent.node,
  cursor: parent => parent.cursor
};
