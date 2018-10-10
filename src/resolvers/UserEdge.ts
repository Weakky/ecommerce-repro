import { UserEdgeResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";

export interface UserEdgeParent {
  node: UserParent;
  cursor: string;
}

export const UserEdge: UserEdgeResolvers.Type<TypeMap> = {
  node: parent => parent.node,
  cursor: parent => parent.cursor
};
