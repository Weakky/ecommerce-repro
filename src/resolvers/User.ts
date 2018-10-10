import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface UserParent {
  id: string;
  firstName: string;
  lastName: string;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  firstName: parent => parent.firstName,
  lastName: parent => parent.lastName
};
