import { AggregateUserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface AggregateUserParent {
  count: number;
}

export const AggregateUser: AggregateUserResolvers.Type<TypeMap> = {
  count: parent => parent.count
};
