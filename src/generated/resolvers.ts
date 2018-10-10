import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;

  QueryParent: any;
  MutationParent: any;
  UserConnectionParent: any;
  ProductConnectionParent: any;
  UserParent: any;
  PageInfoParent: any;
  ProductEdgeParent: any;
  AggregateProductParent: any;
  UserEdgeParent: any;
  AggregateUserParent: any;
  ProductParent: any;
  BrandParent: any;
}

export namespace QueryResolvers {
  export interface ArgsUsers {
    firstName: string;
    lastName: string;
  }

  export type UsersResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsUsers,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserConnectionParent"] | Promise<T["UserConnectionParent"]>;

  export type ProductsResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ProductConnectionParent"]
    | null
    | Promise<T["ProductConnectionParent"] | null>;

  export interface Type<T extends ITypeMap> {
    users: (
      parent: T["QueryParent"],
      args: ArgsUsers,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserConnectionParent"] | Promise<T["UserConnectionParent"]>;
    products: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ProductConnectionParent"]
      | null
      | Promise<T["ProductConnectionParent"] | null>;
  }
}

export namespace MutationResolvers {
  export interface ArgsCreateUser {
    firstName: string;
    lastName: string;
  }

  export type CreateUserResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCreateUser,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface Type<T extends ITypeMap> {
    createUser: (
      parent: T["MutationParent"],
      args: ArgsCreateUser,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
  }
}

export namespace UserConnectionResolvers {
  export type PageInfoResolver<T extends ITypeMap> = (
    parent: T["UserConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["PageInfoParent"] | Promise<T["PageInfoParent"]>;

  export type EdgesResolver<T extends ITypeMap> = (
    parent: T["UserConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserEdgeParent"][] | Promise<T["UserEdgeParent"][]>;

  export type AggregateResolver<T extends ITypeMap> = (
    parent: T["UserConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AggregateUserParent"] | Promise<T["AggregateUserParent"]>;

  export interface Type<T extends ITypeMap> {
    pageInfo: (
      parent: T["UserConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["PageInfoParent"] | Promise<T["PageInfoParent"]>;
    edges: (
      parent: T["UserConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserEdgeParent"][] | Promise<T["UserEdgeParent"][]>;
    aggregate: (
      parent: T["UserConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AggregateUserParent"] | Promise<T["AggregateUserParent"]>;
  }
}

export namespace ProductConnectionResolvers {
  export type PageInfoResolver<T extends ITypeMap> = (
    parent: T["ProductConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["PageInfoParent"] | Promise<T["PageInfoParent"]>;

  export type EdgesResolver<T extends ITypeMap> = (
    parent: T["ProductConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ProductEdgeParent"][] | Promise<T["ProductEdgeParent"][]>;

  export type AggregateResolver<T extends ITypeMap> = (
    parent: T["ProductConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AggregateProductParent"] | Promise<T["AggregateProductParent"]>;

  export interface Type<T extends ITypeMap> {
    pageInfo: (
      parent: T["ProductConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["PageInfoParent"] | Promise<T["PageInfoParent"]>;
    edges: (
      parent: T["ProductConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ProductEdgeParent"][] | Promise<T["ProductEdgeParent"][]>;
    aggregate: (
      parent: T["ProductConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AggregateProductParent"] | Promise<T["AggregateProductParent"]>;
  }
}

export namespace UserResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    firstName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    lastName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace PageInfoResolvers {
  export type HasNextPageResolver<T extends ITypeMap> = (
    parent: T["PageInfoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type HasPreviousPageResolver<T extends ITypeMap> = (
    parent: T["PageInfoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type StartCursorResolver<T extends ITypeMap> = (
    parent: T["PageInfoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type EndCursorResolver<T extends ITypeMap> = (
    parent: T["PageInfoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    hasNextPage: (
      parent: T["PageInfoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    hasPreviousPage: (
      parent: T["PageInfoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    startCursor: (
      parent: T["PageInfoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    endCursor: (
      parent: T["PageInfoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace ProductEdgeResolvers {
  export type NodeResolver<T extends ITypeMap> = (
    parent: T["ProductEdgeParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ProductParent"] | Promise<T["ProductParent"]>;

  export type CursorResolver<T extends ITypeMap> = (
    parent: T["ProductEdgeParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    node: (
      parent: T["ProductEdgeParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ProductParent"] | Promise<T["ProductParent"]>;
    cursor: (
      parent: T["ProductEdgeParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace AggregateProductResolvers {
  export type CountResolver<T extends ITypeMap> = (
    parent: T["AggregateProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    count: (
      parent: T["AggregateProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace UserEdgeResolvers {
  export type NodeResolver<T extends ITypeMap> = (
    parent: T["UserEdgeParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type CursorResolver<T extends ITypeMap> = (
    parent: T["UserEdgeParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    node: (
      parent: T["UserEdgeParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    cursor: (
      parent: T["UserEdgeParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace AggregateUserResolvers {
  export type CountResolver<T extends ITypeMap> = (
    parent: T["AggregateUserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    count: (
      parent: T["AggregateUserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace ProductResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type BrandResolver<T extends ITypeMap> = (
    parent: T["ProductParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["BrandParent"] | Promise<T["BrandParent"]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    brand: (
      parent: T["ProductParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["BrandParent"] | Promise<T["BrandParent"]>;
  }
}

export namespace BrandResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["BrandParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver<T extends ITypeMap> = (
    parent: T["BrandParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["BrandParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T["BrandParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  UserConnection: UserConnectionResolvers.Type<T>;
  ProductConnection: ProductConnectionResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  PageInfo: PageInfoResolvers.Type<T>;
  ProductEdge: ProductEdgeResolvers.Type<T>;
  AggregateProduct: AggregateProductResolvers.Type<T>;
  UserEdge: UserEdgeResolvers.Type<T>;
  AggregateUser: AggregateUserResolvers.Type<T>;
  Product: ProductResolvers.Type<T>;
  Brand: BrandResolvers.Type<T>;
}
