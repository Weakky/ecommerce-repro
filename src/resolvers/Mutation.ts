import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  createUser: (parent, args) => null
};
