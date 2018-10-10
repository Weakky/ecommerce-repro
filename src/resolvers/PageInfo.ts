import { PageInfoResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface PageInfoParent {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}

export const PageInfo: PageInfoResolvers.Type<TypeMap> = {
  hasNextPage: parent => parent.hasNextPage,
  hasPreviousPage: parent => parent.hasPreviousPage,
  startCursor: parent => parent.startCursor,
  endCursor: parent => parent.endCursor
};
