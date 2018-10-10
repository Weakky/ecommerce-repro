import { BrandResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface BrandParent {
  id: string;
  name: string;
}

export const Brand: BrandResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  name: parent => parent.name
};
