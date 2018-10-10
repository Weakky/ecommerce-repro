import { ProductConnectionResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { PageInfoParent } from "./PageInfo";
import { ProductEdgeParent } from "./ProductEdge";
import { AggregateProductParent } from "./AggregateProduct";

export interface ProductConnectionParent {
  pageInfo: PageInfoParent;
  edges: ProductEdgeParent[];
  aggregate: AggregateProductParent;
}

export const ProductConnection: ProductConnectionResolvers.Type<TypeMap> = {
  pageInfo: parent => parent.pageInfo,
  edges: parent => parent.edges,
  aggregate: parent => parent.aggregate
};
