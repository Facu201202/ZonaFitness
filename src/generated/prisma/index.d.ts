
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Categorias
 * 
 */
export type Categorias = $Result.DefaultSelection<Prisma.$CategoriasPayload>
/**
 * Model Productos
 * 
 */
export type Productos = $Result.DefaultSelection<Prisma.$ProductosPayload>
/**
 * Model Sizes
 * 
 */
export type Sizes = $Result.DefaultSelection<Prisma.$SizesPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model Publicaciones
 * 
 */
export type Publicaciones = $Result.DefaultSelection<Prisma.$PublicacionesPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Clientes
 * 
 */
export type Clientes = $Result.DefaultSelection<Prisma.$ClientesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categorias.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categorias`: Exposes CRUD operations for the **Categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.CategoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **Productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.ProductosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sizes`: Exposes CRUD operations for the **Sizes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.sizes.findMany()
    * ```
    */
  get sizes(): Prisma.SizesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicaciones`: Exposes CRUD operations for the **Publicaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicaciones
    * const publicaciones = await prisma.publicaciones.findMany()
    * ```
    */
  get publicaciones(): Prisma.PublicacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **Clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.ClientesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Categorias: 'Categorias',
    Productos: 'Productos',
    Sizes: 'Sizes',
    Stock: 'Stock',
    Publicaciones: 'Publicaciones',
    Usuarios: 'Usuarios',
    Clientes: 'Clientes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categorias" | "productos" | "sizes" | "stock" | "publicaciones" | "usuarios" | "clientes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categorias: {
        payload: Prisma.$CategoriasPayload<ExtArgs>
        fields: Prisma.CategoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          findFirst: {
            args: Prisma.CategoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          findMany: {
            args: Prisma.CategoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>[]
          }
          create: {
            args: Prisma.CategoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          createMany: {
            args: Prisma.CategoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>[]
          }
          delete: {
            args: Prisma.CategoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          update: {
            args: Prisma.CategoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          deleteMany: {
            args: Prisma.CategoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>[]
          }
          upsert: {
            args: Prisma.CategoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.CategoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      Productos: {
        payload: Prisma.$ProductosPayload<ExtArgs>
        fields: Prisma.ProductosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          findFirst: {
            args: Prisma.ProductosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          findMany: {
            args: Prisma.ProductosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          create: {
            args: Prisma.ProductosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          createMany: {
            args: Prisma.ProductosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          delete: {
            args: Prisma.ProductosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          update: {
            args: Prisma.ProductosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          deleteMany: {
            args: Prisma.ProductosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          upsert: {
            args: Prisma.ProductosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.ProductosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      Sizes: {
        payload: Prisma.$SizesPayload<ExtArgs>
        fields: Prisma.SizesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SizesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SizesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          findFirst: {
            args: Prisma.SizesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SizesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          findMany: {
            args: Prisma.SizesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>[]
          }
          create: {
            args: Prisma.SizesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          createMany: {
            args: Prisma.SizesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SizesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>[]
          }
          delete: {
            args: Prisma.SizesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          update: {
            args: Prisma.SizesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          deleteMany: {
            args: Prisma.SizesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SizesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SizesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>[]
          }
          upsert: {
            args: Prisma.SizesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizesPayload>
          }
          aggregate: {
            args: Prisma.SizesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSizes>
          }
          groupBy: {
            args: Prisma.SizesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SizesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SizesCountArgs<ExtArgs>
            result: $Utils.Optional<SizesCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      Publicaciones: {
        payload: Prisma.$PublicacionesPayload<ExtArgs>
        fields: Prisma.PublicacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>
          }
          findFirst: {
            args: Prisma.PublicacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>
          }
          findMany: {
            args: Prisma.PublicacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>[]
          }
          create: {
            args: Prisma.PublicacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>
          }
          createMany: {
            args: Prisma.PublicacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicacionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>[]
          }
          delete: {
            args: Prisma.PublicacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>
          }
          update: {
            args: Prisma.PublicacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>
          }
          deleteMany: {
            args: Prisma.PublicacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicacionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>[]
          }
          upsert: {
            args: Prisma.PublicacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionesPayload>
          }
          aggregate: {
            args: Prisma.PublicacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicaciones>
          }
          groupBy: {
            args: Prisma.PublicacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicacionesCountArgs<ExtArgs>
            result: $Utils.Optional<PublicacionesCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Clientes: {
        payload: Prisma.$ClientesPayload<ExtArgs>
        fields: Prisma.ClientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findFirst: {
            args: Prisma.ClientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findMany: {
            args: Prisma.ClientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          create: {
            args: Prisma.ClientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          createMany: {
            args: Prisma.ClientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          delete: {
            args: Prisma.ClientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          update: {
            args: Prisma.ClientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          deleteMany: {
            args: Prisma.ClientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          upsert: {
            args: Prisma.ClientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.ClientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categorias?: CategoriasOmit
    productos?: ProductosOmit
    sizes?: SizesOmit
    stock?: StockOmit
    publicaciones?: PublicacionesOmit
    usuarios?: UsuariosOmit
    clientes?: ClientesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    productos: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriasCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductosWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    stocks: number
    publicaciones: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | ProductosCountOutputTypeCountStocksArgs
    publicaciones?: boolean | ProductosCountOutputTypeCountPublicacionesArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountPublicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionesWhereInput
  }


  /**
   * Count Type SizesCountOutputType
   */

  export type SizesCountOutputType = {
    stocks: number
  }

  export type SizesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | SizesCountOutputTypeCountStocksArgs
  }

  // Custom InputTypes
  /**
   * SizesCountOutputType without action
   */
  export type SizesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SizesCountOutputType
     */
    select?: SizesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SizesCountOutputType without action
   */
  export type SizesCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }


  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    usuario: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | ClientesCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    id_categoria: number
    nombre: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriasSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriasMinAggregateInputType = {
    id_categoria?: true
    nombre?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id_categoria?: true
    nombre?: true
  }

  export type CategoriasCountAggregateInputType = {
    id_categoria?: true
    nombre?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to aggregate.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type CategoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriasWhereInput
    orderBy?: CategoriasOrderByWithAggregationInput | CategoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: CategoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id_categoria: number
    nombre: string
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends CategoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type CategoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    productos?: boolean | Categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>

  export type CategoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type CategoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type CategoriasSelectScalar = {
    id_categoria?: boolean
    nombre?: boolean
  }

  export type CategoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre", ExtArgs["result"]["categorias"]>
  export type CategoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorias"
    objects: {
      productos: Prisma.$ProductosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre: string
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type CategoriasGetPayload<S extends boolean | null | undefined | CategoriasDefaultArgs> = $Result.GetResult<Prisma.$CategoriasPayload, S>

  type CategoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface CategoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorias'], meta: { name: 'Categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {CategoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriasFindUniqueArgs>(args: SelectSubset<T, CategoriasFindUniqueArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriasFindFirstArgs>(args?: SelectSubset<T, CategoriasFindFirstArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends CategoriasFindManyArgs>(args?: SelectSubset<T, CategoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {CategoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends CategoriasCreateArgs>(args: SelectSubset<T, CategoriasCreateArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriasCreateManyArgs>(args?: SelectSubset<T, CategoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.createManyAndReturn({
     *   select: { id_categoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorias.
     * @param {CategoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends CategoriasDeleteArgs>(args: SelectSubset<T, CategoriasDeleteArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {CategoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriasUpdateArgs>(args: SelectSubset<T, CategoriasUpdateArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriasDeleteManyArgs>(args?: SelectSubset<T, CategoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriasUpdateManyArgs>(args: SelectSubset<T, CategoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriasUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.updateManyAndReturn({
     *   select: { id_categoria: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorias.
     * @param {CategoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends CategoriasUpsertArgs>(args: SelectSubset<T, CategoriasUpsertArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriasCountArgs>(
      args?: Subset<T, CategoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriasGroupByArgs['orderBy'] }
        : { orderBy?: CategoriasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorias model
   */
  readonly fields: CategoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categorias$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categorias$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categorias model
   */
  interface CategoriasFieldRefs {
    readonly id_categoria: FieldRef<"Categorias", 'Int'>
    readonly nombre: FieldRef<"Categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorias findUnique
   */
  export type CategoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias findUniqueOrThrow
   */
  export type CategoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias findFirst
   */
  export type CategoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias findFirstOrThrow
   */
  export type CategoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias findMany
   */
  export type CategoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias create
   */
  export type CategoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorias.
     */
    data: XOR<CategoriasCreateInput, CategoriasUncheckedCreateInput>
  }

  /**
   * Categorias createMany
   */
  export type CategoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriasCreateManyInput | CategoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorias createManyAndReturn
   */
  export type CategoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriasCreateManyInput | CategoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorias update
   */
  export type CategoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorias.
     */
    data: XOR<CategoriasUpdateInput, CategoriasUncheckedUpdateInput>
    /**
     * Choose, which Categorias to update.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias updateMany
   */
  export type CategoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriasUpdateManyMutationInput, CategoriasUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categorias updateManyAndReturn
   */
  export type CategoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriasUpdateManyMutationInput, CategoriasUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categorias upsert
   */
  export type CategoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorias to update in case it exists.
     */
    where: CategoriasWhereUniqueInput
    /**
     * In case the Categorias found by the `where` argument doesn't exist, create a new Categorias with this data.
     */
    create: XOR<CategoriasCreateInput, CategoriasUncheckedCreateInput>
    /**
     * In case the Categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriasUpdateInput, CategoriasUncheckedUpdateInput>
  }

  /**
   * Categorias delete
   */
  export type CategoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter which Categorias to delete.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias deleteMany
   */
  export type CategoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categorias.productos
   */
  export type Categorias$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    where?: ProductosWhereInput
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    cursor?: ProductosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Categorias without action
   */
  export type CategoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
  }


  /**
   * Model Productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    id_producto: number | null
    precio: number | null
    id_categoria: number | null
  }

  export type ProductosSumAggregateOutputType = {
    id_producto: number | null
    precio: number | null
    id_categoria: number | null
  }

  export type ProductosMinAggregateOutputType = {
    id_producto: number | null
    nombre: string | null
    precio: number | null
    foto: string | null
    color: string | null
    genero: string | null
    id_categoria: number | null
  }

  export type ProductosMaxAggregateOutputType = {
    id_producto: number | null
    nombre: string | null
    precio: number | null
    foto: string | null
    color: string | null
    genero: string | null
    id_categoria: number | null
  }

  export type ProductosCountAggregateOutputType = {
    id_producto: number
    nombre: number
    precio: number
    foto: number
    color: number
    genero: number
    id_categoria: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    id_producto?: true
    precio?: true
    id_categoria?: true
  }

  export type ProductosSumAggregateInputType = {
    id_producto?: true
    precio?: true
    id_categoria?: true
  }

  export type ProductosMinAggregateInputType = {
    id_producto?: true
    nombre?: true
    precio?: true
    foto?: true
    color?: true
    genero?: true
    id_categoria?: true
  }

  export type ProductosMaxAggregateInputType = {
    id_producto?: true
    nombre?: true
    precio?: true
    foto?: true
    color?: true
    genero?: true
    id_categoria?: true
  }

  export type ProductosCountAggregateInputType = {
    id_producto?: true
    nombre?: true
    precio?: true
    foto?: true
    color?: true
    genero?: true
    id_categoria?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to aggregate.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type ProductosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductosWhereInput
    orderBy?: ProductosOrderByWithAggregationInput | ProductosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: ProductosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id_producto: number
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    id_categoria: number
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends ProductosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type ProductosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    nombre?: boolean
    precio?: boolean
    foto?: boolean
    color?: boolean
    genero?: boolean
    id_categoria?: boolean
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    stocks?: boolean | Productos$stocksArgs<ExtArgs>
    publicaciones?: boolean | Productos$publicacionesArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    nombre?: boolean
    precio?: boolean
    foto?: boolean
    color?: boolean
    genero?: boolean
    id_categoria?: boolean
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    nombre?: boolean
    precio?: boolean
    foto?: boolean
    color?: boolean
    genero?: boolean
    id_categoria?: boolean
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectScalar = {
    id_producto?: boolean
    nombre?: boolean
    precio?: boolean
    foto?: boolean
    color?: boolean
    genero?: boolean
    id_categoria?: boolean
  }

  export type ProductosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_producto" | "nombre" | "precio" | "foto" | "color" | "genero" | "id_categoria", ExtArgs["result"]["productos"]>
  export type ProductosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    stocks?: boolean | Productos$stocksArgs<ExtArgs>
    publicaciones?: boolean | Productos$publicacionesArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
  }
  export type ProductosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
  }

  export type $ProductosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Productos"
    objects: {
      categoria: Prisma.$CategoriasPayload<ExtArgs>
      stocks: Prisma.$StockPayload<ExtArgs>[]
      publicaciones: Prisma.$PublicacionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_producto: number
      nombre: string
      precio: number
      foto: string
      color: string
      genero: string
      id_categoria: number
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type ProductosGetPayload<S extends boolean | null | undefined | ProductosDefaultArgs> = $Result.GetResult<Prisma.$ProductosPayload, S>

  type ProductosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface ProductosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Productos'], meta: { name: 'Productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {ProductosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductosFindUniqueArgs>(args: SelectSubset<T, ProductosFindUniqueArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductosFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductosFindFirstArgs>(args?: SelectSubset<T, ProductosFindFirstArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductosFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.findMany({ select: { id_producto: true } })
     * 
     */
    findMany<T extends ProductosFindManyArgs>(args?: SelectSubset<T, ProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {ProductosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends ProductosCreateArgs>(args: SelectSubset<T, ProductosCreateArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductosCreateManyArgs>(args?: SelectSubset<T, ProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.createManyAndReturn({
     *   select: { id_producto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductosCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productos.
     * @param {ProductosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends ProductosDeleteArgs>(args: SelectSubset<T, ProductosDeleteArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {ProductosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductosUpdateArgs>(args: SelectSubset<T, ProductosUpdateArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductosDeleteManyArgs>(args?: SelectSubset<T, ProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductosUpdateManyArgs>(args: SelectSubset<T, ProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductosUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.updateManyAndReturn({
     *   select: { id_producto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductosUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productos.
     * @param {ProductosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends ProductosUpsertArgs>(args: SelectSubset<T, ProductosUpsertArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductosCountArgs>(
      args?: Subset<T, ProductosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductosGroupByArgs['orderBy'] }
        : { orderBy?: ProductosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Productos model
   */
  readonly fields: ProductosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriasDefaultArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stocks<T extends Productos$stocksArgs<ExtArgs> = {}>(args?: Subset<T, Productos$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publicaciones<T extends Productos$publicacionesArgs<ExtArgs> = {}>(args?: Subset<T, Productos$publicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Productos model
   */
  interface ProductosFieldRefs {
    readonly id_producto: FieldRef<"Productos", 'Int'>
    readonly nombre: FieldRef<"Productos", 'String'>
    readonly precio: FieldRef<"Productos", 'Float'>
    readonly foto: FieldRef<"Productos", 'String'>
    readonly color: FieldRef<"Productos", 'String'>
    readonly genero: FieldRef<"Productos", 'String'>
    readonly id_categoria: FieldRef<"Productos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Productos findUnique
   */
  export type ProductosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos findUniqueOrThrow
   */
  export type ProductosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos findFirst
   */
  export type ProductosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos findFirstOrThrow
   */
  export type ProductosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos findMany
   */
  export type ProductosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos create
   */
  export type ProductosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The data needed to create a Productos.
     */
    data: XOR<ProductosCreateInput, ProductosUncheckedCreateInput>
  }

  /**
   * Productos createMany
   */
  export type ProductosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductosCreateManyInput | ProductosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Productos createManyAndReturn
   */
  export type ProductosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductosCreateManyInput | ProductosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Productos update
   */
  export type ProductosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The data needed to update a Productos.
     */
    data: XOR<ProductosUpdateInput, ProductosUncheckedUpdateInput>
    /**
     * Choose, which Productos to update.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos updateMany
   */
  export type ProductosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Productos updateManyAndReturn
   */
  export type ProductosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Productos upsert
   */
  export type ProductosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The filter to search for the Productos to update in case it exists.
     */
    where: ProductosWhereUniqueInput
    /**
     * In case the Productos found by the `where` argument doesn't exist, create a new Productos with this data.
     */
    create: XOR<ProductosCreateInput, ProductosUncheckedCreateInput>
    /**
     * In case the Productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductosUpdateInput, ProductosUncheckedUpdateInput>
  }

  /**
   * Productos delete
   */
  export type ProductosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter which Productos to delete.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos deleteMany
   */
  export type ProductosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Productos.stocks
   */
  export type Productos$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Productos.publicaciones
   */
  export type Productos$publicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    where?: PublicacionesWhereInput
    orderBy?: PublicacionesOrderByWithRelationInput | PublicacionesOrderByWithRelationInput[]
    cursor?: PublicacionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacionesScalarFieldEnum | PublicacionesScalarFieldEnum[]
  }

  /**
   * Productos without action
   */
  export type ProductosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
  }


  /**
   * Model Sizes
   */

  export type AggregateSizes = {
    _count: SizesCountAggregateOutputType | null
    _avg: SizesAvgAggregateOutputType | null
    _sum: SizesSumAggregateOutputType | null
    _min: SizesMinAggregateOutputType | null
    _max: SizesMaxAggregateOutputType | null
  }

  export type SizesAvgAggregateOutputType = {
    id_talle: number | null
  }

  export type SizesSumAggregateOutputType = {
    id_talle: number | null
  }

  export type SizesMinAggregateOutputType = {
    id_talle: number | null
    talle: string | null
    categoria_talle: string | null
  }

  export type SizesMaxAggregateOutputType = {
    id_talle: number | null
    talle: string | null
    categoria_talle: string | null
  }

  export type SizesCountAggregateOutputType = {
    id_talle: number
    talle: number
    categoria_talle: number
    _all: number
  }


  export type SizesAvgAggregateInputType = {
    id_talle?: true
  }

  export type SizesSumAggregateInputType = {
    id_talle?: true
  }

  export type SizesMinAggregateInputType = {
    id_talle?: true
    talle?: true
    categoria_talle?: true
  }

  export type SizesMaxAggregateInputType = {
    id_talle?: true
    talle?: true
    categoria_talle?: true
  }

  export type SizesCountAggregateInputType = {
    id_talle?: true
    talle?: true
    categoria_talle?: true
    _all?: true
  }

  export type SizesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to aggregate.
     */
    where?: SizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizesOrderByWithRelationInput | SizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SizesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SizesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizesMaxAggregateInputType
  }

  export type GetSizesAggregateType<T extends SizesAggregateArgs> = {
        [P in keyof T & keyof AggregateSizes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSizes[P]>
      : GetScalarType<T[P], AggregateSizes[P]>
  }




  export type SizesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizesWhereInput
    orderBy?: SizesOrderByWithAggregationInput | SizesOrderByWithAggregationInput[]
    by: SizesScalarFieldEnum[] | SizesScalarFieldEnum
    having?: SizesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizesCountAggregateInputType | true
    _avg?: SizesAvgAggregateInputType
    _sum?: SizesSumAggregateInputType
    _min?: SizesMinAggregateInputType
    _max?: SizesMaxAggregateInputType
  }

  export type SizesGroupByOutputType = {
    id_talle: number
    talle: string
    categoria_talle: string
    _count: SizesCountAggregateOutputType | null
    _avg: SizesAvgAggregateOutputType | null
    _sum: SizesSumAggregateOutputType | null
    _min: SizesMinAggregateOutputType | null
    _max: SizesMaxAggregateOutputType | null
  }

  type GetSizesGroupByPayload<T extends SizesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizesGroupByOutputType[P]>
            : GetScalarType<T[P], SizesGroupByOutputType[P]>
        }
      >
    >


  export type SizesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_talle?: boolean
    talle?: boolean
    categoria_talle?: boolean
    stocks?: boolean | Sizes$stocksArgs<ExtArgs>
    _count?: boolean | SizesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sizes"]>

  export type SizesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_talle?: boolean
    talle?: boolean
    categoria_talle?: boolean
  }, ExtArgs["result"]["sizes"]>

  export type SizesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_talle?: boolean
    talle?: boolean
    categoria_talle?: boolean
  }, ExtArgs["result"]["sizes"]>

  export type SizesSelectScalar = {
    id_talle?: boolean
    talle?: boolean
    categoria_talle?: boolean
  }

  export type SizesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_talle" | "talle" | "categoria_talle", ExtArgs["result"]["sizes"]>
  export type SizesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | Sizes$stocksArgs<ExtArgs>
    _count?: boolean | SizesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SizesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SizesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SizesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sizes"
    objects: {
      stocks: Prisma.$StockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_talle: number
      talle: string
      categoria_talle: string
    }, ExtArgs["result"]["sizes"]>
    composites: {}
  }

  type SizesGetPayload<S extends boolean | null | undefined | SizesDefaultArgs> = $Result.GetResult<Prisma.$SizesPayload, S>

  type SizesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SizesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SizesCountAggregateInputType | true
    }

  export interface SizesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sizes'], meta: { name: 'Sizes' } }
    /**
     * Find zero or one Sizes that matches the filter.
     * @param {SizesFindUniqueArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SizesFindUniqueArgs>(args: SelectSubset<T, SizesFindUniqueArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sizes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SizesFindUniqueOrThrowArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SizesFindUniqueOrThrowArgs>(args: SelectSubset<T, SizesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesFindFirstArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SizesFindFirstArgs>(args?: SelectSubset<T, SizesFindFirstArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sizes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesFindFirstOrThrowArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SizesFindFirstOrThrowArgs>(args?: SelectSubset<T, SizesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.sizes.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.sizes.findMany({ take: 10 })
     * 
     * // Only select the `id_talle`
     * const sizesWithId_talleOnly = await prisma.sizes.findMany({ select: { id_talle: true } })
     * 
     */
    findMany<T extends SizesFindManyArgs>(args?: SelectSubset<T, SizesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sizes.
     * @param {SizesCreateArgs} args - Arguments to create a Sizes.
     * @example
     * // Create one Sizes
     * const Sizes = await prisma.sizes.create({
     *   data: {
     *     // ... data to create a Sizes
     *   }
     * })
     * 
     */
    create<T extends SizesCreateArgs>(args: SelectSubset<T, SizesCreateArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sizes.
     * @param {SizesCreateManyArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const sizes = await prisma.sizes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SizesCreateManyArgs>(args?: SelectSubset<T, SizesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sizes and returns the data saved in the database.
     * @param {SizesCreateManyAndReturnArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const sizes = await prisma.sizes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sizes and only return the `id_talle`
     * const sizesWithId_talleOnly = await prisma.sizes.createManyAndReturn({
     *   select: { id_talle: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SizesCreateManyAndReturnArgs>(args?: SelectSubset<T, SizesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sizes.
     * @param {SizesDeleteArgs} args - Arguments to delete one Sizes.
     * @example
     * // Delete one Sizes
     * const Sizes = await prisma.sizes.delete({
     *   where: {
     *     // ... filter to delete one Sizes
     *   }
     * })
     * 
     */
    delete<T extends SizesDeleteArgs>(args: SelectSubset<T, SizesDeleteArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sizes.
     * @param {SizesUpdateArgs} args - Arguments to update one Sizes.
     * @example
     * // Update one Sizes
     * const sizes = await prisma.sizes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SizesUpdateArgs>(args: SelectSubset<T, SizesUpdateArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sizes.
     * @param {SizesDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.sizes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SizesDeleteManyArgs>(args?: SelectSubset<T, SizesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const sizes = await prisma.sizes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SizesUpdateManyArgs>(args: SelectSubset<T, SizesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes and returns the data updated in the database.
     * @param {SizesUpdateManyAndReturnArgs} args - Arguments to update many Sizes.
     * @example
     * // Update many Sizes
     * const sizes = await prisma.sizes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sizes and only return the `id_talle`
     * const sizesWithId_talleOnly = await prisma.sizes.updateManyAndReturn({
     *   select: { id_talle: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SizesUpdateManyAndReturnArgs>(args: SelectSubset<T, SizesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sizes.
     * @param {SizesUpsertArgs} args - Arguments to update or create a Sizes.
     * @example
     * // Update or create a Sizes
     * const sizes = await prisma.sizes.upsert({
     *   create: {
     *     // ... data to create a Sizes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sizes we want to update
     *   }
     * })
     */
    upsert<T extends SizesUpsertArgs>(args: SelectSubset<T, SizesUpsertArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.sizes.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizesCountArgs>(
      args?: Subset<T, SizesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SizesAggregateArgs>(args: Subset<T, SizesAggregateArgs>): Prisma.PrismaPromise<GetSizesAggregateType<T>>

    /**
     * Group by Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SizesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizesGroupByArgs['orderBy'] }
        : { orderBy?: SizesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SizesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sizes model
   */
  readonly fields: SizesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sizes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SizesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stocks<T extends Sizes$stocksArgs<ExtArgs> = {}>(args?: Subset<T, Sizes$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sizes model
   */
  interface SizesFieldRefs {
    readonly id_talle: FieldRef<"Sizes", 'Int'>
    readonly talle: FieldRef<"Sizes", 'String'>
    readonly categoria_talle: FieldRef<"Sizes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sizes findUnique
   */
  export type SizesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where: SizesWhereUniqueInput
  }

  /**
   * Sizes findUniqueOrThrow
   */
  export type SizesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where: SizesWhereUniqueInput
  }

  /**
   * Sizes findFirst
   */
  export type SizesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizesOrderByWithRelationInput | SizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * Sizes findFirstOrThrow
   */
  export type SizesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizesOrderByWithRelationInput | SizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * Sizes findMany
   */
  export type SizesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizesOrderByWithRelationInput | SizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     */
    cursor?: SizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * Sizes create
   */
  export type SizesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * The data needed to create a Sizes.
     */
    data: XOR<SizesCreateInput, SizesUncheckedCreateInput>
  }

  /**
   * Sizes createMany
   */
  export type SizesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sizes.
     */
    data: SizesCreateManyInput | SizesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sizes createManyAndReturn
   */
  export type SizesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * The data used to create many Sizes.
     */
    data: SizesCreateManyInput | SizesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sizes update
   */
  export type SizesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * The data needed to update a Sizes.
     */
    data: XOR<SizesUpdateInput, SizesUncheckedUpdateInput>
    /**
     * Choose, which Sizes to update.
     */
    where: SizesWhereUniqueInput
  }

  /**
   * Sizes updateMany
   */
  export type SizesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizesUpdateManyMutationInput, SizesUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizesWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Sizes updateManyAndReturn
   */
  export type SizesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizesUpdateManyMutationInput, SizesUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizesWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Sizes upsert
   */
  export type SizesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * The filter to search for the Sizes to update in case it exists.
     */
    where: SizesWhereUniqueInput
    /**
     * In case the Sizes found by the `where` argument doesn't exist, create a new Sizes with this data.
     */
    create: XOR<SizesCreateInput, SizesUncheckedCreateInput>
    /**
     * In case the Sizes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SizesUpdateInput, SizesUncheckedUpdateInput>
  }

  /**
   * Sizes delete
   */
  export type SizesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
    /**
     * Filter which Sizes to delete.
     */
    where: SizesWhereUniqueInput
  }

  /**
   * Sizes deleteMany
   */
  export type SizesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to delete
     */
    where?: SizesWhereInput
    /**
     * Limit how many Sizes to delete.
     */
    limit?: number
  }

  /**
   * Sizes.stocks
   */
  export type Sizes$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Sizes without action
   */
  export type SizesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sizes
     */
    select?: SizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sizes
     */
    omit?: SizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizesInclude<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    id_stock: number | null
    cantidad: number | null
    id_producto: number | null
    id_talle: number | null
  }

  export type StockSumAggregateOutputType = {
    id_stock: number | null
    cantidad: number | null
    id_producto: number | null
    id_talle: number | null
  }

  export type StockMinAggregateOutputType = {
    id_stock: number | null
    cantidad: number | null
    id_producto: number | null
    id_talle: number | null
  }

  export type StockMaxAggregateOutputType = {
    id_stock: number | null
    cantidad: number | null
    id_producto: number | null
    id_talle: number | null
  }

  export type StockCountAggregateOutputType = {
    id_stock: number
    cantidad: number
    id_producto: number
    id_talle: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    id_stock?: true
    cantidad?: true
    id_producto?: true
    id_talle?: true
  }

  export type StockSumAggregateInputType = {
    id_stock?: true
    cantidad?: true
    id_producto?: true
    id_talle?: true
  }

  export type StockMinAggregateInputType = {
    id_stock?: true
    cantidad?: true
    id_producto?: true
    id_talle?: true
  }

  export type StockMaxAggregateInputType = {
    id_stock?: true
    cantidad?: true
    id_producto?: true
    id_talle?: true
  }

  export type StockCountAggregateInputType = {
    id_stock?: true
    cantidad?: true
    id_producto?: true
    id_talle?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id_stock: number
    cantidad: number
    id_producto: number
    id_talle: number
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_stock?: boolean
    cantidad?: boolean
    id_producto?: boolean
    id_talle?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
    talle?: boolean | SizesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_stock?: boolean
    cantidad?: boolean
    id_producto?: boolean
    id_talle?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
    talle?: boolean | SizesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_stock?: boolean
    cantidad?: boolean
    id_producto?: boolean
    id_talle?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
    talle?: boolean | SizesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectScalar = {
    id_stock?: boolean
    cantidad?: boolean
    id_producto?: boolean
    id_talle?: boolean
  }

  export type StockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_stock" | "cantidad" | "id_producto" | "id_talle", ExtArgs["result"]["stock"]>
  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
    talle?: boolean | SizesDefaultArgs<ExtArgs>
  }
  export type StockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
    talle?: boolean | SizesDefaultArgs<ExtArgs>
  }
  export type StockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
    talle?: boolean | SizesDefaultArgs<ExtArgs>
  }

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      producto: Prisma.$ProductosPayload<ExtArgs>
      talle: Prisma.$SizesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_stock: number
      cantidad: number
      id_producto: number
      id_talle: number
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id_stock`
     * const stockWithId_stockOnly = await prisma.stock.findMany({ select: { id_stock: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id_stock`
     * const stockWithId_stockOnly = await prisma.stock.createManyAndReturn({
     *   select: { id_stock: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockCreateManyAndReturnArgs>(args?: SelectSubset<T, StockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {StockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id_stock`
     * const stockWithId_stockOnly = await prisma.stock.updateManyAndReturn({
     *   select: { id_stock: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockUpdateManyAndReturnArgs>(args: SelectSubset<T, StockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    talle<T extends SizesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SizesDefaultArgs<ExtArgs>>): Prisma__SizesClient<$Result.GetResult<Prisma.$SizesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly id_stock: FieldRef<"Stock", 'Int'>
    readonly cantidad: FieldRef<"Stock", 'Int'>
    readonly id_producto: FieldRef<"Stock", 'Int'>
    readonly id_talle: FieldRef<"Stock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock createManyAndReturn
   */
  export type StockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock updateManyAndReturn
   */
  export type StockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
  }


  /**
   * Model Publicaciones
   */

  export type AggregatePublicaciones = {
    _count: PublicacionesCountAggregateOutputType | null
    _avg: PublicacionesAvgAggregateOutputType | null
    _sum: PublicacionesSumAggregateOutputType | null
    _min: PublicacionesMinAggregateOutputType | null
    _max: PublicacionesMaxAggregateOutputType | null
  }

  export type PublicacionesAvgAggregateOutputType = {
    id_publicacion: number | null
    descuento: number | null
    precio: number | null
    id_producto: number | null
  }

  export type PublicacionesSumAggregateOutputType = {
    id_publicacion: number | null
    descuento: number | null
    precio: number | null
    id_producto: number | null
  }

  export type PublicacionesMinAggregateOutputType = {
    id_publicacion: number | null
    activa: boolean | null
    caracteristicas: string | null
    descuento: number | null
    precio: number | null
    id_producto: number | null
    fecha: Date | null
  }

  export type PublicacionesMaxAggregateOutputType = {
    id_publicacion: number | null
    activa: boolean | null
    caracteristicas: string | null
    descuento: number | null
    precio: number | null
    id_producto: number | null
    fecha: Date | null
  }

  export type PublicacionesCountAggregateOutputType = {
    id_publicacion: number
    activa: number
    caracteristicas: number
    descuento: number
    precio: number
    id_producto: number
    fecha: number
    _all: number
  }


  export type PublicacionesAvgAggregateInputType = {
    id_publicacion?: true
    descuento?: true
    precio?: true
    id_producto?: true
  }

  export type PublicacionesSumAggregateInputType = {
    id_publicacion?: true
    descuento?: true
    precio?: true
    id_producto?: true
  }

  export type PublicacionesMinAggregateInputType = {
    id_publicacion?: true
    activa?: true
    caracteristicas?: true
    descuento?: true
    precio?: true
    id_producto?: true
    fecha?: true
  }

  export type PublicacionesMaxAggregateInputType = {
    id_publicacion?: true
    activa?: true
    caracteristicas?: true
    descuento?: true
    precio?: true
    id_producto?: true
    fecha?: true
  }

  export type PublicacionesCountAggregateInputType = {
    id_publicacion?: true
    activa?: true
    caracteristicas?: true
    descuento?: true
    precio?: true
    id_producto?: true
    fecha?: true
    _all?: true
  }

  export type PublicacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicaciones to aggregate.
     */
    where?: PublicacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicaciones to fetch.
     */
    orderBy?: PublicacionesOrderByWithRelationInput | PublicacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publicaciones
    **/
    _count?: true | PublicacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicacionesMaxAggregateInputType
  }

  export type GetPublicacionesAggregateType<T extends PublicacionesAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicaciones[P]>
      : GetScalarType<T[P], AggregatePublicaciones[P]>
  }




  export type PublicacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionesWhereInput
    orderBy?: PublicacionesOrderByWithAggregationInput | PublicacionesOrderByWithAggregationInput[]
    by: PublicacionesScalarFieldEnum[] | PublicacionesScalarFieldEnum
    having?: PublicacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicacionesCountAggregateInputType | true
    _avg?: PublicacionesAvgAggregateInputType
    _sum?: PublicacionesSumAggregateInputType
    _min?: PublicacionesMinAggregateInputType
    _max?: PublicacionesMaxAggregateInputType
  }

  export type PublicacionesGroupByOutputType = {
    id_publicacion: number
    activa: boolean
    caracteristicas: string
    descuento: number
    precio: number
    id_producto: number
    fecha: Date
    _count: PublicacionesCountAggregateOutputType | null
    _avg: PublicacionesAvgAggregateOutputType | null
    _sum: PublicacionesSumAggregateOutputType | null
    _min: PublicacionesMinAggregateOutputType | null
    _max: PublicacionesMaxAggregateOutputType | null
  }

  type GetPublicacionesGroupByPayload<T extends PublicacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicacionesGroupByOutputType[P]>
            : GetScalarType<T[P], PublicacionesGroupByOutputType[P]>
        }
      >
    >


  export type PublicacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_publicacion?: boolean
    activa?: boolean
    caracteristicas?: boolean
    descuento?: boolean
    precio?: boolean
    id_producto?: boolean
    fecha?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicaciones"]>

  export type PublicacionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_publicacion?: boolean
    activa?: boolean
    caracteristicas?: boolean
    descuento?: boolean
    precio?: boolean
    id_producto?: boolean
    fecha?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicaciones"]>

  export type PublicacionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_publicacion?: boolean
    activa?: boolean
    caracteristicas?: boolean
    descuento?: boolean
    precio?: boolean
    id_producto?: boolean
    fecha?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicaciones"]>

  export type PublicacionesSelectScalar = {
    id_publicacion?: boolean
    activa?: boolean
    caracteristicas?: boolean
    descuento?: boolean
    precio?: boolean
    id_producto?: boolean
    fecha?: boolean
  }

  export type PublicacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_publicacion" | "activa" | "caracteristicas" | "descuento" | "precio" | "id_producto" | "fecha", ExtArgs["result"]["publicaciones"]>
  export type PublicacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type PublicacionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type PublicacionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }

  export type $PublicacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publicaciones"
    objects: {
      producto: Prisma.$ProductosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_publicacion: number
      activa: boolean
      caracteristicas: string
      descuento: number
      precio: number
      id_producto: number
      fecha: Date
    }, ExtArgs["result"]["publicaciones"]>
    composites: {}
  }

  type PublicacionesGetPayload<S extends boolean | null | undefined | PublicacionesDefaultArgs> = $Result.GetResult<Prisma.$PublicacionesPayload, S>

  type PublicacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicacionesCountAggregateInputType | true
    }

  export interface PublicacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publicaciones'], meta: { name: 'Publicaciones' } }
    /**
     * Find zero or one Publicaciones that matches the filter.
     * @param {PublicacionesFindUniqueArgs} args - Arguments to find a Publicaciones
     * @example
     * // Get one Publicaciones
     * const publicaciones = await prisma.publicaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicacionesFindUniqueArgs>(args: SelectSubset<T, PublicacionesFindUniqueArgs<ExtArgs>>): Prisma__PublicacionesClient<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publicaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicacionesFindUniqueOrThrowArgs} args - Arguments to find a Publicaciones
     * @example
     * // Get one Publicaciones
     * const publicaciones = await prisma.publicaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicacionesClient<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionesFindFirstArgs} args - Arguments to find a Publicaciones
     * @example
     * // Get one Publicaciones
     * const publicaciones = await prisma.publicaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicacionesFindFirstArgs>(args?: SelectSubset<T, PublicacionesFindFirstArgs<ExtArgs>>): Prisma__PublicacionesClient<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionesFindFirstOrThrowArgs} args - Arguments to find a Publicaciones
     * @example
     * // Get one Publicaciones
     * const publicaciones = await prisma.publicaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicacionesClient<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publicaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publicaciones
     * const publicaciones = await prisma.publicaciones.findMany()
     * 
     * // Get first 10 Publicaciones
     * const publicaciones = await prisma.publicaciones.findMany({ take: 10 })
     * 
     * // Only select the `id_publicacion`
     * const publicacionesWithId_publicacionOnly = await prisma.publicaciones.findMany({ select: { id_publicacion: true } })
     * 
     */
    findMany<T extends PublicacionesFindManyArgs>(args?: SelectSubset<T, PublicacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publicaciones.
     * @param {PublicacionesCreateArgs} args - Arguments to create a Publicaciones.
     * @example
     * // Create one Publicaciones
     * const Publicaciones = await prisma.publicaciones.create({
     *   data: {
     *     // ... data to create a Publicaciones
     *   }
     * })
     * 
     */
    create<T extends PublicacionesCreateArgs>(args: SelectSubset<T, PublicacionesCreateArgs<ExtArgs>>): Prisma__PublicacionesClient<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publicaciones.
     * @param {PublicacionesCreateManyArgs} args - Arguments to create many Publicaciones.
     * @example
     * // Create many Publicaciones
     * const publicaciones = await prisma.publicaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicacionesCreateManyArgs>(args?: SelectSubset<T, PublicacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publicaciones and returns the data saved in the database.
     * @param {PublicacionesCreateManyAndReturnArgs} args - Arguments to create many Publicaciones.
     * @example
     * // Create many Publicaciones
     * const publicaciones = await prisma.publicaciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publicaciones and only return the `id_publicacion`
     * const publicacionesWithId_publicacionOnly = await prisma.publicaciones.createManyAndReturn({
     *   select: { id_publicacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicacionesCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicacionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publicaciones.
     * @param {PublicacionesDeleteArgs} args - Arguments to delete one Publicaciones.
     * @example
     * // Delete one Publicaciones
     * const Publicaciones = await prisma.publicaciones.delete({
     *   where: {
     *     // ... filter to delete one Publicaciones
     *   }
     * })
     * 
     */
    delete<T extends PublicacionesDeleteArgs>(args: SelectSubset<T, PublicacionesDeleteArgs<ExtArgs>>): Prisma__PublicacionesClient<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publicaciones.
     * @param {PublicacionesUpdateArgs} args - Arguments to update one Publicaciones.
     * @example
     * // Update one Publicaciones
     * const publicaciones = await prisma.publicaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicacionesUpdateArgs>(args: SelectSubset<T, PublicacionesUpdateArgs<ExtArgs>>): Prisma__PublicacionesClient<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publicaciones.
     * @param {PublicacionesDeleteManyArgs} args - Arguments to filter Publicaciones to delete.
     * @example
     * // Delete a few Publicaciones
     * const { count } = await prisma.publicaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicacionesDeleteManyArgs>(args?: SelectSubset<T, PublicacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publicaciones
     * const publicaciones = await prisma.publicaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicacionesUpdateManyArgs>(args: SelectSubset<T, PublicacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicaciones and returns the data updated in the database.
     * @param {PublicacionesUpdateManyAndReturnArgs} args - Arguments to update many Publicaciones.
     * @example
     * // Update many Publicaciones
     * const publicaciones = await prisma.publicaciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publicaciones and only return the `id_publicacion`
     * const publicacionesWithId_publicacionOnly = await prisma.publicaciones.updateManyAndReturn({
     *   select: { id_publicacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicacionesUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicacionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publicaciones.
     * @param {PublicacionesUpsertArgs} args - Arguments to update or create a Publicaciones.
     * @example
     * // Update or create a Publicaciones
     * const publicaciones = await prisma.publicaciones.upsert({
     *   create: {
     *     // ... data to create a Publicaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publicaciones we want to update
     *   }
     * })
     */
    upsert<T extends PublicacionesUpsertArgs>(args: SelectSubset<T, PublicacionesUpsertArgs<ExtArgs>>): Prisma__PublicacionesClient<$Result.GetResult<Prisma.$PublicacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publicaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionesCountArgs} args - Arguments to filter Publicaciones to count.
     * @example
     * // Count the number of Publicaciones
     * const count = await prisma.publicaciones.count({
     *   where: {
     *     // ... the filter for the Publicaciones we want to count
     *   }
     * })
    **/
    count<T extends PublicacionesCountArgs>(
      args?: Subset<T, PublicacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publicaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicacionesAggregateArgs>(args: Subset<T, PublicacionesAggregateArgs>): Prisma.PrismaPromise<GetPublicacionesAggregateType<T>>

    /**
     * Group by Publicaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicacionesGroupByArgs['orderBy'] }
        : { orderBy?: PublicacionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publicaciones model
   */
  readonly fields: PublicacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publicaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publicaciones model
   */
  interface PublicacionesFieldRefs {
    readonly id_publicacion: FieldRef<"Publicaciones", 'Int'>
    readonly activa: FieldRef<"Publicaciones", 'Boolean'>
    readonly caracteristicas: FieldRef<"Publicaciones", 'String'>
    readonly descuento: FieldRef<"Publicaciones", 'Int'>
    readonly precio: FieldRef<"Publicaciones", 'Float'>
    readonly id_producto: FieldRef<"Publicaciones", 'Int'>
    readonly fecha: FieldRef<"Publicaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publicaciones findUnique
   */
  export type PublicacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * Filter, which Publicaciones to fetch.
     */
    where: PublicacionesWhereUniqueInput
  }

  /**
   * Publicaciones findUniqueOrThrow
   */
  export type PublicacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * Filter, which Publicaciones to fetch.
     */
    where: PublicacionesWhereUniqueInput
  }

  /**
   * Publicaciones findFirst
   */
  export type PublicacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * Filter, which Publicaciones to fetch.
     */
    where?: PublicacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicaciones to fetch.
     */
    orderBy?: PublicacionesOrderByWithRelationInput | PublicacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicaciones.
     */
    cursor?: PublicacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicaciones.
     */
    distinct?: PublicacionesScalarFieldEnum | PublicacionesScalarFieldEnum[]
  }

  /**
   * Publicaciones findFirstOrThrow
   */
  export type PublicacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * Filter, which Publicaciones to fetch.
     */
    where?: PublicacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicaciones to fetch.
     */
    orderBy?: PublicacionesOrderByWithRelationInput | PublicacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicaciones.
     */
    cursor?: PublicacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicaciones.
     */
    distinct?: PublicacionesScalarFieldEnum | PublicacionesScalarFieldEnum[]
  }

  /**
   * Publicaciones findMany
   */
  export type PublicacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * Filter, which Publicaciones to fetch.
     */
    where?: PublicacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicaciones to fetch.
     */
    orderBy?: PublicacionesOrderByWithRelationInput | PublicacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publicaciones.
     */
    cursor?: PublicacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicaciones.
     */
    skip?: number
    distinct?: PublicacionesScalarFieldEnum | PublicacionesScalarFieldEnum[]
  }

  /**
   * Publicaciones create
   */
  export type PublicacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a Publicaciones.
     */
    data: XOR<PublicacionesCreateInput, PublicacionesUncheckedCreateInput>
  }

  /**
   * Publicaciones createMany
   */
  export type PublicacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publicaciones.
     */
    data: PublicacionesCreateManyInput | PublicacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publicaciones createManyAndReturn
   */
  export type PublicacionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * The data used to create many Publicaciones.
     */
    data: PublicacionesCreateManyInput | PublicacionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publicaciones update
   */
  export type PublicacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a Publicaciones.
     */
    data: XOR<PublicacionesUpdateInput, PublicacionesUncheckedUpdateInput>
    /**
     * Choose, which Publicaciones to update.
     */
    where: PublicacionesWhereUniqueInput
  }

  /**
   * Publicaciones updateMany
   */
  export type PublicacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publicaciones.
     */
    data: XOR<PublicacionesUpdateManyMutationInput, PublicacionesUncheckedUpdateManyInput>
    /**
     * Filter which Publicaciones to update
     */
    where?: PublicacionesWhereInput
    /**
     * Limit how many Publicaciones to update.
     */
    limit?: number
  }

  /**
   * Publicaciones updateManyAndReturn
   */
  export type PublicacionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * The data used to update Publicaciones.
     */
    data: XOR<PublicacionesUpdateManyMutationInput, PublicacionesUncheckedUpdateManyInput>
    /**
     * Filter which Publicaciones to update
     */
    where?: PublicacionesWhereInput
    /**
     * Limit how many Publicaciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publicaciones upsert
   */
  export type PublicacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the Publicaciones to update in case it exists.
     */
    where: PublicacionesWhereUniqueInput
    /**
     * In case the Publicaciones found by the `where` argument doesn't exist, create a new Publicaciones with this data.
     */
    create: XOR<PublicacionesCreateInput, PublicacionesUncheckedCreateInput>
    /**
     * In case the Publicaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicacionesUpdateInput, PublicacionesUncheckedUpdateInput>
  }

  /**
   * Publicaciones delete
   */
  export type PublicacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
    /**
     * Filter which Publicaciones to delete.
     */
    where: PublicacionesWhereUniqueInput
  }

  /**
   * Publicaciones deleteMany
   */
  export type PublicacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicaciones to delete
     */
    where?: PublicacionesWhereInput
    /**
     * Limit how many Publicaciones to delete.
     */
    limit?: number
  }

  /**
   * Publicaciones without action
   */
  export type PublicacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicaciones
     */
    select?: PublicacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicaciones
     */
    omit?: PublicacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionesInclude<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
    id_cliente: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
    id_cliente: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    usuario: string | null
    contraseña: string | null
    rol: string | null
    id_cliente: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    usuario: string | null
    contraseña: string | null
    rol: string | null
    id_cliente: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    usuario: number
    contraseña: number
    rol: number
    id_cliente: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
    id_cliente?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
    id_cliente?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contraseña?: true
    rol?: true
    id_cliente?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contraseña?: true
    rol?: true
    id_cliente?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contraseña?: true
    rol?: true
    id_cliente?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    usuario: string
    contraseña: string
    rol: string
    id_cliente: number
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    usuario?: boolean
    contraseña?: boolean
    rol?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    usuario?: boolean
    contraseña?: boolean
    rol?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    usuario?: boolean
    contraseña?: boolean
    rol?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    id_usuario?: boolean
    usuario?: boolean
    contraseña?: boolean
    rol?: boolean
    id_cliente?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "usuario" | "contraseña" | "rol" | "id_cliente", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }
  export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }
  export type UsuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      cliente: Prisma.$ClientesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      usuario: string
      contraseña: string
      rol: string
      id_cliente: number
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientesDefaultArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id_usuario: FieldRef<"Usuarios", 'Int'>
    readonly usuario: FieldRef<"Usuarios", 'String'>
    readonly contraseña: FieldRef<"Usuarios", 'String'>
    readonly rol: FieldRef<"Usuarios", 'String'>
    readonly id_cliente: FieldRef<"Usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios createManyAndReturn
   */
  export type UsuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios updateManyAndReturn
   */
  export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model Clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id_cliente: number | null
    dni: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id_cliente: number | null
    dni: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    dni: number | null
    ciudad: string | null
    barrio: string | null
    calle: string | null
  }

  export type ClientesMaxAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    apellido: string | null
    correo: string | null
    dni: number | null
    ciudad: string | null
    barrio: string | null
    calle: string | null
  }

  export type ClientesCountAggregateOutputType = {
    id_cliente: number
    nombre: number
    apellido: number
    correo: number
    dni: number
    ciudad: number
    barrio: number
    calle: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id_cliente?: true
    dni?: true
  }

  export type ClientesSumAggregateInputType = {
    id_cliente?: true
    dni?: true
  }

  export type ClientesMinAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    correo?: true
    dni?: true
    ciudad?: true
    barrio?: true
    calle?: true
  }

  export type ClientesMaxAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    correo?: true
    dni?: true
    ciudad?: true
    barrio?: true
    calle?: true
  }

  export type ClientesCountAggregateInputType = {
    id_cliente?: true
    nombre?: true
    apellido?: true
    correo?: true
    dni?: true
    ciudad?: true
    barrio?: true
    calle?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to aggregate.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithAggregationInput | ClientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: ClientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id_cliente: number
    nombre: string
    apellido: string
    correo: string
    dni: number
    ciudad: string
    barrio: string
    calle: string
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type ClientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    dni?: boolean
    ciudad?: boolean
    barrio?: boolean
    calle?: boolean
    usuario?: boolean | Clientes$usuarioArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    dni?: boolean
    ciudad?: boolean
    barrio?: boolean
    calle?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    dni?: boolean
    ciudad?: boolean
    barrio?: boolean
    calle?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectScalar = {
    id_cliente?: boolean
    nombre?: boolean
    apellido?: boolean
    correo?: boolean
    dni?: boolean
    ciudad?: boolean
    barrio?: boolean
    calle?: boolean
  }

  export type ClientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "nombre" | "apellido" | "correo" | "dni" | "ciudad" | "barrio" | "calle", ExtArgs["result"]["clientes"]>
  export type ClientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Clientes$usuarioArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clientes"
    objects: {
      usuario: Prisma.$UsuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      nombre: string
      apellido: string
      correo: string
      dni: number
      ciudad: string
      barrio: string
      calle: string
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = $Result.GetResult<Prisma.$ClientesPayload, S>

  type ClientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface ClientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clientes'], meta: { name: 'Clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {ClientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientesFindUniqueArgs>(args: SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientesFindFirstArgs>(args?: SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clientesWithId_clienteOnly = await prisma.clientes.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends ClientesFindManyArgs>(args?: SelectSubset<T, ClientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {ClientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends ClientesCreateArgs>(args: SelectSubset<T, ClientesCreateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientesCreateManyArgs>(args?: SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClientesCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id_cliente`
     * const clientesWithId_clienteOnly = await prisma.clientes.createManyAndReturn({
     *   select: { id_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clientes.
     * @param {ClientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends ClientesDeleteArgs>(args: SelectSubset<T, ClientesDeleteArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {ClientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientesUpdateArgs>(args: SelectSubset<T, ClientesUpdateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientesDeleteManyArgs>(args?: SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientesUpdateManyArgs>(args: SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClientesUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id_cliente`
     * const clientesWithId_clienteOnly = await prisma.clientes.updateManyAndReturn({
     *   select: { id_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientesUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clientes.
     * @param {ClientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends ClientesUpsertArgs>(args: SelectSubset<T, ClientesUpsertArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClientesCountArgs>(
      args?: Subset<T, ClientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clientes model
   */
  readonly fields: ClientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Clientes$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clientes model
   */
  interface ClientesFieldRefs {
    readonly id_cliente: FieldRef<"Clientes", 'Int'>
    readonly nombre: FieldRef<"Clientes", 'String'>
    readonly apellido: FieldRef<"Clientes", 'String'>
    readonly correo: FieldRef<"Clientes", 'String'>
    readonly dni: FieldRef<"Clientes", 'Int'>
    readonly ciudad: FieldRef<"Clientes", 'String'>
    readonly barrio: FieldRef<"Clientes", 'String'>
    readonly calle: FieldRef<"Clientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clientes findUnique
   */
  export type ClientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findUniqueOrThrow
   */
  export type ClientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findFirst
   */
  export type ClientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findFirstOrThrow
   */
  export type ClientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findMany
   */
  export type ClientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes create
   */
  export type ClientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to create a Clientes.
     */
    data: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
  }

  /**
   * Clientes createMany
   */
  export type ClientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes createManyAndReturn
   */
  export type ClientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes update
   */
  export type ClientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to update a Clientes.
     */
    data: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
    /**
     * Choose, which Clientes to update.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes updateMany
   */
  export type ClientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Clientes updateManyAndReturn
   */
  export type ClientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Clientes upsert
   */
  export type ClientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The filter to search for the Clientes to update in case it exists.
     */
    where: ClientesWhereUniqueInput
    /**
     * In case the Clientes found by the `where` argument doesn't exist, create a new Clientes with this data.
     */
    create: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
    /**
     * In case the Clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
  }

  /**
   * Clientes delete
   */
  export type ClientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter which Clientes to delete.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes deleteMany
   */
  export type ClientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Clientes.usuario
   */
  export type Clientes$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    cursor?: UsuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Clientes without action
   */
  export type ClientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriasScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre: 'nombre'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id_producto: 'id_producto',
    nombre: 'nombre',
    precio: 'precio',
    foto: 'foto',
    color: 'color',
    genero: 'genero',
    id_categoria: 'id_categoria'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const SizesScalarFieldEnum: {
    id_talle: 'id_talle',
    talle: 'talle',
    categoria_talle: 'categoria_talle'
  };

  export type SizesScalarFieldEnum = (typeof SizesScalarFieldEnum)[keyof typeof SizesScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id_stock: 'id_stock',
    cantidad: 'cantidad',
    id_producto: 'id_producto',
    id_talle: 'id_talle'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const PublicacionesScalarFieldEnum: {
    id_publicacion: 'id_publicacion',
    activa: 'activa',
    caracteristicas: 'caracteristicas',
    descuento: 'descuento',
    precio: 'precio',
    id_producto: 'id_producto',
    fecha: 'fecha'
  };

  export type PublicacionesScalarFieldEnum = (typeof PublicacionesScalarFieldEnum)[keyof typeof PublicacionesScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    usuario: 'usuario',
    contraseña: 'contraseña',
    rol: 'rol',
    id_cliente: 'id_cliente'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    id_cliente: 'id_cliente',
    nombre: 'nombre',
    apellido: 'apellido',
    correo: 'correo',
    dni: 'dni',
    ciudad: 'ciudad',
    barrio: 'barrio',
    calle: 'calle'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoriasWhereInput = {
    AND?: CategoriasWhereInput | CategoriasWhereInput[]
    OR?: CategoriasWhereInput[]
    NOT?: CategoriasWhereInput | CategoriasWhereInput[]
    id_categoria?: IntFilter<"Categorias"> | number
    nombre?: StringFilter<"Categorias"> | string
    productos?: ProductosListRelationFilter
  }

  export type CategoriasOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    productos?: ProductosOrderByRelationAggregateInput
  }

  export type CategoriasWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    AND?: CategoriasWhereInput | CategoriasWhereInput[]
    OR?: CategoriasWhereInput[]
    NOT?: CategoriasWhereInput | CategoriasWhereInput[]
    nombre?: StringFilter<"Categorias"> | string
    productos?: ProductosListRelationFilter
  }, "id_categoria">

  export type CategoriasOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    _count?: CategoriasCountOrderByAggregateInput
    _avg?: CategoriasAvgOrderByAggregateInput
    _max?: CategoriasMaxOrderByAggregateInput
    _min?: CategoriasMinOrderByAggregateInput
    _sum?: CategoriasSumOrderByAggregateInput
  }

  export type CategoriasScalarWhereWithAggregatesInput = {
    AND?: CategoriasScalarWhereWithAggregatesInput | CategoriasScalarWhereWithAggregatesInput[]
    OR?: CategoriasScalarWhereWithAggregatesInput[]
    NOT?: CategoriasScalarWhereWithAggregatesInput | CategoriasScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"Categorias"> | number
    nombre?: StringWithAggregatesFilter<"Categorias"> | string
  }

  export type ProductosWhereInput = {
    AND?: ProductosWhereInput | ProductosWhereInput[]
    OR?: ProductosWhereInput[]
    NOT?: ProductosWhereInput | ProductosWhereInput[]
    id_producto?: IntFilter<"Productos"> | number
    nombre?: StringFilter<"Productos"> | string
    precio?: FloatFilter<"Productos"> | number
    foto?: StringFilter<"Productos"> | string
    color?: StringFilter<"Productos"> | string
    genero?: StringFilter<"Productos"> | string
    id_categoria?: IntFilter<"Productos"> | number
    categoria?: XOR<CategoriasScalarRelationFilter, CategoriasWhereInput>
    stocks?: StockListRelationFilter
    publicaciones?: PublicacionesListRelationFilter
  }

  export type ProductosOrderByWithRelationInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    foto?: SortOrder
    color?: SortOrder
    genero?: SortOrder
    id_categoria?: SortOrder
    categoria?: CategoriasOrderByWithRelationInput
    stocks?: StockOrderByRelationAggregateInput
    publicaciones?: PublicacionesOrderByRelationAggregateInput
  }

  export type ProductosWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: number
    AND?: ProductosWhereInput | ProductosWhereInput[]
    OR?: ProductosWhereInput[]
    NOT?: ProductosWhereInput | ProductosWhereInput[]
    nombre?: StringFilter<"Productos"> | string
    precio?: FloatFilter<"Productos"> | number
    foto?: StringFilter<"Productos"> | string
    color?: StringFilter<"Productos"> | string
    genero?: StringFilter<"Productos"> | string
    id_categoria?: IntFilter<"Productos"> | number
    categoria?: XOR<CategoriasScalarRelationFilter, CategoriasWhereInput>
    stocks?: StockListRelationFilter
    publicaciones?: PublicacionesListRelationFilter
  }, "id_producto">

  export type ProductosOrderByWithAggregationInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    foto?: SortOrder
    color?: SortOrder
    genero?: SortOrder
    id_categoria?: SortOrder
    _count?: ProductosCountOrderByAggregateInput
    _avg?: ProductosAvgOrderByAggregateInput
    _max?: ProductosMaxOrderByAggregateInput
    _min?: ProductosMinOrderByAggregateInput
    _sum?: ProductosSumOrderByAggregateInput
  }

  export type ProductosScalarWhereWithAggregatesInput = {
    AND?: ProductosScalarWhereWithAggregatesInput | ProductosScalarWhereWithAggregatesInput[]
    OR?: ProductosScalarWhereWithAggregatesInput[]
    NOT?: ProductosScalarWhereWithAggregatesInput | ProductosScalarWhereWithAggregatesInput[]
    id_producto?: IntWithAggregatesFilter<"Productos"> | number
    nombre?: StringWithAggregatesFilter<"Productos"> | string
    precio?: FloatWithAggregatesFilter<"Productos"> | number
    foto?: StringWithAggregatesFilter<"Productos"> | string
    color?: StringWithAggregatesFilter<"Productos"> | string
    genero?: StringWithAggregatesFilter<"Productos"> | string
    id_categoria?: IntWithAggregatesFilter<"Productos"> | number
  }

  export type SizesWhereInput = {
    AND?: SizesWhereInput | SizesWhereInput[]
    OR?: SizesWhereInput[]
    NOT?: SizesWhereInput | SizesWhereInput[]
    id_talle?: IntFilter<"Sizes"> | number
    talle?: StringFilter<"Sizes"> | string
    categoria_talle?: StringFilter<"Sizes"> | string
    stocks?: StockListRelationFilter
  }

  export type SizesOrderByWithRelationInput = {
    id_talle?: SortOrder
    talle?: SortOrder
    categoria_talle?: SortOrder
    stocks?: StockOrderByRelationAggregateInput
  }

  export type SizesWhereUniqueInput = Prisma.AtLeast<{
    id_talle?: number
    AND?: SizesWhereInput | SizesWhereInput[]
    OR?: SizesWhereInput[]
    NOT?: SizesWhereInput | SizesWhereInput[]
    talle?: StringFilter<"Sizes"> | string
    categoria_talle?: StringFilter<"Sizes"> | string
    stocks?: StockListRelationFilter
  }, "id_talle">

  export type SizesOrderByWithAggregationInput = {
    id_talle?: SortOrder
    talle?: SortOrder
    categoria_talle?: SortOrder
    _count?: SizesCountOrderByAggregateInput
    _avg?: SizesAvgOrderByAggregateInput
    _max?: SizesMaxOrderByAggregateInput
    _min?: SizesMinOrderByAggregateInput
    _sum?: SizesSumOrderByAggregateInput
  }

  export type SizesScalarWhereWithAggregatesInput = {
    AND?: SizesScalarWhereWithAggregatesInput | SizesScalarWhereWithAggregatesInput[]
    OR?: SizesScalarWhereWithAggregatesInput[]
    NOT?: SizesScalarWhereWithAggregatesInput | SizesScalarWhereWithAggregatesInput[]
    id_talle?: IntWithAggregatesFilter<"Sizes"> | number
    talle?: StringWithAggregatesFilter<"Sizes"> | string
    categoria_talle?: StringWithAggregatesFilter<"Sizes"> | string
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id_stock?: IntFilter<"Stock"> | number
    cantidad?: IntFilter<"Stock"> | number
    id_producto?: IntFilter<"Stock"> | number
    id_talle?: IntFilter<"Stock"> | number
    producto?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
    talle?: XOR<SizesScalarRelationFilter, SizesWhereInput>
  }

  export type StockOrderByWithRelationInput = {
    id_stock?: SortOrder
    cantidad?: SortOrder
    id_producto?: SortOrder
    id_talle?: SortOrder
    producto?: ProductosOrderByWithRelationInput
    talle?: SizesOrderByWithRelationInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id_stock?: number
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    cantidad?: IntFilter<"Stock"> | number
    id_producto?: IntFilter<"Stock"> | number
    id_talle?: IntFilter<"Stock"> | number
    producto?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
    talle?: XOR<SizesScalarRelationFilter, SizesWhereInput>
  }, "id_stock">

  export type StockOrderByWithAggregationInput = {
    id_stock?: SortOrder
    cantidad?: SortOrder
    id_producto?: SortOrder
    id_talle?: SortOrder
    _count?: StockCountOrderByAggregateInput
    _avg?: StockAvgOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
    _sum?: StockSumOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id_stock?: IntWithAggregatesFilter<"Stock"> | number
    cantidad?: IntWithAggregatesFilter<"Stock"> | number
    id_producto?: IntWithAggregatesFilter<"Stock"> | number
    id_talle?: IntWithAggregatesFilter<"Stock"> | number
  }

  export type PublicacionesWhereInput = {
    AND?: PublicacionesWhereInput | PublicacionesWhereInput[]
    OR?: PublicacionesWhereInput[]
    NOT?: PublicacionesWhereInput | PublicacionesWhereInput[]
    id_publicacion?: IntFilter<"Publicaciones"> | number
    activa?: BoolFilter<"Publicaciones"> | boolean
    caracteristicas?: StringFilter<"Publicaciones"> | string
    descuento?: IntFilter<"Publicaciones"> | number
    precio?: FloatFilter<"Publicaciones"> | number
    id_producto?: IntFilter<"Publicaciones"> | number
    fecha?: DateTimeFilter<"Publicaciones"> | Date | string
    producto?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }

  export type PublicacionesOrderByWithRelationInput = {
    id_publicacion?: SortOrder
    activa?: SortOrder
    caracteristicas?: SortOrder
    descuento?: SortOrder
    precio?: SortOrder
    id_producto?: SortOrder
    fecha?: SortOrder
    producto?: ProductosOrderByWithRelationInput
  }

  export type PublicacionesWhereUniqueInput = Prisma.AtLeast<{
    id_publicacion?: number
    AND?: PublicacionesWhereInput | PublicacionesWhereInput[]
    OR?: PublicacionesWhereInput[]
    NOT?: PublicacionesWhereInput | PublicacionesWhereInput[]
    activa?: BoolFilter<"Publicaciones"> | boolean
    caracteristicas?: StringFilter<"Publicaciones"> | string
    descuento?: IntFilter<"Publicaciones"> | number
    precio?: FloatFilter<"Publicaciones"> | number
    id_producto?: IntFilter<"Publicaciones"> | number
    fecha?: DateTimeFilter<"Publicaciones"> | Date | string
    producto?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }, "id_publicacion">

  export type PublicacionesOrderByWithAggregationInput = {
    id_publicacion?: SortOrder
    activa?: SortOrder
    caracteristicas?: SortOrder
    descuento?: SortOrder
    precio?: SortOrder
    id_producto?: SortOrder
    fecha?: SortOrder
    _count?: PublicacionesCountOrderByAggregateInput
    _avg?: PublicacionesAvgOrderByAggregateInput
    _max?: PublicacionesMaxOrderByAggregateInput
    _min?: PublicacionesMinOrderByAggregateInput
    _sum?: PublicacionesSumOrderByAggregateInput
  }

  export type PublicacionesScalarWhereWithAggregatesInput = {
    AND?: PublicacionesScalarWhereWithAggregatesInput | PublicacionesScalarWhereWithAggregatesInput[]
    OR?: PublicacionesScalarWhereWithAggregatesInput[]
    NOT?: PublicacionesScalarWhereWithAggregatesInput | PublicacionesScalarWhereWithAggregatesInput[]
    id_publicacion?: IntWithAggregatesFilter<"Publicaciones"> | number
    activa?: BoolWithAggregatesFilter<"Publicaciones"> | boolean
    caracteristicas?: StringWithAggregatesFilter<"Publicaciones"> | string
    descuento?: IntWithAggregatesFilter<"Publicaciones"> | number
    precio?: FloatWithAggregatesFilter<"Publicaciones"> | number
    id_producto?: IntWithAggregatesFilter<"Publicaciones"> | number
    fecha?: DateTimeWithAggregatesFilter<"Publicaciones"> | Date | string
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id_usuario?: IntFilter<"Usuarios"> | number
    usuario?: StringFilter<"Usuarios"> | string
    contraseña?: StringFilter<"Usuarios"> | string
    rol?: StringFilter<"Usuarios"> | string
    id_cliente?: IntFilter<"Usuarios"> | number
    cliente?: XOR<ClientesScalarRelationFilter, ClientesWhereInput>
  }

  export type UsuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    id_cliente?: SortOrder
    cliente?: ClientesOrderByWithRelationInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    usuario?: StringFilter<"Usuarios"> | string
    contraseña?: StringFilter<"Usuarios"> | string
    rol?: StringFilter<"Usuarios"> | string
    id_cliente?: IntFilter<"Usuarios"> | number
    cliente?: XOR<ClientesScalarRelationFilter, ClientesWhereInput>
  }, "id_usuario">

  export type UsuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    id_cliente?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuarios"> | number
    usuario?: StringWithAggregatesFilter<"Usuarios"> | string
    contraseña?: StringWithAggregatesFilter<"Usuarios"> | string
    rol?: StringWithAggregatesFilter<"Usuarios"> | string
    id_cliente?: IntWithAggregatesFilter<"Usuarios"> | number
  }

  export type ClientesWhereInput = {
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    id_cliente?: IntFilter<"Clientes"> | number
    nombre?: StringFilter<"Clientes"> | string
    apellido?: StringFilter<"Clientes"> | string
    correo?: StringFilter<"Clientes"> | string
    dni?: IntFilter<"Clientes"> | number
    ciudad?: StringFilter<"Clientes"> | string
    barrio?: StringFilter<"Clientes"> | string
    calle?: StringFilter<"Clientes"> | string
    usuario?: UsuariosListRelationFilter
  }

  export type ClientesOrderByWithRelationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    dni?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    usuario?: UsuariosOrderByRelationAggregateInput
  }

  export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    nombre?: StringFilter<"Clientes"> | string
    apellido?: StringFilter<"Clientes"> | string
    correo?: StringFilter<"Clientes"> | string
    dni?: IntFilter<"Clientes"> | number
    ciudad?: StringFilter<"Clientes"> | string
    barrio?: StringFilter<"Clientes"> | string
    calle?: StringFilter<"Clientes"> | string
    usuario?: UsuariosListRelationFilter
  }, "id_cliente">

  export type ClientesOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    dni?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    _count?: ClientesCountOrderByAggregateInput
    _avg?: ClientesAvgOrderByAggregateInput
    _max?: ClientesMaxOrderByAggregateInput
    _min?: ClientesMinOrderByAggregateInput
    _sum?: ClientesSumOrderByAggregateInput
  }

  export type ClientesScalarWhereWithAggregatesInput = {
    AND?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    OR?: ClientesScalarWhereWithAggregatesInput[]
    NOT?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"Clientes"> | number
    nombre?: StringWithAggregatesFilter<"Clientes"> | string
    apellido?: StringWithAggregatesFilter<"Clientes"> | string
    correo?: StringWithAggregatesFilter<"Clientes"> | string
    dni?: IntWithAggregatesFilter<"Clientes"> | number
    ciudad?: StringWithAggregatesFilter<"Clientes"> | string
    barrio?: StringWithAggregatesFilter<"Clientes"> | string
    calle?: StringWithAggregatesFilter<"Clientes"> | string
  }

  export type CategoriasCreateInput = {
    nombre: string
    productos?: ProductosCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriasUncheckedCreateInput = {
    id_categoria?: number
    nombre: string
    productos?: ProductosUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: ProductosUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriasUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: ProductosUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriasCreateManyInput = {
    id_categoria?: number
    nombre: string
  }

  export type CategoriasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProductosCreateInput = {
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    categoria: CategoriasCreateNestedOneWithoutProductosInput
    stocks?: StockCreateNestedManyWithoutProductoInput
    publicaciones?: PublicacionesCreateNestedManyWithoutProductoInput
  }

  export type ProductosUncheckedCreateInput = {
    id_producto?: number
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    id_categoria: number
    stocks?: StockUncheckedCreateNestedManyWithoutProductoInput
    publicaciones?: PublicacionesUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriasUpdateOneRequiredWithoutProductosNestedInput
    stocks?: StockUpdateManyWithoutProductoNestedInput
    publicaciones?: PublicacionesUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    stocks?: StockUncheckedUpdateManyWithoutProductoNestedInput
    publicaciones?: PublicacionesUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductosCreateManyInput = {
    id_producto?: number
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    id_categoria: number
  }

  export type ProductosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
  }

  export type ProductosUncheckedUpdateManyInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
  }

  export type SizesCreateInput = {
    talle: string
    categoria_talle: string
    stocks?: StockCreateNestedManyWithoutTalleInput
  }

  export type SizesUncheckedCreateInput = {
    id_talle?: number
    talle: string
    categoria_talle: string
    stocks?: StockUncheckedCreateNestedManyWithoutTalleInput
  }

  export type SizesUpdateInput = {
    talle?: StringFieldUpdateOperationsInput | string
    categoria_talle?: StringFieldUpdateOperationsInput | string
    stocks?: StockUpdateManyWithoutTalleNestedInput
  }

  export type SizesUncheckedUpdateInput = {
    id_talle?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    categoria_talle?: StringFieldUpdateOperationsInput | string
    stocks?: StockUncheckedUpdateManyWithoutTalleNestedInput
  }

  export type SizesCreateManyInput = {
    id_talle?: number
    talle: string
    categoria_talle: string
  }

  export type SizesUpdateManyMutationInput = {
    talle?: StringFieldUpdateOperationsInput | string
    categoria_talle?: StringFieldUpdateOperationsInput | string
  }

  export type SizesUncheckedUpdateManyInput = {
    id_talle?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    categoria_talle?: StringFieldUpdateOperationsInput | string
  }

  export type StockCreateInput = {
    cantidad: number
    producto: ProductosCreateNestedOneWithoutStocksInput
    talle: SizesCreateNestedOneWithoutStocksInput
  }

  export type StockUncheckedCreateInput = {
    id_stock?: number
    cantidad: number
    id_producto: number
    id_talle: number
  }

  export type StockUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: ProductosUpdateOneRequiredWithoutStocksNestedInput
    talle?: SizesUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id_stock?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    id_talle?: IntFieldUpdateOperationsInput | number
  }

  export type StockCreateManyInput = {
    id_stock?: number
    cantidad: number
    id_producto: number
    id_talle: number
  }

  export type StockUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateManyInput = {
    id_stock?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    id_talle?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacionesCreateInput = {
    activa: boolean
    caracteristicas: string
    descuento: number
    precio: number
    fecha?: Date | string
    producto: ProductosCreateNestedOneWithoutPublicacionesInput
  }

  export type PublicacionesUncheckedCreateInput = {
    id_publicacion?: number
    activa: boolean
    caracteristicas: string
    descuento: number
    precio: number
    id_producto: number
    fecha?: Date | string
  }

  export type PublicacionesUpdateInput = {
    activa?: BoolFieldUpdateOperationsInput | boolean
    caracteristicas?: StringFieldUpdateOperationsInput | string
    descuento?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductosUpdateOneRequiredWithoutPublicacionesNestedInput
  }

  export type PublicacionesUncheckedUpdateInput = {
    id_publicacion?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    caracteristicas?: StringFieldUpdateOperationsInput | string
    descuento?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionesCreateManyInput = {
    id_publicacion?: number
    activa: boolean
    caracteristicas: string
    descuento: number
    precio: number
    id_producto: number
    fecha?: Date | string
  }

  export type PublicacionesUpdateManyMutationInput = {
    activa?: BoolFieldUpdateOperationsInput | boolean
    caracteristicas?: StringFieldUpdateOperationsInput | string
    descuento?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionesUncheckedUpdateManyInput = {
    id_publicacion?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    caracteristicas?: StringFieldUpdateOperationsInput | string
    descuento?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosCreateInput = {
    usuario: string
    contraseña: string
    rol: string
    cliente: ClientesCreateNestedOneWithoutUsuarioInput
  }

  export type UsuariosUncheckedCreateInput = {
    id_usuario?: number
    usuario: string
    contraseña: string
    rol: string
    id_cliente: number
  }

  export type UsuariosUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    cliente?: ClientesUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosCreateManyInput = {
    id_usuario?: number
    usuario: string
    contraseña: string
    rol: string
    id_cliente: number
  }

  export type UsuariosUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type ClientesCreateInput = {
    nombre: string
    apellido: string
    correo: string
    dni: number
    ciudad: string
    barrio: string
    calle: string
    usuario?: UsuariosCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo: string
    dni: number
    ciudad: string
    barrio: string
    calle: string
    usuario?: UsuariosUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    usuario?: UsuariosUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    usuario?: UsuariosUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClientesCreateManyInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo: string
    dni: number
    ciudad: string
    barrio: string
    calle: string
  }

  export type ClientesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
  }

  export type ClientesUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductosListRelationFilter = {
    every?: ProductosWhereInput
    some?: ProductosWhereInput
    none?: ProductosWhereInput
  }

  export type ProductosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriasCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriasAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type CategoriasMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriasMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriasSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoriasScalarRelationFilter = {
    is?: CategoriasWhereInput
    isNot?: CategoriasWhereInput
  }

  export type StockListRelationFilter = {
    every?: StockWhereInput
    some?: StockWhereInput
    none?: StockWhereInput
  }

  export type PublicacionesListRelationFilter = {
    every?: PublicacionesWhereInput
    some?: PublicacionesWhereInput
    none?: PublicacionesWhereInput
  }

  export type StockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicacionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductosCountOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    foto?: SortOrder
    color?: SortOrder
    genero?: SortOrder
    id_categoria?: SortOrder
  }

  export type ProductosAvgOrderByAggregateInput = {
    id_producto?: SortOrder
    precio?: SortOrder
    id_categoria?: SortOrder
  }

  export type ProductosMaxOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    foto?: SortOrder
    color?: SortOrder
    genero?: SortOrder
    id_categoria?: SortOrder
  }

  export type ProductosMinOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    foto?: SortOrder
    color?: SortOrder
    genero?: SortOrder
    id_categoria?: SortOrder
  }

  export type ProductosSumOrderByAggregateInput = {
    id_producto?: SortOrder
    precio?: SortOrder
    id_categoria?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SizesCountOrderByAggregateInput = {
    id_talle?: SortOrder
    talle?: SortOrder
    categoria_talle?: SortOrder
  }

  export type SizesAvgOrderByAggregateInput = {
    id_talle?: SortOrder
  }

  export type SizesMaxOrderByAggregateInput = {
    id_talle?: SortOrder
    talle?: SortOrder
    categoria_talle?: SortOrder
  }

  export type SizesMinOrderByAggregateInput = {
    id_talle?: SortOrder
    talle?: SortOrder
    categoria_talle?: SortOrder
  }

  export type SizesSumOrderByAggregateInput = {
    id_talle?: SortOrder
  }

  export type ProductosScalarRelationFilter = {
    is?: ProductosWhereInput
    isNot?: ProductosWhereInput
  }

  export type SizesScalarRelationFilter = {
    is?: SizesWhereInput
    isNot?: SizesWhereInput
  }

  export type StockCountOrderByAggregateInput = {
    id_stock?: SortOrder
    cantidad?: SortOrder
    id_producto?: SortOrder
    id_talle?: SortOrder
  }

  export type StockAvgOrderByAggregateInput = {
    id_stock?: SortOrder
    cantidad?: SortOrder
    id_producto?: SortOrder
    id_talle?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id_stock?: SortOrder
    cantidad?: SortOrder
    id_producto?: SortOrder
    id_talle?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id_stock?: SortOrder
    cantidad?: SortOrder
    id_producto?: SortOrder
    id_talle?: SortOrder
  }

  export type StockSumOrderByAggregateInput = {
    id_stock?: SortOrder
    cantidad?: SortOrder
    id_producto?: SortOrder
    id_talle?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PublicacionesCountOrderByAggregateInput = {
    id_publicacion?: SortOrder
    activa?: SortOrder
    caracteristicas?: SortOrder
    descuento?: SortOrder
    precio?: SortOrder
    id_producto?: SortOrder
    fecha?: SortOrder
  }

  export type PublicacionesAvgOrderByAggregateInput = {
    id_publicacion?: SortOrder
    descuento?: SortOrder
    precio?: SortOrder
    id_producto?: SortOrder
  }

  export type PublicacionesMaxOrderByAggregateInput = {
    id_publicacion?: SortOrder
    activa?: SortOrder
    caracteristicas?: SortOrder
    descuento?: SortOrder
    precio?: SortOrder
    id_producto?: SortOrder
    fecha?: SortOrder
  }

  export type PublicacionesMinOrderByAggregateInput = {
    id_publicacion?: SortOrder
    activa?: SortOrder
    caracteristicas?: SortOrder
    descuento?: SortOrder
    precio?: SortOrder
    id_producto?: SortOrder
    fecha?: SortOrder
  }

  export type PublicacionesSumOrderByAggregateInput = {
    id_publicacion?: SortOrder
    descuento?: SortOrder
    precio?: SortOrder
    id_producto?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClientesScalarRelationFilter = {
    is?: ClientesWhereInput
    isNot?: ClientesWhereInput
  }

  export type UsuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    id_cliente?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_cliente?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    id_cliente?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    id_cliente?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_cliente?: SortOrder
  }

  export type UsuariosListRelationFilter = {
    every?: UsuariosWhereInput
    some?: UsuariosWhereInput
    none?: UsuariosWhereInput
  }

  export type UsuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientesCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    dni?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
  }

  export type ClientesAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
    dni?: SortOrder
  }

  export type ClientesMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    dni?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
  }

  export type ClientesMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo?: SortOrder
    dni?: SortOrder
    ciudad?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
  }

  export type ClientesSumOrderByAggregateInput = {
    id_cliente?: SortOrder
    dni?: SortOrder
  }

  export type ProductosCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductosCreateWithoutCategoriaInput, ProductosUncheckedCreateWithoutCategoriaInput> | ProductosCreateWithoutCategoriaInput[] | ProductosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutCategoriaInput | ProductosCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductosCreateManyCategoriaInputEnvelope
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
  }

  export type ProductosUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductosCreateWithoutCategoriaInput, ProductosUncheckedCreateWithoutCategoriaInput> | ProductosCreateWithoutCategoriaInput[] | ProductosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutCategoriaInput | ProductosCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductosCreateManyCategoriaInputEnvelope
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductosUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductosCreateWithoutCategoriaInput, ProductosUncheckedCreateWithoutCategoriaInput> | ProductosCreateWithoutCategoriaInput[] | ProductosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutCategoriaInput | ProductosCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductosUpsertWithWhereUniqueWithoutCategoriaInput | ProductosUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductosCreateManyCategoriaInputEnvelope
    set?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    disconnect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    delete?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    update?: ProductosUpdateWithWhereUniqueWithoutCategoriaInput | ProductosUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductosUpdateManyWithWhereWithoutCategoriaInput | ProductosUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductosUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductosCreateWithoutCategoriaInput, ProductosUncheckedCreateWithoutCategoriaInput> | ProductosCreateWithoutCategoriaInput[] | ProductosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutCategoriaInput | ProductosCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductosUpsertWithWhereUniqueWithoutCategoriaInput | ProductosUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductosCreateManyCategoriaInputEnvelope
    set?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    disconnect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    delete?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    update?: ProductosUpdateWithWhereUniqueWithoutCategoriaInput | ProductosUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductosUpdateManyWithWhereWithoutCategoriaInput | ProductosUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
  }

  export type CategoriasCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriasCreateWithoutProductosInput, CategoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriasCreateOrConnectWithoutProductosInput
    connect?: CategoriasWhereUniqueInput
  }

  export type StockCreateNestedManyWithoutProductoInput = {
    create?: XOR<StockCreateWithoutProductoInput, StockUncheckedCreateWithoutProductoInput> | StockCreateWithoutProductoInput[] | StockUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockCreateOrConnectWithoutProductoInput | StockCreateOrConnectWithoutProductoInput[]
    createMany?: StockCreateManyProductoInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type PublicacionesCreateNestedManyWithoutProductoInput = {
    create?: XOR<PublicacionesCreateWithoutProductoInput, PublicacionesUncheckedCreateWithoutProductoInput> | PublicacionesCreateWithoutProductoInput[] | PublicacionesUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PublicacionesCreateOrConnectWithoutProductoInput | PublicacionesCreateOrConnectWithoutProductoInput[]
    createMany?: PublicacionesCreateManyProductoInputEnvelope
    connect?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
  }

  export type StockUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<StockCreateWithoutProductoInput, StockUncheckedCreateWithoutProductoInput> | StockCreateWithoutProductoInput[] | StockUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockCreateOrConnectWithoutProductoInput | StockCreateOrConnectWithoutProductoInput[]
    createMany?: StockCreateManyProductoInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type PublicacionesUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<PublicacionesCreateWithoutProductoInput, PublicacionesUncheckedCreateWithoutProductoInput> | PublicacionesCreateWithoutProductoInput[] | PublicacionesUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PublicacionesCreateOrConnectWithoutProductoInput | PublicacionesCreateOrConnectWithoutProductoInput[]
    createMany?: PublicacionesCreateManyProductoInputEnvelope
    connect?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriasUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriasCreateWithoutProductosInput, CategoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriasCreateOrConnectWithoutProductosInput
    upsert?: CategoriasUpsertWithoutProductosInput
    connect?: CategoriasWhereUniqueInput
    update?: XOR<XOR<CategoriasUpdateToOneWithWhereWithoutProductosInput, CategoriasUpdateWithoutProductosInput>, CategoriasUncheckedUpdateWithoutProductosInput>
  }

  export type StockUpdateManyWithoutProductoNestedInput = {
    create?: XOR<StockCreateWithoutProductoInput, StockUncheckedCreateWithoutProductoInput> | StockCreateWithoutProductoInput[] | StockUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockCreateOrConnectWithoutProductoInput | StockCreateOrConnectWithoutProductoInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutProductoInput | StockUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: StockCreateManyProductoInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutProductoInput | StockUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: StockUpdateManyWithWhereWithoutProductoInput | StockUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type PublicacionesUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PublicacionesCreateWithoutProductoInput, PublicacionesUncheckedCreateWithoutProductoInput> | PublicacionesCreateWithoutProductoInput[] | PublicacionesUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PublicacionesCreateOrConnectWithoutProductoInput | PublicacionesCreateOrConnectWithoutProductoInput[]
    upsert?: PublicacionesUpsertWithWhereUniqueWithoutProductoInput | PublicacionesUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PublicacionesCreateManyProductoInputEnvelope
    set?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
    disconnect?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
    delete?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
    connect?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
    update?: PublicacionesUpdateWithWhereUniqueWithoutProductoInput | PublicacionesUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PublicacionesUpdateManyWithWhereWithoutProductoInput | PublicacionesUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PublicacionesScalarWhereInput | PublicacionesScalarWhereInput[]
  }

  export type StockUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<StockCreateWithoutProductoInput, StockUncheckedCreateWithoutProductoInput> | StockCreateWithoutProductoInput[] | StockUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockCreateOrConnectWithoutProductoInput | StockCreateOrConnectWithoutProductoInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutProductoInput | StockUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: StockCreateManyProductoInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutProductoInput | StockUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: StockUpdateManyWithWhereWithoutProductoInput | StockUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type PublicacionesUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PublicacionesCreateWithoutProductoInput, PublicacionesUncheckedCreateWithoutProductoInput> | PublicacionesCreateWithoutProductoInput[] | PublicacionesUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PublicacionesCreateOrConnectWithoutProductoInput | PublicacionesCreateOrConnectWithoutProductoInput[]
    upsert?: PublicacionesUpsertWithWhereUniqueWithoutProductoInput | PublicacionesUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PublicacionesCreateManyProductoInputEnvelope
    set?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
    disconnect?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
    delete?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
    connect?: PublicacionesWhereUniqueInput | PublicacionesWhereUniqueInput[]
    update?: PublicacionesUpdateWithWhereUniqueWithoutProductoInput | PublicacionesUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PublicacionesUpdateManyWithWhereWithoutProductoInput | PublicacionesUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PublicacionesScalarWhereInput | PublicacionesScalarWhereInput[]
  }

  export type StockCreateNestedManyWithoutTalleInput = {
    create?: XOR<StockCreateWithoutTalleInput, StockUncheckedCreateWithoutTalleInput> | StockCreateWithoutTalleInput[] | StockUncheckedCreateWithoutTalleInput[]
    connectOrCreate?: StockCreateOrConnectWithoutTalleInput | StockCreateOrConnectWithoutTalleInput[]
    createMany?: StockCreateManyTalleInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type StockUncheckedCreateNestedManyWithoutTalleInput = {
    create?: XOR<StockCreateWithoutTalleInput, StockUncheckedCreateWithoutTalleInput> | StockCreateWithoutTalleInput[] | StockUncheckedCreateWithoutTalleInput[]
    connectOrCreate?: StockCreateOrConnectWithoutTalleInput | StockCreateOrConnectWithoutTalleInput[]
    createMany?: StockCreateManyTalleInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type StockUpdateManyWithoutTalleNestedInput = {
    create?: XOR<StockCreateWithoutTalleInput, StockUncheckedCreateWithoutTalleInput> | StockCreateWithoutTalleInput[] | StockUncheckedCreateWithoutTalleInput[]
    connectOrCreate?: StockCreateOrConnectWithoutTalleInput | StockCreateOrConnectWithoutTalleInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutTalleInput | StockUpsertWithWhereUniqueWithoutTalleInput[]
    createMany?: StockCreateManyTalleInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutTalleInput | StockUpdateWithWhereUniqueWithoutTalleInput[]
    updateMany?: StockUpdateManyWithWhereWithoutTalleInput | StockUpdateManyWithWhereWithoutTalleInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type StockUncheckedUpdateManyWithoutTalleNestedInput = {
    create?: XOR<StockCreateWithoutTalleInput, StockUncheckedCreateWithoutTalleInput> | StockCreateWithoutTalleInput[] | StockUncheckedCreateWithoutTalleInput[]
    connectOrCreate?: StockCreateOrConnectWithoutTalleInput | StockCreateOrConnectWithoutTalleInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutTalleInput | StockUpsertWithWhereUniqueWithoutTalleInput[]
    createMany?: StockCreateManyTalleInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutTalleInput | StockUpdateWithWhereUniqueWithoutTalleInput[]
    updateMany?: StockUpdateManyWithWhereWithoutTalleInput | StockUpdateManyWithWhereWithoutTalleInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type ProductosCreateNestedOneWithoutStocksInput = {
    create?: XOR<ProductosCreateWithoutStocksInput, ProductosUncheckedCreateWithoutStocksInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutStocksInput
    connect?: ProductosWhereUniqueInput
  }

  export type SizesCreateNestedOneWithoutStocksInput = {
    create?: XOR<SizesCreateWithoutStocksInput, SizesUncheckedCreateWithoutStocksInput>
    connectOrCreate?: SizesCreateOrConnectWithoutStocksInput
    connect?: SizesWhereUniqueInput
  }

  export type ProductosUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<ProductosCreateWithoutStocksInput, ProductosUncheckedCreateWithoutStocksInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutStocksInput
    upsert?: ProductosUpsertWithoutStocksInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutStocksInput, ProductosUpdateWithoutStocksInput>, ProductosUncheckedUpdateWithoutStocksInput>
  }

  export type SizesUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<SizesCreateWithoutStocksInput, SizesUncheckedCreateWithoutStocksInput>
    connectOrCreate?: SizesCreateOrConnectWithoutStocksInput
    upsert?: SizesUpsertWithoutStocksInput
    connect?: SizesWhereUniqueInput
    update?: XOR<XOR<SizesUpdateToOneWithWhereWithoutStocksInput, SizesUpdateWithoutStocksInput>, SizesUncheckedUpdateWithoutStocksInput>
  }

  export type ProductosCreateNestedOneWithoutPublicacionesInput = {
    create?: XOR<ProductosCreateWithoutPublicacionesInput, ProductosUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutPublicacionesInput
    connect?: ProductosWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductosUpdateOneRequiredWithoutPublicacionesNestedInput = {
    create?: XOR<ProductosCreateWithoutPublicacionesInput, ProductosUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutPublicacionesInput
    upsert?: ProductosUpsertWithoutPublicacionesInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutPublicacionesInput, ProductosUpdateWithoutPublicacionesInput>, ProductosUncheckedUpdateWithoutPublicacionesInput>
  }

  export type ClientesCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput
    connect?: ClientesWhereUniqueInput
  }

  export type ClientesUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput
    upsert?: ClientesUpsertWithoutUsuarioInput
    connect?: ClientesWhereUniqueInput
    update?: XOR<XOR<ClientesUpdateToOneWithWhereWithoutUsuarioInput, ClientesUpdateWithoutUsuarioInput>, ClientesUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuariosCreateNestedManyWithoutClienteInput = {
    create?: XOR<UsuariosCreateWithoutClienteInput, UsuariosUncheckedCreateWithoutClienteInput> | UsuariosCreateWithoutClienteInput[] | UsuariosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutClienteInput | UsuariosCreateOrConnectWithoutClienteInput[]
    createMany?: UsuariosCreateManyClienteInputEnvelope
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
  }

  export type UsuariosUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<UsuariosCreateWithoutClienteInput, UsuariosUncheckedCreateWithoutClienteInput> | UsuariosCreateWithoutClienteInput[] | UsuariosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutClienteInput | UsuariosCreateOrConnectWithoutClienteInput[]
    createMany?: UsuariosCreateManyClienteInputEnvelope
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
  }

  export type UsuariosUpdateManyWithoutClienteNestedInput = {
    create?: XOR<UsuariosCreateWithoutClienteInput, UsuariosUncheckedCreateWithoutClienteInput> | UsuariosCreateWithoutClienteInput[] | UsuariosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutClienteInput | UsuariosCreateOrConnectWithoutClienteInput[]
    upsert?: UsuariosUpsertWithWhereUniqueWithoutClienteInput | UsuariosUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: UsuariosCreateManyClienteInputEnvelope
    set?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    disconnect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    delete?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    update?: UsuariosUpdateWithWhereUniqueWithoutClienteInput | UsuariosUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: UsuariosUpdateManyWithWhereWithoutClienteInput | UsuariosUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
  }

  export type UsuariosUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<UsuariosCreateWithoutClienteInput, UsuariosUncheckedCreateWithoutClienteInput> | UsuariosCreateWithoutClienteInput[] | UsuariosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: UsuariosCreateOrConnectWithoutClienteInput | UsuariosCreateOrConnectWithoutClienteInput[]
    upsert?: UsuariosUpsertWithWhereUniqueWithoutClienteInput | UsuariosUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: UsuariosCreateManyClienteInputEnvelope
    set?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    disconnect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    delete?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    connect?: UsuariosWhereUniqueInput | UsuariosWhereUniqueInput[]
    update?: UsuariosUpdateWithWhereUniqueWithoutClienteInput | UsuariosUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: UsuariosUpdateManyWithWhereWithoutClienteInput | UsuariosUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductosCreateWithoutCategoriaInput = {
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    stocks?: StockCreateNestedManyWithoutProductoInput
    publicaciones?: PublicacionesCreateNestedManyWithoutProductoInput
  }

  export type ProductosUncheckedCreateWithoutCategoriaInput = {
    id_producto?: number
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    stocks?: StockUncheckedCreateNestedManyWithoutProductoInput
    publicaciones?: PublicacionesUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosCreateOrConnectWithoutCategoriaInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutCategoriaInput, ProductosUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductosCreateManyCategoriaInputEnvelope = {
    data: ProductosCreateManyCategoriaInput | ProductosCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductosUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductosWhereUniqueInput
    update: XOR<ProductosUpdateWithoutCategoriaInput, ProductosUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductosCreateWithoutCategoriaInput, ProductosUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductosUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductosWhereUniqueInput
    data: XOR<ProductosUpdateWithoutCategoriaInput, ProductosUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductosUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductosScalarWhereInput
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductosScalarWhereInput = {
    AND?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
    OR?: ProductosScalarWhereInput[]
    NOT?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
    id_producto?: IntFilter<"Productos"> | number
    nombre?: StringFilter<"Productos"> | string
    precio?: FloatFilter<"Productos"> | number
    foto?: StringFilter<"Productos"> | string
    color?: StringFilter<"Productos"> | string
    genero?: StringFilter<"Productos"> | string
    id_categoria?: IntFilter<"Productos"> | number
  }

  export type CategoriasCreateWithoutProductosInput = {
    nombre: string
  }

  export type CategoriasUncheckedCreateWithoutProductosInput = {
    id_categoria?: number
    nombre: string
  }

  export type CategoriasCreateOrConnectWithoutProductosInput = {
    where: CategoriasWhereUniqueInput
    create: XOR<CategoriasCreateWithoutProductosInput, CategoriasUncheckedCreateWithoutProductosInput>
  }

  export type StockCreateWithoutProductoInput = {
    cantidad: number
    talle: SizesCreateNestedOneWithoutStocksInput
  }

  export type StockUncheckedCreateWithoutProductoInput = {
    id_stock?: number
    cantidad: number
    id_talle: number
  }

  export type StockCreateOrConnectWithoutProductoInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutProductoInput, StockUncheckedCreateWithoutProductoInput>
  }

  export type StockCreateManyProductoInputEnvelope = {
    data: StockCreateManyProductoInput | StockCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type PublicacionesCreateWithoutProductoInput = {
    activa: boolean
    caracteristicas: string
    descuento: number
    precio: number
    fecha?: Date | string
  }

  export type PublicacionesUncheckedCreateWithoutProductoInput = {
    id_publicacion?: number
    activa: boolean
    caracteristicas: string
    descuento: number
    precio: number
    fecha?: Date | string
  }

  export type PublicacionesCreateOrConnectWithoutProductoInput = {
    where: PublicacionesWhereUniqueInput
    create: XOR<PublicacionesCreateWithoutProductoInput, PublicacionesUncheckedCreateWithoutProductoInput>
  }

  export type PublicacionesCreateManyProductoInputEnvelope = {
    data: PublicacionesCreateManyProductoInput | PublicacionesCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriasUpsertWithoutProductosInput = {
    update: XOR<CategoriasUpdateWithoutProductosInput, CategoriasUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriasCreateWithoutProductosInput, CategoriasUncheckedCreateWithoutProductosInput>
    where?: CategoriasWhereInput
  }

  export type CategoriasUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriasWhereInput
    data: XOR<CategoriasUpdateWithoutProductosInput, CategoriasUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriasUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasUncheckedUpdateWithoutProductosInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type StockUpsertWithWhereUniqueWithoutProductoInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutProductoInput, StockUncheckedUpdateWithoutProductoInput>
    create: XOR<StockCreateWithoutProductoInput, StockUncheckedCreateWithoutProductoInput>
  }

  export type StockUpdateWithWhereUniqueWithoutProductoInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutProductoInput, StockUncheckedUpdateWithoutProductoInput>
  }

  export type StockUpdateManyWithWhereWithoutProductoInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutProductoInput>
  }

  export type StockScalarWhereInput = {
    AND?: StockScalarWhereInput | StockScalarWhereInput[]
    OR?: StockScalarWhereInput[]
    NOT?: StockScalarWhereInput | StockScalarWhereInput[]
    id_stock?: IntFilter<"Stock"> | number
    cantidad?: IntFilter<"Stock"> | number
    id_producto?: IntFilter<"Stock"> | number
    id_talle?: IntFilter<"Stock"> | number
  }

  export type PublicacionesUpsertWithWhereUniqueWithoutProductoInput = {
    where: PublicacionesWhereUniqueInput
    update: XOR<PublicacionesUpdateWithoutProductoInput, PublicacionesUncheckedUpdateWithoutProductoInput>
    create: XOR<PublicacionesCreateWithoutProductoInput, PublicacionesUncheckedCreateWithoutProductoInput>
  }

  export type PublicacionesUpdateWithWhereUniqueWithoutProductoInput = {
    where: PublicacionesWhereUniqueInput
    data: XOR<PublicacionesUpdateWithoutProductoInput, PublicacionesUncheckedUpdateWithoutProductoInput>
  }

  export type PublicacionesUpdateManyWithWhereWithoutProductoInput = {
    where: PublicacionesScalarWhereInput
    data: XOR<PublicacionesUpdateManyMutationInput, PublicacionesUncheckedUpdateManyWithoutProductoInput>
  }

  export type PublicacionesScalarWhereInput = {
    AND?: PublicacionesScalarWhereInput | PublicacionesScalarWhereInput[]
    OR?: PublicacionesScalarWhereInput[]
    NOT?: PublicacionesScalarWhereInput | PublicacionesScalarWhereInput[]
    id_publicacion?: IntFilter<"Publicaciones"> | number
    activa?: BoolFilter<"Publicaciones"> | boolean
    caracteristicas?: StringFilter<"Publicaciones"> | string
    descuento?: IntFilter<"Publicaciones"> | number
    precio?: FloatFilter<"Publicaciones"> | number
    id_producto?: IntFilter<"Publicaciones"> | number
    fecha?: DateTimeFilter<"Publicaciones"> | Date | string
  }

  export type StockCreateWithoutTalleInput = {
    cantidad: number
    producto: ProductosCreateNestedOneWithoutStocksInput
  }

  export type StockUncheckedCreateWithoutTalleInput = {
    id_stock?: number
    cantidad: number
    id_producto: number
  }

  export type StockCreateOrConnectWithoutTalleInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutTalleInput, StockUncheckedCreateWithoutTalleInput>
  }

  export type StockCreateManyTalleInputEnvelope = {
    data: StockCreateManyTalleInput | StockCreateManyTalleInput[]
    skipDuplicates?: boolean
  }

  export type StockUpsertWithWhereUniqueWithoutTalleInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutTalleInput, StockUncheckedUpdateWithoutTalleInput>
    create: XOR<StockCreateWithoutTalleInput, StockUncheckedCreateWithoutTalleInput>
  }

  export type StockUpdateWithWhereUniqueWithoutTalleInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutTalleInput, StockUncheckedUpdateWithoutTalleInput>
  }

  export type StockUpdateManyWithWhereWithoutTalleInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutTalleInput>
  }

  export type ProductosCreateWithoutStocksInput = {
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    categoria: CategoriasCreateNestedOneWithoutProductosInput
    publicaciones?: PublicacionesCreateNestedManyWithoutProductoInput
  }

  export type ProductosUncheckedCreateWithoutStocksInput = {
    id_producto?: number
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    id_categoria: number
    publicaciones?: PublicacionesUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosCreateOrConnectWithoutStocksInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutStocksInput, ProductosUncheckedCreateWithoutStocksInput>
  }

  export type SizesCreateWithoutStocksInput = {
    talle: string
    categoria_talle: string
  }

  export type SizesUncheckedCreateWithoutStocksInput = {
    id_talle?: number
    talle: string
    categoria_talle: string
  }

  export type SizesCreateOrConnectWithoutStocksInput = {
    where: SizesWhereUniqueInput
    create: XOR<SizesCreateWithoutStocksInput, SizesUncheckedCreateWithoutStocksInput>
  }

  export type ProductosUpsertWithoutStocksInput = {
    update: XOR<ProductosUpdateWithoutStocksInput, ProductosUncheckedUpdateWithoutStocksInput>
    create: XOR<ProductosCreateWithoutStocksInput, ProductosUncheckedCreateWithoutStocksInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutStocksInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutStocksInput, ProductosUncheckedUpdateWithoutStocksInput>
  }

  export type ProductosUpdateWithoutStocksInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriasUpdateOneRequiredWithoutProductosNestedInput
    publicaciones?: PublicacionesUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateWithoutStocksInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    publicaciones?: PublicacionesUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type SizesUpsertWithoutStocksInput = {
    update: XOR<SizesUpdateWithoutStocksInput, SizesUncheckedUpdateWithoutStocksInput>
    create: XOR<SizesCreateWithoutStocksInput, SizesUncheckedCreateWithoutStocksInput>
    where?: SizesWhereInput
  }

  export type SizesUpdateToOneWithWhereWithoutStocksInput = {
    where?: SizesWhereInput
    data: XOR<SizesUpdateWithoutStocksInput, SizesUncheckedUpdateWithoutStocksInput>
  }

  export type SizesUpdateWithoutStocksInput = {
    talle?: StringFieldUpdateOperationsInput | string
    categoria_talle?: StringFieldUpdateOperationsInput | string
  }

  export type SizesUncheckedUpdateWithoutStocksInput = {
    id_talle?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    categoria_talle?: StringFieldUpdateOperationsInput | string
  }

  export type ProductosCreateWithoutPublicacionesInput = {
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    categoria: CategoriasCreateNestedOneWithoutProductosInput
    stocks?: StockCreateNestedManyWithoutProductoInput
  }

  export type ProductosUncheckedCreateWithoutPublicacionesInput = {
    id_producto?: number
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
    id_categoria: number
    stocks?: StockUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosCreateOrConnectWithoutPublicacionesInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutPublicacionesInput, ProductosUncheckedCreateWithoutPublicacionesInput>
  }

  export type ProductosUpsertWithoutPublicacionesInput = {
    update: XOR<ProductosUpdateWithoutPublicacionesInput, ProductosUncheckedUpdateWithoutPublicacionesInput>
    create: XOR<ProductosCreateWithoutPublicacionesInput, ProductosUncheckedCreateWithoutPublicacionesInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutPublicacionesInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutPublicacionesInput, ProductosUncheckedUpdateWithoutPublicacionesInput>
  }

  export type ProductosUpdateWithoutPublicacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriasUpdateOneRequiredWithoutProductosNestedInput
    stocks?: StockUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateWithoutPublicacionesInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    id_categoria?: IntFieldUpdateOperationsInput | number
    stocks?: StockUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ClientesCreateWithoutUsuarioInput = {
    nombre: string
    apellido: string
    correo: string
    dni: number
    ciudad: string
    barrio: string
    calle: string
  }

  export type ClientesUncheckedCreateWithoutUsuarioInput = {
    id_cliente?: number
    nombre: string
    apellido: string
    correo: string
    dni: number
    ciudad: string
    barrio: string
    calle: string
  }

  export type ClientesCreateOrConnectWithoutUsuarioInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput>
  }

  export type ClientesUpsertWithoutUsuarioInput = {
    update: XOR<ClientesUpdateWithoutUsuarioInput, ClientesUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput>
    where?: ClientesWhereInput
  }

  export type ClientesUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ClientesWhereInput
    data: XOR<ClientesUpdateWithoutUsuarioInput, ClientesUncheckedUpdateWithoutUsuarioInput>
  }

  export type ClientesUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
  }

  export type ClientesUncheckedUpdateWithoutUsuarioInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    ciudad?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosCreateWithoutClienteInput = {
    usuario: string
    contraseña: string
    rol: string
  }

  export type UsuariosUncheckedCreateWithoutClienteInput = {
    id_usuario?: number
    usuario: string
    contraseña: string
    rol: string
  }

  export type UsuariosCreateOrConnectWithoutClienteInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutClienteInput, UsuariosUncheckedCreateWithoutClienteInput>
  }

  export type UsuariosCreateManyClienteInputEnvelope = {
    data: UsuariosCreateManyClienteInput | UsuariosCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosUpsertWithWhereUniqueWithoutClienteInput = {
    where: UsuariosWhereUniqueInput
    update: XOR<UsuariosUpdateWithoutClienteInput, UsuariosUncheckedUpdateWithoutClienteInput>
    create: XOR<UsuariosCreateWithoutClienteInput, UsuariosUncheckedCreateWithoutClienteInput>
  }

  export type UsuariosUpdateWithWhereUniqueWithoutClienteInput = {
    where: UsuariosWhereUniqueInput
    data: XOR<UsuariosUpdateWithoutClienteInput, UsuariosUncheckedUpdateWithoutClienteInput>
  }

  export type UsuariosUpdateManyWithWhereWithoutClienteInput = {
    where: UsuariosScalarWhereInput
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyWithoutClienteInput>
  }

  export type UsuariosScalarWhereInput = {
    AND?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
    OR?: UsuariosScalarWhereInput[]
    NOT?: UsuariosScalarWhereInput | UsuariosScalarWhereInput[]
    id_usuario?: IntFilter<"Usuarios"> | number
    usuario?: StringFilter<"Usuarios"> | string
    contraseña?: StringFilter<"Usuarios"> | string
    rol?: StringFilter<"Usuarios"> | string
    id_cliente?: IntFilter<"Usuarios"> | number
  }

  export type ProductosCreateManyCategoriaInput = {
    id_producto?: number
    nombre: string
    precio: number
    foto: string
    color: string
    genero: string
  }

  export type ProductosUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    stocks?: StockUpdateManyWithoutProductoNestedInput
    publicaciones?: PublicacionesUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateWithoutCategoriaInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    stocks?: StockUncheckedUpdateManyWithoutProductoNestedInput
    publicaciones?: PublicacionesUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateManyWithoutCategoriaInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
  }

  export type StockCreateManyProductoInput = {
    id_stock?: number
    cantidad: number
    id_talle: number
  }

  export type PublicacionesCreateManyProductoInput = {
    id_publicacion?: number
    activa: boolean
    caracteristicas: string
    descuento: number
    precio: number
    fecha?: Date | string
  }

  export type StockUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    talle?: SizesUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StockUncheckedUpdateWithoutProductoInput = {
    id_stock?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    id_talle?: IntFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateManyWithoutProductoInput = {
    id_stock?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    id_talle?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacionesUpdateWithoutProductoInput = {
    activa?: BoolFieldUpdateOperationsInput | boolean
    caracteristicas?: StringFieldUpdateOperationsInput | string
    descuento?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionesUncheckedUpdateWithoutProductoInput = {
    id_publicacion?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    caracteristicas?: StringFieldUpdateOperationsInput | string
    descuento?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionesUncheckedUpdateManyWithoutProductoInput = {
    id_publicacion?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    caracteristicas?: StringFieldUpdateOperationsInput | string
    descuento?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockCreateManyTalleInput = {
    id_stock?: number
    cantidad: number
    id_producto: number
  }

  export type StockUpdateWithoutTalleInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: ProductosUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StockUncheckedUpdateWithoutTalleInput = {
    id_stock?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
  }

  export type StockUncheckedUpdateManyWithoutTalleInput = {
    id_stock?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariosCreateManyClienteInput = {
    id_usuario?: number
    usuario: string
    contraseña: string
    rol: string
  }

  export type UsuariosUpdateWithoutClienteInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUncheckedUpdateWithoutClienteInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUncheckedUpdateManyWithoutClienteInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}