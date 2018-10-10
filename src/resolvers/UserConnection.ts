import { UserConnectionResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { PageInfoParent } from "./PageInfo";
import { UserEdgeParent } from "./UserEdge";
import { AggregateUserParent } from "./AggregateUser";

export interface UserConnectionParent {
  pageInfo: PageInfoParent;
  edges: UserEdgeParent[];
  aggregate: AggregateUserParent;
}

export const UserConnection: UserConnectionResolvers.Type<TypeMap> = {
  pageInfo: parent => parent.pageInfo,
  edges: parent => parent.edges,
  aggregate: parent => parent.aggregate
};
 