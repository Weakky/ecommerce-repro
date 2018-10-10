import { ProductResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { BrandParent } from "./Brand";

export interface ProductParent {
  id: string;
  name: string;
  brand: BrandParent;
}

export const Product: ProductResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  name: parent => parent.name,
  brand: parent => parent.brand
};
