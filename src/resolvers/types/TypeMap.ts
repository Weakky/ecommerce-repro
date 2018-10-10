import { ITypeMap } from "../../generated/resolvers";

import { QueryParent } from "../Query";
import { MutationParent } from "../Mutation";
import { UserConnectionParent } from "../UserConnection";
import { ProductConnectionParent } from "../ProductConnection";
import { UserParent } from "../User";
import { PageInfoParent } from "../PageInfo";
import { ProductEdgeParent } from "../ProductEdge";
import { AggregateProductParent } from "../AggregateProduct";
import { UserEdgeParent } from "../UserEdge";
import { AggregateUserParent } from "../AggregateUser";
import { ProductParent } from "../Product";
import { BrandParent } from "../Brand";

import { Context } from "./context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  UserConnectionParent: UserConnectionParent;
  ProductConnectionParent: ProductConnectionParent;
  UserParent: UserParent;
  PageInfoParent: PageInfoParent;
  ProductEdgeParent: ProductEdgeParent;
  AggregateProductParent: AggregateProductParent;
  UserEdgeParent: UserEdgeParent;
  AggregateUserParent: AggregateUserParent;
  ProductParent: ProductParent;
  BrandParent: BrandParent;
}
