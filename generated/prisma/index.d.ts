
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
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Campanha
 * 
 */
export type Campanha = $Result.DefaultSelection<Prisma.$CampanhaPayload>
/**
 * Model Tecnico
 * 
 */
export type Tecnico = $Result.DefaultSelection<Prisma.$TecnicoPayload>
/**
 * Model Produtor
 * 
 */
export type Produtor = $Result.DefaultSelection<Prisma.$ProdutorPayload>
/**
 * Model ProdutorCampanha
 * 
 */
export type ProdutorCampanha = $Result.DefaultSelection<Prisma.$ProdutorCampanhaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
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
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campanha`: Exposes CRUD operations for the **Campanha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campanhas
    * const campanhas = await prisma.campanha.findMany()
    * ```
    */
  get campanha(): Prisma.CampanhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tecnico`: Exposes CRUD operations for the **Tecnico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tecnicos
    * const tecnicos = await prisma.tecnico.findMany()
    * ```
    */
  get tecnico(): Prisma.TecnicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtor`: Exposes CRUD operations for the **Produtor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtors
    * const produtors = await prisma.produtor.findMany()
    * ```
    */
  get produtor(): Prisma.ProdutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtorCampanha`: Exposes CRUD operations for the **ProdutorCampanha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProdutorCampanhas
    * const produtorCampanhas = await prisma.produtorCampanha.findMany()
    * ```
    */
  get produtorCampanha(): Prisma.ProdutorCampanhaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Empresa: 'Empresa',
    Campanha: 'Campanha',
    Tecnico: 'Tecnico',
    Produtor: 'Produtor',
    ProdutorCampanha: 'ProdutorCampanha'
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
      modelProps: "empresa" | "campanha" | "tecnico" | "produtor" | "produtorCampanha"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Campanha: {
        payload: Prisma.$CampanhaPayload<ExtArgs>
        fields: Prisma.CampanhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampanhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampanhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          findFirst: {
            args: Prisma.CampanhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampanhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          findMany: {
            args: Prisma.CampanhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          create: {
            args: Prisma.CampanhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          createMany: {
            args: Prisma.CampanhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampanhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          delete: {
            args: Prisma.CampanhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          update: {
            args: Prisma.CampanhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          deleteMany: {
            args: Prisma.CampanhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampanhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampanhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>[]
          }
          upsert: {
            args: Prisma.CampanhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanhaPayload>
          }
          aggregate: {
            args: Prisma.CampanhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampanha>
          }
          groupBy: {
            args: Prisma.CampanhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampanhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampanhaCountArgs<ExtArgs>
            result: $Utils.Optional<CampanhaCountAggregateOutputType> | number
          }
        }
      }
      Tecnico: {
        payload: Prisma.$TecnicoPayload<ExtArgs>
        fields: Prisma.TecnicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TecnicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TecnicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          findFirst: {
            args: Prisma.TecnicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TecnicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          findMany: {
            args: Prisma.TecnicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>[]
          }
          create: {
            args: Prisma.TecnicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          createMany: {
            args: Prisma.TecnicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TecnicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>[]
          }
          delete: {
            args: Prisma.TecnicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          update: {
            args: Prisma.TecnicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          deleteMany: {
            args: Prisma.TecnicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TecnicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TecnicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>[]
          }
          upsert: {
            args: Prisma.TecnicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          aggregate: {
            args: Prisma.TecnicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTecnico>
          }
          groupBy: {
            args: Prisma.TecnicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TecnicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TecnicoCountArgs<ExtArgs>
            result: $Utils.Optional<TecnicoCountAggregateOutputType> | number
          }
        }
      }
      Produtor: {
        payload: Prisma.$ProdutorPayload<ExtArgs>
        fields: Prisma.ProdutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          findFirst: {
            args: Prisma.ProdutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          findMany: {
            args: Prisma.ProdutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>[]
          }
          create: {
            args: Prisma.ProdutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          createMany: {
            args: Prisma.ProdutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>[]
          }
          delete: {
            args: Prisma.ProdutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          update: {
            args: Prisma.ProdutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          deleteMany: {
            args: Prisma.ProdutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>[]
          }
          upsert: {
            args: Prisma.ProdutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          aggregate: {
            args: Prisma.ProdutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutor>
          }
          groupBy: {
            args: Prisma.ProdutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutorCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutorCountAggregateOutputType> | number
          }
        }
      }
      ProdutorCampanha: {
        payload: Prisma.$ProdutorCampanhaPayload<ExtArgs>
        fields: Prisma.ProdutorCampanhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutorCampanhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutorCampanhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>
          }
          findFirst: {
            args: Prisma.ProdutorCampanhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutorCampanhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>
          }
          findMany: {
            args: Prisma.ProdutorCampanhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>[]
          }
          create: {
            args: Prisma.ProdutorCampanhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>
          }
          createMany: {
            args: Prisma.ProdutorCampanhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutorCampanhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>[]
          }
          delete: {
            args: Prisma.ProdutorCampanhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>
          }
          update: {
            args: Prisma.ProdutorCampanhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>
          }
          deleteMany: {
            args: Prisma.ProdutorCampanhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutorCampanhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutorCampanhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>[]
          }
          upsert: {
            args: Prisma.ProdutorCampanhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorCampanhaPayload>
          }
          aggregate: {
            args: Prisma.ProdutorCampanhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutorCampanha>
          }
          groupBy: {
            args: Prisma.ProdutorCampanhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutorCampanhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutorCampanhaCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutorCampanhaCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    empresa?: EmpresaOmit
    campanha?: CampanhaOmit
    tecnico?: TecnicoOmit
    produtor?: ProdutorOmit
    produtorCampanha?: ProdutorCampanhaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    campanhas: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanhas?: boolean | EmpresaCountOutputTypeCountCampanhasArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanhaWhereInput
  }


  /**
   * Count Type CampanhaCountOutputType
   */

  export type CampanhaCountOutputType = {
    tecnicos: number
    produtoresCampanhas: number
  }

  export type CampanhaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tecnicos?: boolean | CampanhaCountOutputTypeCountTecnicosArgs
    produtoresCampanhas?: boolean | CampanhaCountOutputTypeCountProdutoresCampanhasArgs
  }

  // Custom InputTypes
  /**
   * CampanhaCountOutputType without action
   */
  export type CampanhaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaCountOutputType
     */
    select?: CampanhaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampanhaCountOutputType without action
   */
  export type CampanhaCountOutputTypeCountTecnicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TecnicoWhereInput
  }

  /**
   * CampanhaCountOutputType without action
   */
  export type CampanhaCountOutputTypeCountProdutoresCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutorCampanhaWhereInput
  }


  /**
   * Count Type TecnicoCountOutputType
   */

  export type TecnicoCountOutputType = {
    produtoresCampanhas: number
  }

  export type TecnicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtoresCampanhas?: boolean | TecnicoCountOutputTypeCountProdutoresCampanhasArgs
  }

  // Custom InputTypes
  /**
   * TecnicoCountOutputType without action
   */
  export type TecnicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TecnicoCountOutputType
     */
    select?: TecnicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TecnicoCountOutputType without action
   */
  export type TecnicoCountOutputTypeCountProdutoresCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutorCampanhaWhereInput
  }


  /**
   * Count Type ProdutorCountOutputType
   */

  export type ProdutorCountOutputType = {
    produtoresCampanhas: number
  }

  export type ProdutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtoresCampanhas?: boolean | ProdutorCountOutputTypeCountProdutoresCampanhasArgs
  }

  // Custom InputTypes
  /**
   * ProdutorCountOutputType without action
   */
  export type ProdutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCountOutputType
     */
    select?: ProdutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutorCountOutputType without action
   */
  export type ProdutorCountOutputTypeCountProdutoresCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutorCampanhaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpresaSumAggregateOutputType = {
    id: number | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    telefone: number
    email: number
    _all: number
  }


  export type EmpresaAvgAggregateInputType = {
    id?: true
  }

  export type EmpresaSumAggregateInputType = {
    id?: true
  }

  export type EmpresaMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    email?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    email?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    email?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _avg?: EmpresaAvgAggregateInputType
    _sum?: EmpresaSumAggregateInputType
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: number
    nome: string
    cnpj: string
    telefone: string | null
    email: string
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    campanhas?: boolean | Empresa$campanhasArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "telefone" | "email", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanhas?: boolean | Empresa$campanhasArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      campanhas: Prisma.$CampanhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cnpj: string
      telefone: string | null
      email: string
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campanhas<T extends Empresa$campanhasArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$campanhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'Int'>
    readonly nome: FieldRef<"Empresa", 'String'>
    readonly cnpj: FieldRef<"Empresa", 'String'>
    readonly telefone: FieldRef<"Empresa", 'String'>
    readonly email: FieldRef<"Empresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.campanhas
   */
  export type Empresa$campanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    where?: CampanhaWhereInput
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    cursor?: CampanhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Campanha
   */

  export type AggregateCampanha = {
    _count: CampanhaCountAggregateOutputType | null
    _avg: CampanhaAvgAggregateOutputType | null
    _sum: CampanhaSumAggregateOutputType | null
    _min: CampanhaMinAggregateOutputType | null
    _max: CampanhaMaxAggregateOutputType | null
  }

  export type CampanhaAvgAggregateOutputType = {
    id: number | null
    empresaId: number | null
  }

  export type CampanhaSumAggregateOutputType = {
    id: number | null
    empresaId: number | null
  }

  export type CampanhaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    empresaId: number | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type CampanhaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    empresaId: number | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type CampanhaCountAggregateOutputType = {
    id: number
    nome: number
    empresaId: number
    dataInicio: number
    dataFim: number
    _all: number
  }


  export type CampanhaAvgAggregateInputType = {
    id?: true
    empresaId?: true
  }

  export type CampanhaSumAggregateInputType = {
    id?: true
    empresaId?: true
  }

  export type CampanhaMinAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
    dataInicio?: true
    dataFim?: true
  }

  export type CampanhaMaxAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
    dataInicio?: true
    dataFim?: true
  }

  export type CampanhaCountAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
    dataInicio?: true
    dataFim?: true
    _all?: true
  }

  export type CampanhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campanha to aggregate.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campanhas
    **/
    _count?: true | CampanhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampanhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampanhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampanhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampanhaMaxAggregateInputType
  }

  export type GetCampanhaAggregateType<T extends CampanhaAggregateArgs> = {
        [P in keyof T & keyof AggregateCampanha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampanha[P]>
      : GetScalarType<T[P], AggregateCampanha[P]>
  }




  export type CampanhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanhaWhereInput
    orderBy?: CampanhaOrderByWithAggregationInput | CampanhaOrderByWithAggregationInput[]
    by: CampanhaScalarFieldEnum[] | CampanhaScalarFieldEnum
    having?: CampanhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampanhaCountAggregateInputType | true
    _avg?: CampanhaAvgAggregateInputType
    _sum?: CampanhaSumAggregateInputType
    _min?: CampanhaMinAggregateInputType
    _max?: CampanhaMaxAggregateInputType
  }

  export type CampanhaGroupByOutputType = {
    id: number
    nome: string
    empresaId: number
    dataInicio: Date
    dataFim: Date | null
    _count: CampanhaCountAggregateOutputType | null
    _avg: CampanhaAvgAggregateOutputType | null
    _sum: CampanhaSumAggregateOutputType | null
    _min: CampanhaMinAggregateOutputType | null
    _max: CampanhaMaxAggregateOutputType | null
  }

  type GetCampanhaGroupByPayload<T extends CampanhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampanhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampanhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampanhaGroupByOutputType[P]>
            : GetScalarType<T[P], CampanhaGroupByOutputType[P]>
        }
      >
    >


  export type CampanhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    tecnicos?: boolean | Campanha$tecnicosArgs<ExtArgs>
    produtoresCampanhas?: boolean | Campanha$produtoresCampanhasArgs<ExtArgs>
    _count?: boolean | CampanhaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campanha"]>

  export type CampanhaSelectScalar = {
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }

  export type CampanhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "empresaId" | "dataInicio" | "dataFim", ExtArgs["result"]["campanha"]>
  export type CampanhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    tecnicos?: boolean | Campanha$tecnicosArgs<ExtArgs>
    produtoresCampanhas?: boolean | Campanha$produtoresCampanhasArgs<ExtArgs>
    _count?: boolean | CampanhaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampanhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type CampanhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $CampanhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campanha"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      tecnicos: Prisma.$TecnicoPayload<ExtArgs>[]
      produtoresCampanhas: Prisma.$ProdutorCampanhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      empresaId: number
      dataInicio: Date
      dataFim: Date | null
    }, ExtArgs["result"]["campanha"]>
    composites: {}
  }

  type CampanhaGetPayload<S extends boolean | null | undefined | CampanhaDefaultArgs> = $Result.GetResult<Prisma.$CampanhaPayload, S>

  type CampanhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampanhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampanhaCountAggregateInputType | true
    }

  export interface CampanhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campanha'], meta: { name: 'Campanha' } }
    /**
     * Find zero or one Campanha that matches the filter.
     * @param {CampanhaFindUniqueArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampanhaFindUniqueArgs>(args: SelectSubset<T, CampanhaFindUniqueArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campanha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampanhaFindUniqueOrThrowArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampanhaFindUniqueOrThrowArgs>(args: SelectSubset<T, CampanhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campanha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindFirstArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampanhaFindFirstArgs>(args?: SelectSubset<T, CampanhaFindFirstArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campanha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindFirstOrThrowArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampanhaFindFirstOrThrowArgs>(args?: SelectSubset<T, CampanhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campanhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campanhas
     * const campanhas = await prisma.campanha.findMany()
     * 
     * // Get first 10 Campanhas
     * const campanhas = await prisma.campanha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campanhaWithIdOnly = await prisma.campanha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampanhaFindManyArgs>(args?: SelectSubset<T, CampanhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campanha.
     * @param {CampanhaCreateArgs} args - Arguments to create a Campanha.
     * @example
     * // Create one Campanha
     * const Campanha = await prisma.campanha.create({
     *   data: {
     *     // ... data to create a Campanha
     *   }
     * })
     * 
     */
    create<T extends CampanhaCreateArgs>(args: SelectSubset<T, CampanhaCreateArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campanhas.
     * @param {CampanhaCreateManyArgs} args - Arguments to create many Campanhas.
     * @example
     * // Create many Campanhas
     * const campanha = await prisma.campanha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampanhaCreateManyArgs>(args?: SelectSubset<T, CampanhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campanhas and returns the data saved in the database.
     * @param {CampanhaCreateManyAndReturnArgs} args - Arguments to create many Campanhas.
     * @example
     * // Create many Campanhas
     * const campanha = await prisma.campanha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campanhas and only return the `id`
     * const campanhaWithIdOnly = await prisma.campanha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampanhaCreateManyAndReturnArgs>(args?: SelectSubset<T, CampanhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campanha.
     * @param {CampanhaDeleteArgs} args - Arguments to delete one Campanha.
     * @example
     * // Delete one Campanha
     * const Campanha = await prisma.campanha.delete({
     *   where: {
     *     // ... filter to delete one Campanha
     *   }
     * })
     * 
     */
    delete<T extends CampanhaDeleteArgs>(args: SelectSubset<T, CampanhaDeleteArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campanha.
     * @param {CampanhaUpdateArgs} args - Arguments to update one Campanha.
     * @example
     * // Update one Campanha
     * const campanha = await prisma.campanha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampanhaUpdateArgs>(args: SelectSubset<T, CampanhaUpdateArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campanhas.
     * @param {CampanhaDeleteManyArgs} args - Arguments to filter Campanhas to delete.
     * @example
     * // Delete a few Campanhas
     * const { count } = await prisma.campanha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampanhaDeleteManyArgs>(args?: SelectSubset<T, CampanhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campanhas
     * const campanha = await prisma.campanha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampanhaUpdateManyArgs>(args: SelectSubset<T, CampanhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campanhas and returns the data updated in the database.
     * @param {CampanhaUpdateManyAndReturnArgs} args - Arguments to update many Campanhas.
     * @example
     * // Update many Campanhas
     * const campanha = await prisma.campanha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campanhas and only return the `id`
     * const campanhaWithIdOnly = await prisma.campanha.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CampanhaUpdateManyAndReturnArgs>(args: SelectSubset<T, CampanhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campanha.
     * @param {CampanhaUpsertArgs} args - Arguments to update or create a Campanha.
     * @example
     * // Update or create a Campanha
     * const campanha = await prisma.campanha.upsert({
     *   create: {
     *     // ... data to create a Campanha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campanha we want to update
     *   }
     * })
     */
    upsert<T extends CampanhaUpsertArgs>(args: SelectSubset<T, CampanhaUpsertArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaCountArgs} args - Arguments to filter Campanhas to count.
     * @example
     * // Count the number of Campanhas
     * const count = await prisma.campanha.count({
     *   where: {
     *     // ... the filter for the Campanhas we want to count
     *   }
     * })
    **/
    count<T extends CampanhaCountArgs>(
      args?: Subset<T, CampanhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampanhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampanhaAggregateArgs>(args: Subset<T, CampanhaAggregateArgs>): Prisma.PrismaPromise<GetCampanhaAggregateType<T>>

    /**
     * Group by Campanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaGroupByArgs} args - Group by arguments.
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
      T extends CampanhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampanhaGroupByArgs['orderBy'] }
        : { orderBy?: CampanhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampanhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampanhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campanha model
   */
  readonly fields: CampanhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campanha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampanhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tecnicos<T extends Campanha$tecnicosArgs<ExtArgs> = {}>(args?: Subset<T, Campanha$tecnicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produtoresCampanhas<T extends Campanha$produtoresCampanhasArgs<ExtArgs> = {}>(args?: Subset<T, Campanha$produtoresCampanhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campanha model
   */
  interface CampanhaFieldRefs {
    readonly id: FieldRef<"Campanha", 'Int'>
    readonly nome: FieldRef<"Campanha", 'String'>
    readonly empresaId: FieldRef<"Campanha", 'Int'>
    readonly dataInicio: FieldRef<"Campanha", 'DateTime'>
    readonly dataFim: FieldRef<"Campanha", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campanha findUnique
   */
  export type CampanhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha findUniqueOrThrow
   */
  export type CampanhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha findFirst
   */
  export type CampanhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campanhas.
     */
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha findFirstOrThrow
   */
  export type CampanhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanha to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campanhas.
     */
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha findMany
   */
  export type CampanhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter, which Campanhas to fetch.
     */
    where?: CampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: CampanhaOrderByWithRelationInput | CampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campanhas.
     */
    cursor?: CampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanhas.
     */
    skip?: number
    distinct?: CampanhaScalarFieldEnum | CampanhaScalarFieldEnum[]
  }

  /**
   * Campanha create
   */
  export type CampanhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The data needed to create a Campanha.
     */
    data: XOR<CampanhaCreateInput, CampanhaUncheckedCreateInput>
  }

  /**
   * Campanha createMany
   */
  export type CampanhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campanhas.
     */
    data: CampanhaCreateManyInput | CampanhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campanha createManyAndReturn
   */
  export type CampanhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * The data used to create many Campanhas.
     */
    data: CampanhaCreateManyInput | CampanhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campanha update
   */
  export type CampanhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The data needed to update a Campanha.
     */
    data: XOR<CampanhaUpdateInput, CampanhaUncheckedUpdateInput>
    /**
     * Choose, which Campanha to update.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha updateMany
   */
  export type CampanhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campanhas.
     */
    data: XOR<CampanhaUpdateManyMutationInput, CampanhaUncheckedUpdateManyInput>
    /**
     * Filter which Campanhas to update
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to update.
     */
    limit?: number
  }

  /**
   * Campanha updateManyAndReturn
   */
  export type CampanhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * The data used to update Campanhas.
     */
    data: XOR<CampanhaUpdateManyMutationInput, CampanhaUncheckedUpdateManyInput>
    /**
     * Filter which Campanhas to update
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campanha upsert
   */
  export type CampanhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * The filter to search for the Campanha to update in case it exists.
     */
    where: CampanhaWhereUniqueInput
    /**
     * In case the Campanha found by the `where` argument doesn't exist, create a new Campanha with this data.
     */
    create: XOR<CampanhaCreateInput, CampanhaUncheckedCreateInput>
    /**
     * In case the Campanha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampanhaUpdateInput, CampanhaUncheckedUpdateInput>
  }

  /**
   * Campanha delete
   */
  export type CampanhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
    /**
     * Filter which Campanha to delete.
     */
    where: CampanhaWhereUniqueInput
  }

  /**
   * Campanha deleteMany
   */
  export type CampanhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campanhas to delete
     */
    where?: CampanhaWhereInput
    /**
     * Limit how many Campanhas to delete.
     */
    limit?: number
  }

  /**
   * Campanha.tecnicos
   */
  export type Campanha$tecnicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    where?: TecnicoWhereInput
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    cursor?: TecnicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Campanha.produtoresCampanhas
   */
  export type Campanha$produtoresCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    where?: ProdutorCampanhaWhereInput
    orderBy?: ProdutorCampanhaOrderByWithRelationInput | ProdutorCampanhaOrderByWithRelationInput[]
    cursor?: ProdutorCampanhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutorCampanhaScalarFieldEnum | ProdutorCampanhaScalarFieldEnum[]
  }

  /**
   * Campanha without action
   */
  export type CampanhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: CampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campanha
     */
    omit?: CampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampanhaInclude<ExtArgs> | null
  }


  /**
   * Model Tecnico
   */

  export type AggregateTecnico = {
    _count: TecnicoCountAggregateOutputType | null
    _avg: TecnicoAvgAggregateOutputType | null
    _sum: TecnicoSumAggregateOutputType | null
    _min: TecnicoMinAggregateOutputType | null
    _max: TecnicoMaxAggregateOutputType | null
  }

  export type TecnicoAvgAggregateOutputType = {
    id: number | null
    campanhaId: number | null
  }

  export type TecnicoSumAggregateOutputType = {
    id: number | null
    campanhaId: number | null
  }

  export type TecnicoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    campanhaId: number | null
  }

  export type TecnicoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    campanhaId: number | null
  }

  export type TecnicoCountAggregateOutputType = {
    id: number
    nome: number
    campanhaId: number
    _all: number
  }


  export type TecnicoAvgAggregateInputType = {
    id?: true
    campanhaId?: true
  }

  export type TecnicoSumAggregateInputType = {
    id?: true
    campanhaId?: true
  }

  export type TecnicoMinAggregateInputType = {
    id?: true
    nome?: true
    campanhaId?: true
  }

  export type TecnicoMaxAggregateInputType = {
    id?: true
    nome?: true
    campanhaId?: true
  }

  export type TecnicoCountAggregateInputType = {
    id?: true
    nome?: true
    campanhaId?: true
    _all?: true
  }

  export type TecnicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tecnico to aggregate.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tecnicos
    **/
    _count?: true | TecnicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TecnicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TecnicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TecnicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TecnicoMaxAggregateInputType
  }

  export type GetTecnicoAggregateType<T extends TecnicoAggregateArgs> = {
        [P in keyof T & keyof AggregateTecnico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTecnico[P]>
      : GetScalarType<T[P], AggregateTecnico[P]>
  }




  export type TecnicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TecnicoWhereInput
    orderBy?: TecnicoOrderByWithAggregationInput | TecnicoOrderByWithAggregationInput[]
    by: TecnicoScalarFieldEnum[] | TecnicoScalarFieldEnum
    having?: TecnicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TecnicoCountAggregateInputType | true
    _avg?: TecnicoAvgAggregateInputType
    _sum?: TecnicoSumAggregateInputType
    _min?: TecnicoMinAggregateInputType
    _max?: TecnicoMaxAggregateInputType
  }

  export type TecnicoGroupByOutputType = {
    id: number
    nome: string
    campanhaId: number
    _count: TecnicoCountAggregateOutputType | null
    _avg: TecnicoAvgAggregateOutputType | null
    _sum: TecnicoSumAggregateOutputType | null
    _min: TecnicoMinAggregateOutputType | null
    _max: TecnicoMaxAggregateOutputType | null
  }

  type GetTecnicoGroupByPayload<T extends TecnicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TecnicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TecnicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TecnicoGroupByOutputType[P]>
            : GetScalarType<T[P], TecnicoGroupByOutputType[P]>
        }
      >
    >


  export type TecnicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    campanhaId?: boolean
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    produtoresCampanhas?: boolean | Tecnico$produtoresCampanhasArgs<ExtArgs>
    _count?: boolean | TecnicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnico"]>

  export type TecnicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    campanhaId?: boolean
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnico"]>

  export type TecnicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    campanhaId?: boolean
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnico"]>

  export type TecnicoSelectScalar = {
    id?: boolean
    nome?: boolean
    campanhaId?: boolean
  }

  export type TecnicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "campanhaId", ExtArgs["result"]["tecnico"]>
  export type TecnicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    produtoresCampanhas?: boolean | Tecnico$produtoresCampanhasArgs<ExtArgs>
    _count?: boolean | TecnicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TecnicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
  }
  export type TecnicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
  }

  export type $TecnicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tecnico"
    objects: {
      campanha: Prisma.$CampanhaPayload<ExtArgs>
      produtoresCampanhas: Prisma.$ProdutorCampanhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      campanhaId: number
    }, ExtArgs["result"]["tecnico"]>
    composites: {}
  }

  type TecnicoGetPayload<S extends boolean | null | undefined | TecnicoDefaultArgs> = $Result.GetResult<Prisma.$TecnicoPayload, S>

  type TecnicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TecnicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TecnicoCountAggregateInputType | true
    }

  export interface TecnicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tecnico'], meta: { name: 'Tecnico' } }
    /**
     * Find zero or one Tecnico that matches the filter.
     * @param {TecnicoFindUniqueArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TecnicoFindUniqueArgs>(args: SelectSubset<T, TecnicoFindUniqueArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tecnico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TecnicoFindUniqueOrThrowArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TecnicoFindUniqueOrThrowArgs>(args: SelectSubset<T, TecnicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindFirstArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TecnicoFindFirstArgs>(args?: SelectSubset<T, TecnicoFindFirstArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindFirstOrThrowArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TecnicoFindFirstOrThrowArgs>(args?: SelectSubset<T, TecnicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tecnicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tecnicos
     * const tecnicos = await prisma.tecnico.findMany()
     * 
     * // Get first 10 Tecnicos
     * const tecnicos = await prisma.tecnico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tecnicoWithIdOnly = await prisma.tecnico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TecnicoFindManyArgs>(args?: SelectSubset<T, TecnicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tecnico.
     * @param {TecnicoCreateArgs} args - Arguments to create a Tecnico.
     * @example
     * // Create one Tecnico
     * const Tecnico = await prisma.tecnico.create({
     *   data: {
     *     // ... data to create a Tecnico
     *   }
     * })
     * 
     */
    create<T extends TecnicoCreateArgs>(args: SelectSubset<T, TecnicoCreateArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tecnicos.
     * @param {TecnicoCreateManyArgs} args - Arguments to create many Tecnicos.
     * @example
     * // Create many Tecnicos
     * const tecnico = await prisma.tecnico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TecnicoCreateManyArgs>(args?: SelectSubset<T, TecnicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tecnicos and returns the data saved in the database.
     * @param {TecnicoCreateManyAndReturnArgs} args - Arguments to create many Tecnicos.
     * @example
     * // Create many Tecnicos
     * const tecnico = await prisma.tecnico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tecnicos and only return the `id`
     * const tecnicoWithIdOnly = await prisma.tecnico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TecnicoCreateManyAndReturnArgs>(args?: SelectSubset<T, TecnicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tecnico.
     * @param {TecnicoDeleteArgs} args - Arguments to delete one Tecnico.
     * @example
     * // Delete one Tecnico
     * const Tecnico = await prisma.tecnico.delete({
     *   where: {
     *     // ... filter to delete one Tecnico
     *   }
     * })
     * 
     */
    delete<T extends TecnicoDeleteArgs>(args: SelectSubset<T, TecnicoDeleteArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tecnico.
     * @param {TecnicoUpdateArgs} args - Arguments to update one Tecnico.
     * @example
     * // Update one Tecnico
     * const tecnico = await prisma.tecnico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TecnicoUpdateArgs>(args: SelectSubset<T, TecnicoUpdateArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tecnicos.
     * @param {TecnicoDeleteManyArgs} args - Arguments to filter Tecnicos to delete.
     * @example
     * // Delete a few Tecnicos
     * const { count } = await prisma.tecnico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TecnicoDeleteManyArgs>(args?: SelectSubset<T, TecnicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tecnicos
     * const tecnico = await prisma.tecnico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TecnicoUpdateManyArgs>(args: SelectSubset<T, TecnicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnicos and returns the data updated in the database.
     * @param {TecnicoUpdateManyAndReturnArgs} args - Arguments to update many Tecnicos.
     * @example
     * // Update many Tecnicos
     * const tecnico = await prisma.tecnico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tecnicos and only return the `id`
     * const tecnicoWithIdOnly = await prisma.tecnico.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TecnicoUpdateManyAndReturnArgs>(args: SelectSubset<T, TecnicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tecnico.
     * @param {TecnicoUpsertArgs} args - Arguments to update or create a Tecnico.
     * @example
     * // Update or create a Tecnico
     * const tecnico = await prisma.tecnico.upsert({
     *   create: {
     *     // ... data to create a Tecnico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tecnico we want to update
     *   }
     * })
     */
    upsert<T extends TecnicoUpsertArgs>(args: SelectSubset<T, TecnicoUpsertArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoCountArgs} args - Arguments to filter Tecnicos to count.
     * @example
     * // Count the number of Tecnicos
     * const count = await prisma.tecnico.count({
     *   where: {
     *     // ... the filter for the Tecnicos we want to count
     *   }
     * })
    **/
    count<T extends TecnicoCountArgs>(
      args?: Subset<T, TecnicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TecnicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TecnicoAggregateArgs>(args: Subset<T, TecnicoAggregateArgs>): Prisma.PrismaPromise<GetTecnicoAggregateType<T>>

    /**
     * Group by Tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoGroupByArgs} args - Group by arguments.
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
      T extends TecnicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TecnicoGroupByArgs['orderBy'] }
        : { orderBy?: TecnicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TecnicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTecnicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tecnico model
   */
  readonly fields: TecnicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tecnico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TecnicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campanha<T extends CampanhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampanhaDefaultArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produtoresCampanhas<T extends Tecnico$produtoresCampanhasArgs<ExtArgs> = {}>(args?: Subset<T, Tecnico$produtoresCampanhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tecnico model
   */
  interface TecnicoFieldRefs {
    readonly id: FieldRef<"Tecnico", 'Int'>
    readonly nome: FieldRef<"Tecnico", 'String'>
    readonly campanhaId: FieldRef<"Tecnico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tecnico findUnique
   */
  export type TecnicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico findUniqueOrThrow
   */
  export type TecnicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico findFirst
   */
  export type TecnicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnicos.
     */
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico findFirstOrThrow
   */
  export type TecnicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnicos.
     */
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico findMany
   */
  export type TecnicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnicos to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico create
   */
  export type TecnicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tecnico.
     */
    data: XOR<TecnicoCreateInput, TecnicoUncheckedCreateInput>
  }

  /**
   * Tecnico createMany
   */
  export type TecnicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tecnicos.
     */
    data: TecnicoCreateManyInput | TecnicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tecnico createManyAndReturn
   */
  export type TecnicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * The data used to create many Tecnicos.
     */
    data: TecnicoCreateManyInput | TecnicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tecnico update
   */
  export type TecnicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tecnico.
     */
    data: XOR<TecnicoUpdateInput, TecnicoUncheckedUpdateInput>
    /**
     * Choose, which Tecnico to update.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico updateMany
   */
  export type TecnicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tecnicos.
     */
    data: XOR<TecnicoUpdateManyMutationInput, TecnicoUncheckedUpdateManyInput>
    /**
     * Filter which Tecnicos to update
     */
    where?: TecnicoWhereInput
    /**
     * Limit how many Tecnicos to update.
     */
    limit?: number
  }

  /**
   * Tecnico updateManyAndReturn
   */
  export type TecnicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * The data used to update Tecnicos.
     */
    data: XOR<TecnicoUpdateManyMutationInput, TecnicoUncheckedUpdateManyInput>
    /**
     * Filter which Tecnicos to update
     */
    where?: TecnicoWhereInput
    /**
     * Limit how many Tecnicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tecnico upsert
   */
  export type TecnicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tecnico to update in case it exists.
     */
    where: TecnicoWhereUniqueInput
    /**
     * In case the Tecnico found by the `where` argument doesn't exist, create a new Tecnico with this data.
     */
    create: XOR<TecnicoCreateInput, TecnicoUncheckedCreateInput>
    /**
     * In case the Tecnico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TecnicoUpdateInput, TecnicoUncheckedUpdateInput>
  }

  /**
   * Tecnico delete
   */
  export type TecnicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter which Tecnico to delete.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico deleteMany
   */
  export type TecnicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tecnicos to delete
     */
    where?: TecnicoWhereInput
    /**
     * Limit how many Tecnicos to delete.
     */
    limit?: number
  }

  /**
   * Tecnico.produtoresCampanhas
   */
  export type Tecnico$produtoresCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    where?: ProdutorCampanhaWhereInput
    orderBy?: ProdutorCampanhaOrderByWithRelationInput | ProdutorCampanhaOrderByWithRelationInput[]
    cursor?: ProdutorCampanhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutorCampanhaScalarFieldEnum | ProdutorCampanhaScalarFieldEnum[]
  }

  /**
   * Tecnico without action
   */
  export type TecnicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
  }


  /**
   * Model Produtor
   */

  export type AggregateProdutor = {
    _count: ProdutorCountAggregateOutputType | null
    _avg: ProdutorAvgAggregateOutputType | null
    _sum: ProdutorSumAggregateOutputType | null
    _min: ProdutorMinAggregateOutputType | null
    _max: ProdutorMaxAggregateOutputType | null
  }

  export type ProdutorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProdutorSumAggregateOutputType = {
    id: number | null
  }

  export type ProdutorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    localizacao: string | null
  }

  export type ProdutorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    localizacao: string | null
  }

  export type ProdutorCountAggregateOutputType = {
    id: number
    nome: number
    localizacao: number
    _all: number
  }


  export type ProdutorAvgAggregateInputType = {
    id?: true
  }

  export type ProdutorSumAggregateInputType = {
    id?: true
  }

  export type ProdutorMinAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
  }

  export type ProdutorMaxAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
  }

  export type ProdutorCountAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    _all?: true
  }

  export type ProdutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtor to aggregate.
     */
    where?: ProdutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtors to fetch.
     */
    orderBy?: ProdutorOrderByWithRelationInput | ProdutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtors
    **/
    _count?: true | ProdutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutorMaxAggregateInputType
  }

  export type GetProdutorAggregateType<T extends ProdutorAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutor[P]>
      : GetScalarType<T[P], AggregateProdutor[P]>
  }




  export type ProdutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutorWhereInput
    orderBy?: ProdutorOrderByWithAggregationInput | ProdutorOrderByWithAggregationInput[]
    by: ProdutorScalarFieldEnum[] | ProdutorScalarFieldEnum
    having?: ProdutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutorCountAggregateInputType | true
    _avg?: ProdutorAvgAggregateInputType
    _sum?: ProdutorSumAggregateInputType
    _min?: ProdutorMinAggregateInputType
    _max?: ProdutorMaxAggregateInputType
  }

  export type ProdutorGroupByOutputType = {
    id: number
    nome: string
    localizacao: string
    _count: ProdutorCountAggregateOutputType | null
    _avg: ProdutorAvgAggregateOutputType | null
    _sum: ProdutorSumAggregateOutputType | null
    _min: ProdutorMinAggregateOutputType | null
    _max: ProdutorMaxAggregateOutputType | null
  }

  type GetProdutorGroupByPayload<T extends ProdutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutorGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutorGroupByOutputType[P]>
        }
      >
    >


  export type ProdutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    produtoresCampanhas?: boolean | Produtor$produtoresCampanhasArgs<ExtArgs>
    _count?: boolean | ProdutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtor"]>

  export type ProdutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
  }, ExtArgs["result"]["produtor"]>

  export type ProdutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
  }, ExtArgs["result"]["produtor"]>

  export type ProdutorSelectScalar = {
    id?: boolean
    nome?: boolean
    localizacao?: boolean
  }

  export type ProdutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "localizacao", ExtArgs["result"]["produtor"]>
  export type ProdutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtoresCampanhas?: boolean | Produtor$produtoresCampanhasArgs<ExtArgs>
    _count?: boolean | ProdutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produtor"
    objects: {
      produtoresCampanhas: Prisma.$ProdutorCampanhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      localizacao: string
    }, ExtArgs["result"]["produtor"]>
    composites: {}
  }

  type ProdutorGetPayload<S extends boolean | null | undefined | ProdutorDefaultArgs> = $Result.GetResult<Prisma.$ProdutorPayload, S>

  type ProdutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutorCountAggregateInputType | true
    }

  export interface ProdutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produtor'], meta: { name: 'Produtor' } }
    /**
     * Find zero or one Produtor that matches the filter.
     * @param {ProdutorFindUniqueArgs} args - Arguments to find a Produtor
     * @example
     * // Get one Produtor
     * const produtor = await prisma.produtor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutorFindUniqueArgs>(args: SelectSubset<T, ProdutorFindUniqueArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produtor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutorFindUniqueOrThrowArgs} args - Arguments to find a Produtor
     * @example
     * // Get one Produtor
     * const produtor = await prisma.produtor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorFindFirstArgs} args - Arguments to find a Produtor
     * @example
     * // Get one Produtor
     * const produtor = await prisma.produtor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutorFindFirstArgs>(args?: SelectSubset<T, ProdutorFindFirstArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorFindFirstOrThrowArgs} args - Arguments to find a Produtor
     * @example
     * // Get one Produtor
     * const produtor = await prisma.produtor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtors
     * const produtors = await prisma.produtor.findMany()
     * 
     * // Get first 10 Produtors
     * const produtors = await prisma.produtor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtorWithIdOnly = await prisma.produtor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutorFindManyArgs>(args?: SelectSubset<T, ProdutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produtor.
     * @param {ProdutorCreateArgs} args - Arguments to create a Produtor.
     * @example
     * // Create one Produtor
     * const Produtor = await prisma.produtor.create({
     *   data: {
     *     // ... data to create a Produtor
     *   }
     * })
     * 
     */
    create<T extends ProdutorCreateArgs>(args: SelectSubset<T, ProdutorCreateArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtors.
     * @param {ProdutorCreateManyArgs} args - Arguments to create many Produtors.
     * @example
     * // Create many Produtors
     * const produtor = await prisma.produtor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutorCreateManyArgs>(args?: SelectSubset<T, ProdutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtors and returns the data saved in the database.
     * @param {ProdutorCreateManyAndReturnArgs} args - Arguments to create many Produtors.
     * @example
     * // Create many Produtors
     * const produtor = await prisma.produtor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtors and only return the `id`
     * const produtorWithIdOnly = await prisma.produtor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produtor.
     * @param {ProdutorDeleteArgs} args - Arguments to delete one Produtor.
     * @example
     * // Delete one Produtor
     * const Produtor = await prisma.produtor.delete({
     *   where: {
     *     // ... filter to delete one Produtor
     *   }
     * })
     * 
     */
    delete<T extends ProdutorDeleteArgs>(args: SelectSubset<T, ProdutorDeleteArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produtor.
     * @param {ProdutorUpdateArgs} args - Arguments to update one Produtor.
     * @example
     * // Update one Produtor
     * const produtor = await prisma.produtor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutorUpdateArgs>(args: SelectSubset<T, ProdutorUpdateArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtors.
     * @param {ProdutorDeleteManyArgs} args - Arguments to filter Produtors to delete.
     * @example
     * // Delete a few Produtors
     * const { count } = await prisma.produtor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutorDeleteManyArgs>(args?: SelectSubset<T, ProdutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtors
     * const produtor = await prisma.produtor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutorUpdateManyArgs>(args: SelectSubset<T, ProdutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtors and returns the data updated in the database.
     * @param {ProdutorUpdateManyAndReturnArgs} args - Arguments to update many Produtors.
     * @example
     * // Update many Produtors
     * const produtor = await prisma.produtor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtors and only return the `id`
     * const produtorWithIdOnly = await prisma.produtor.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProdutorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produtor.
     * @param {ProdutorUpsertArgs} args - Arguments to update or create a Produtor.
     * @example
     * // Update or create a Produtor
     * const produtor = await prisma.produtor.upsert({
     *   create: {
     *     // ... data to create a Produtor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtor we want to update
     *   }
     * })
     */
    upsert<T extends ProdutorUpsertArgs>(args: SelectSubset<T, ProdutorUpsertArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCountArgs} args - Arguments to filter Produtors to count.
     * @example
     * // Count the number of Produtors
     * const count = await prisma.produtor.count({
     *   where: {
     *     // ... the filter for the Produtors we want to count
     *   }
     * })
    **/
    count<T extends ProdutorCountArgs>(
      args?: Subset<T, ProdutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutorAggregateArgs>(args: Subset<T, ProdutorAggregateArgs>): Prisma.PrismaPromise<GetProdutorAggregateType<T>>

    /**
     * Group by Produtor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorGroupByArgs} args - Group by arguments.
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
      T extends ProdutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutorGroupByArgs['orderBy'] }
        : { orderBy?: ProdutorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produtor model
   */
  readonly fields: ProdutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produtor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtoresCampanhas<T extends Produtor$produtoresCampanhasArgs<ExtArgs> = {}>(args?: Subset<T, Produtor$produtoresCampanhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produtor model
   */
  interface ProdutorFieldRefs {
    readonly id: FieldRef<"Produtor", 'Int'>
    readonly nome: FieldRef<"Produtor", 'String'>
    readonly localizacao: FieldRef<"Produtor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produtor findUnique
   */
  export type ProdutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtor to fetch.
     */
    where: ProdutorWhereUniqueInput
  }

  /**
   * Produtor findUniqueOrThrow
   */
  export type ProdutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtor to fetch.
     */
    where: ProdutorWhereUniqueInput
  }

  /**
   * Produtor findFirst
   */
  export type ProdutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtor to fetch.
     */
    where?: ProdutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtors to fetch.
     */
    orderBy?: ProdutorOrderByWithRelationInput | ProdutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtors.
     */
    cursor?: ProdutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtors.
     */
    distinct?: ProdutorScalarFieldEnum | ProdutorScalarFieldEnum[]
  }

  /**
   * Produtor findFirstOrThrow
   */
  export type ProdutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtor to fetch.
     */
    where?: ProdutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtors to fetch.
     */
    orderBy?: ProdutorOrderByWithRelationInput | ProdutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtors.
     */
    cursor?: ProdutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtors.
     */
    distinct?: ProdutorScalarFieldEnum | ProdutorScalarFieldEnum[]
  }

  /**
   * Produtor findMany
   */
  export type ProdutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtors to fetch.
     */
    where?: ProdutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtors to fetch.
     */
    orderBy?: ProdutorOrderByWithRelationInput | ProdutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtors.
     */
    cursor?: ProdutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtors.
     */
    skip?: number
    distinct?: ProdutorScalarFieldEnum | ProdutorScalarFieldEnum[]
  }

  /**
   * Produtor create
   */
  export type ProdutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Produtor.
     */
    data: XOR<ProdutorCreateInput, ProdutorUncheckedCreateInput>
  }

  /**
   * Produtor createMany
   */
  export type ProdutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtors.
     */
    data: ProdutorCreateManyInput | ProdutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produtor createManyAndReturn
   */
  export type ProdutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * The data used to create many Produtors.
     */
    data: ProdutorCreateManyInput | ProdutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produtor update
   */
  export type ProdutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Produtor.
     */
    data: XOR<ProdutorUpdateInput, ProdutorUncheckedUpdateInput>
    /**
     * Choose, which Produtor to update.
     */
    where: ProdutorWhereUniqueInput
  }

  /**
   * Produtor updateMany
   */
  export type ProdutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtors.
     */
    data: XOR<ProdutorUpdateManyMutationInput, ProdutorUncheckedUpdateManyInput>
    /**
     * Filter which Produtors to update
     */
    where?: ProdutorWhereInput
    /**
     * Limit how many Produtors to update.
     */
    limit?: number
  }

  /**
   * Produtor updateManyAndReturn
   */
  export type ProdutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * The data used to update Produtors.
     */
    data: XOR<ProdutorUpdateManyMutationInput, ProdutorUncheckedUpdateManyInput>
    /**
     * Filter which Produtors to update
     */
    where?: ProdutorWhereInput
    /**
     * Limit how many Produtors to update.
     */
    limit?: number
  }

  /**
   * Produtor upsert
   */
  export type ProdutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Produtor to update in case it exists.
     */
    where: ProdutorWhereUniqueInput
    /**
     * In case the Produtor found by the `where` argument doesn't exist, create a new Produtor with this data.
     */
    create: XOR<ProdutorCreateInput, ProdutorUncheckedCreateInput>
    /**
     * In case the Produtor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutorUpdateInput, ProdutorUncheckedUpdateInput>
  }

  /**
   * Produtor delete
   */
  export type ProdutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter which Produtor to delete.
     */
    where: ProdutorWhereUniqueInput
  }

  /**
   * Produtor deleteMany
   */
  export type ProdutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtors to delete
     */
    where?: ProdutorWhereInput
    /**
     * Limit how many Produtors to delete.
     */
    limit?: number
  }

  /**
   * Produtor.produtoresCampanhas
   */
  export type Produtor$produtoresCampanhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    where?: ProdutorCampanhaWhereInput
    orderBy?: ProdutorCampanhaOrderByWithRelationInput | ProdutorCampanhaOrderByWithRelationInput[]
    cursor?: ProdutorCampanhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutorCampanhaScalarFieldEnum | ProdutorCampanhaScalarFieldEnum[]
  }

  /**
   * Produtor without action
   */
  export type ProdutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
  }


  /**
   * Model ProdutorCampanha
   */

  export type AggregateProdutorCampanha = {
    _count: ProdutorCampanhaCountAggregateOutputType | null
    _avg: ProdutorCampanhaAvgAggregateOutputType | null
    _sum: ProdutorCampanhaSumAggregateOutputType | null
    _min: ProdutorCampanhaMinAggregateOutputType | null
    _max: ProdutorCampanhaMaxAggregateOutputType | null
  }

  export type ProdutorCampanhaAvgAggregateOutputType = {
    id: number | null
    produtorId: number | null
    campanhaId: number | null
    tecnicoId: number | null
  }

  export type ProdutorCampanhaSumAggregateOutputType = {
    id: number | null
    produtorId: number | null
    campanhaId: number | null
    tecnicoId: number | null
  }

  export type ProdutorCampanhaMinAggregateOutputType = {
    id: number | null
    produtorId: number | null
    campanhaId: number | null
    tecnicoId: number | null
    dataRegistro: Date | null
    dataTransferencia: Date | null
  }

  export type ProdutorCampanhaMaxAggregateOutputType = {
    id: number | null
    produtorId: number | null
    campanhaId: number | null
    tecnicoId: number | null
    dataRegistro: Date | null
    dataTransferencia: Date | null
  }

  export type ProdutorCampanhaCountAggregateOutputType = {
    id: number
    produtorId: number
    campanhaId: number
    tecnicoId: number
    dataRegistro: number
    dataTransferencia: number
    _all: number
  }


  export type ProdutorCampanhaAvgAggregateInputType = {
    id?: true
    produtorId?: true
    campanhaId?: true
    tecnicoId?: true
  }

  export type ProdutorCampanhaSumAggregateInputType = {
    id?: true
    produtorId?: true
    campanhaId?: true
    tecnicoId?: true
  }

  export type ProdutorCampanhaMinAggregateInputType = {
    id?: true
    produtorId?: true
    campanhaId?: true
    tecnicoId?: true
    dataRegistro?: true
    dataTransferencia?: true
  }

  export type ProdutorCampanhaMaxAggregateInputType = {
    id?: true
    produtorId?: true
    campanhaId?: true
    tecnicoId?: true
    dataRegistro?: true
    dataTransferencia?: true
  }

  export type ProdutorCampanhaCountAggregateInputType = {
    id?: true
    produtorId?: true
    campanhaId?: true
    tecnicoId?: true
    dataRegistro?: true
    dataTransferencia?: true
    _all?: true
  }

  export type ProdutorCampanhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutorCampanha to aggregate.
     */
    where?: ProdutorCampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutorCampanhas to fetch.
     */
    orderBy?: ProdutorCampanhaOrderByWithRelationInput | ProdutorCampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutorCampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutorCampanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutorCampanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProdutorCampanhas
    **/
    _count?: true | ProdutorCampanhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutorCampanhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutorCampanhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutorCampanhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutorCampanhaMaxAggregateInputType
  }

  export type GetProdutorCampanhaAggregateType<T extends ProdutorCampanhaAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutorCampanha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutorCampanha[P]>
      : GetScalarType<T[P], AggregateProdutorCampanha[P]>
  }




  export type ProdutorCampanhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutorCampanhaWhereInput
    orderBy?: ProdutorCampanhaOrderByWithAggregationInput | ProdutorCampanhaOrderByWithAggregationInput[]
    by: ProdutorCampanhaScalarFieldEnum[] | ProdutorCampanhaScalarFieldEnum
    having?: ProdutorCampanhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutorCampanhaCountAggregateInputType | true
    _avg?: ProdutorCampanhaAvgAggregateInputType
    _sum?: ProdutorCampanhaSumAggregateInputType
    _min?: ProdutorCampanhaMinAggregateInputType
    _max?: ProdutorCampanhaMaxAggregateInputType
  }

  export type ProdutorCampanhaGroupByOutputType = {
    id: number
    produtorId: number
    campanhaId: number
    tecnicoId: number
    dataRegistro: Date
    dataTransferencia: Date | null
    _count: ProdutorCampanhaCountAggregateOutputType | null
    _avg: ProdutorCampanhaAvgAggregateOutputType | null
    _sum: ProdutorCampanhaSumAggregateOutputType | null
    _min: ProdutorCampanhaMinAggregateOutputType | null
    _max: ProdutorCampanhaMaxAggregateOutputType | null
  }

  type GetProdutorCampanhaGroupByPayload<T extends ProdutorCampanhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutorCampanhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutorCampanhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutorCampanhaGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutorCampanhaGroupByOutputType[P]>
        }
      >
    >


  export type ProdutorCampanhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtorId?: boolean
    campanhaId?: boolean
    tecnicoId?: boolean
    dataRegistro?: boolean
    dataTransferencia?: boolean
    produtor?: boolean | ProdutorDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtorCampanha"]>

  export type ProdutorCampanhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtorId?: boolean
    campanhaId?: boolean
    tecnicoId?: boolean
    dataRegistro?: boolean
    dataTransferencia?: boolean
    produtor?: boolean | ProdutorDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtorCampanha"]>

  export type ProdutorCampanhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtorId?: boolean
    campanhaId?: boolean
    tecnicoId?: boolean
    dataRegistro?: boolean
    dataTransferencia?: boolean
    produtor?: boolean | ProdutorDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtorCampanha"]>

  export type ProdutorCampanhaSelectScalar = {
    id?: boolean
    produtorId?: boolean
    campanhaId?: boolean
    tecnicoId?: boolean
    dataRegistro?: boolean
    dataTransferencia?: boolean
  }

  export type ProdutorCampanhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produtorId" | "campanhaId" | "tecnicoId" | "dataRegistro" | "dataTransferencia", ExtArgs["result"]["produtorCampanha"]>
  export type ProdutorCampanhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtor?: boolean | ProdutorDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }
  export type ProdutorCampanhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtor?: boolean | ProdutorDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }
  export type ProdutorCampanhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtor?: boolean | ProdutorDefaultArgs<ExtArgs>
    campanha?: boolean | CampanhaDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }

  export type $ProdutorCampanhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProdutorCampanha"
    objects: {
      produtor: Prisma.$ProdutorPayload<ExtArgs>
      campanha: Prisma.$CampanhaPayload<ExtArgs>
      tecnico: Prisma.$TecnicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produtorId: number
      campanhaId: number
      tecnicoId: number
      dataRegistro: Date
      dataTransferencia: Date | null
    }, ExtArgs["result"]["produtorCampanha"]>
    composites: {}
  }

  type ProdutorCampanhaGetPayload<S extends boolean | null | undefined | ProdutorCampanhaDefaultArgs> = $Result.GetResult<Prisma.$ProdutorCampanhaPayload, S>

  type ProdutorCampanhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutorCampanhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutorCampanhaCountAggregateInputType | true
    }

  export interface ProdutorCampanhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProdutorCampanha'], meta: { name: 'ProdutorCampanha' } }
    /**
     * Find zero or one ProdutorCampanha that matches the filter.
     * @param {ProdutorCampanhaFindUniqueArgs} args - Arguments to find a ProdutorCampanha
     * @example
     * // Get one ProdutorCampanha
     * const produtorCampanha = await prisma.produtorCampanha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutorCampanhaFindUniqueArgs>(args: SelectSubset<T, ProdutorCampanhaFindUniqueArgs<ExtArgs>>): Prisma__ProdutorCampanhaClient<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProdutorCampanha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutorCampanhaFindUniqueOrThrowArgs} args - Arguments to find a ProdutorCampanha
     * @example
     * // Get one ProdutorCampanha
     * const produtorCampanha = await prisma.produtorCampanha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutorCampanhaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutorCampanhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutorCampanhaClient<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutorCampanha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCampanhaFindFirstArgs} args - Arguments to find a ProdutorCampanha
     * @example
     * // Get one ProdutorCampanha
     * const produtorCampanha = await prisma.produtorCampanha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutorCampanhaFindFirstArgs>(args?: SelectSubset<T, ProdutorCampanhaFindFirstArgs<ExtArgs>>): Prisma__ProdutorCampanhaClient<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutorCampanha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCampanhaFindFirstOrThrowArgs} args - Arguments to find a ProdutorCampanha
     * @example
     * // Get one ProdutorCampanha
     * const produtorCampanha = await prisma.produtorCampanha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutorCampanhaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutorCampanhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutorCampanhaClient<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProdutorCampanhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCampanhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdutorCampanhas
     * const produtorCampanhas = await prisma.produtorCampanha.findMany()
     * 
     * // Get first 10 ProdutorCampanhas
     * const produtorCampanhas = await prisma.produtorCampanha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtorCampanhaWithIdOnly = await prisma.produtorCampanha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutorCampanhaFindManyArgs>(args?: SelectSubset<T, ProdutorCampanhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProdutorCampanha.
     * @param {ProdutorCampanhaCreateArgs} args - Arguments to create a ProdutorCampanha.
     * @example
     * // Create one ProdutorCampanha
     * const ProdutorCampanha = await prisma.produtorCampanha.create({
     *   data: {
     *     // ... data to create a ProdutorCampanha
     *   }
     * })
     * 
     */
    create<T extends ProdutorCampanhaCreateArgs>(args: SelectSubset<T, ProdutorCampanhaCreateArgs<ExtArgs>>): Prisma__ProdutorCampanhaClient<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProdutorCampanhas.
     * @param {ProdutorCampanhaCreateManyArgs} args - Arguments to create many ProdutorCampanhas.
     * @example
     * // Create many ProdutorCampanhas
     * const produtorCampanha = await prisma.produtorCampanha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutorCampanhaCreateManyArgs>(args?: SelectSubset<T, ProdutorCampanhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProdutorCampanhas and returns the data saved in the database.
     * @param {ProdutorCampanhaCreateManyAndReturnArgs} args - Arguments to create many ProdutorCampanhas.
     * @example
     * // Create many ProdutorCampanhas
     * const produtorCampanha = await prisma.produtorCampanha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProdutorCampanhas and only return the `id`
     * const produtorCampanhaWithIdOnly = await prisma.produtorCampanha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutorCampanhaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutorCampanhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProdutorCampanha.
     * @param {ProdutorCampanhaDeleteArgs} args - Arguments to delete one ProdutorCampanha.
     * @example
     * // Delete one ProdutorCampanha
     * const ProdutorCampanha = await prisma.produtorCampanha.delete({
     *   where: {
     *     // ... filter to delete one ProdutorCampanha
     *   }
     * })
     * 
     */
    delete<T extends ProdutorCampanhaDeleteArgs>(args: SelectSubset<T, ProdutorCampanhaDeleteArgs<ExtArgs>>): Prisma__ProdutorCampanhaClient<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProdutorCampanha.
     * @param {ProdutorCampanhaUpdateArgs} args - Arguments to update one ProdutorCampanha.
     * @example
     * // Update one ProdutorCampanha
     * const produtorCampanha = await prisma.produtorCampanha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutorCampanhaUpdateArgs>(args: SelectSubset<T, ProdutorCampanhaUpdateArgs<ExtArgs>>): Prisma__ProdutorCampanhaClient<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProdutorCampanhas.
     * @param {ProdutorCampanhaDeleteManyArgs} args - Arguments to filter ProdutorCampanhas to delete.
     * @example
     * // Delete a few ProdutorCampanhas
     * const { count } = await prisma.produtorCampanha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutorCampanhaDeleteManyArgs>(args?: SelectSubset<T, ProdutorCampanhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutorCampanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCampanhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdutorCampanhas
     * const produtorCampanha = await prisma.produtorCampanha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutorCampanhaUpdateManyArgs>(args: SelectSubset<T, ProdutorCampanhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutorCampanhas and returns the data updated in the database.
     * @param {ProdutorCampanhaUpdateManyAndReturnArgs} args - Arguments to update many ProdutorCampanhas.
     * @example
     * // Update many ProdutorCampanhas
     * const produtorCampanha = await prisma.produtorCampanha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProdutorCampanhas and only return the `id`
     * const produtorCampanhaWithIdOnly = await prisma.produtorCampanha.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProdutorCampanhaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutorCampanhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProdutorCampanha.
     * @param {ProdutorCampanhaUpsertArgs} args - Arguments to update or create a ProdutorCampanha.
     * @example
     * // Update or create a ProdutorCampanha
     * const produtorCampanha = await prisma.produtorCampanha.upsert({
     *   create: {
     *     // ... data to create a ProdutorCampanha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdutorCampanha we want to update
     *   }
     * })
     */
    upsert<T extends ProdutorCampanhaUpsertArgs>(args: SelectSubset<T, ProdutorCampanhaUpsertArgs<ExtArgs>>): Prisma__ProdutorCampanhaClient<$Result.GetResult<Prisma.$ProdutorCampanhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProdutorCampanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCampanhaCountArgs} args - Arguments to filter ProdutorCampanhas to count.
     * @example
     * // Count the number of ProdutorCampanhas
     * const count = await prisma.produtorCampanha.count({
     *   where: {
     *     // ... the filter for the ProdutorCampanhas we want to count
     *   }
     * })
    **/
    count<T extends ProdutorCampanhaCountArgs>(
      args?: Subset<T, ProdutorCampanhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutorCampanhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProdutorCampanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCampanhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutorCampanhaAggregateArgs>(args: Subset<T, ProdutorCampanhaAggregateArgs>): Prisma.PrismaPromise<GetProdutorCampanhaAggregateType<T>>

    /**
     * Group by ProdutorCampanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCampanhaGroupByArgs} args - Group by arguments.
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
      T extends ProdutorCampanhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutorCampanhaGroupByArgs['orderBy'] }
        : { orderBy?: ProdutorCampanhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutorCampanhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutorCampanhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProdutorCampanha model
   */
  readonly fields: ProdutorCampanhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProdutorCampanha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutorCampanhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtor<T extends ProdutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutorDefaultArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campanha<T extends CampanhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampanhaDefaultArgs<ExtArgs>>): Prisma__CampanhaClient<$Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tecnico<T extends TecnicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TecnicoDefaultArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProdutorCampanha model
   */
  interface ProdutorCampanhaFieldRefs {
    readonly id: FieldRef<"ProdutorCampanha", 'Int'>
    readonly produtorId: FieldRef<"ProdutorCampanha", 'Int'>
    readonly campanhaId: FieldRef<"ProdutorCampanha", 'Int'>
    readonly tecnicoId: FieldRef<"ProdutorCampanha", 'Int'>
    readonly dataRegistro: FieldRef<"ProdutorCampanha", 'DateTime'>
    readonly dataTransferencia: FieldRef<"ProdutorCampanha", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProdutorCampanha findUnique
   */
  export type ProdutorCampanhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * Filter, which ProdutorCampanha to fetch.
     */
    where: ProdutorCampanhaWhereUniqueInput
  }

  /**
   * ProdutorCampanha findUniqueOrThrow
   */
  export type ProdutorCampanhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * Filter, which ProdutorCampanha to fetch.
     */
    where: ProdutorCampanhaWhereUniqueInput
  }

  /**
   * ProdutorCampanha findFirst
   */
  export type ProdutorCampanhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * Filter, which ProdutorCampanha to fetch.
     */
    where?: ProdutorCampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutorCampanhas to fetch.
     */
    orderBy?: ProdutorCampanhaOrderByWithRelationInput | ProdutorCampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutorCampanhas.
     */
    cursor?: ProdutorCampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutorCampanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutorCampanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutorCampanhas.
     */
    distinct?: ProdutorCampanhaScalarFieldEnum | ProdutorCampanhaScalarFieldEnum[]
  }

  /**
   * ProdutorCampanha findFirstOrThrow
   */
  export type ProdutorCampanhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * Filter, which ProdutorCampanha to fetch.
     */
    where?: ProdutorCampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutorCampanhas to fetch.
     */
    orderBy?: ProdutorCampanhaOrderByWithRelationInput | ProdutorCampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutorCampanhas.
     */
    cursor?: ProdutorCampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutorCampanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutorCampanhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutorCampanhas.
     */
    distinct?: ProdutorCampanhaScalarFieldEnum | ProdutorCampanhaScalarFieldEnum[]
  }

  /**
   * ProdutorCampanha findMany
   */
  export type ProdutorCampanhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * Filter, which ProdutorCampanhas to fetch.
     */
    where?: ProdutorCampanhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutorCampanhas to fetch.
     */
    orderBy?: ProdutorCampanhaOrderByWithRelationInput | ProdutorCampanhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProdutorCampanhas.
     */
    cursor?: ProdutorCampanhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutorCampanhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutorCampanhas.
     */
    skip?: number
    distinct?: ProdutorCampanhaScalarFieldEnum | ProdutorCampanhaScalarFieldEnum[]
  }

  /**
   * ProdutorCampanha create
   */
  export type ProdutorCampanhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProdutorCampanha.
     */
    data: XOR<ProdutorCampanhaCreateInput, ProdutorCampanhaUncheckedCreateInput>
  }

  /**
   * ProdutorCampanha createMany
   */
  export type ProdutorCampanhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProdutorCampanhas.
     */
    data: ProdutorCampanhaCreateManyInput | ProdutorCampanhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProdutorCampanha createManyAndReturn
   */
  export type ProdutorCampanhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * The data used to create many ProdutorCampanhas.
     */
    data: ProdutorCampanhaCreateManyInput | ProdutorCampanhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProdutorCampanha update
   */
  export type ProdutorCampanhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProdutorCampanha.
     */
    data: XOR<ProdutorCampanhaUpdateInput, ProdutorCampanhaUncheckedUpdateInput>
    /**
     * Choose, which ProdutorCampanha to update.
     */
    where: ProdutorCampanhaWhereUniqueInput
  }

  /**
   * ProdutorCampanha updateMany
   */
  export type ProdutorCampanhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProdutorCampanhas.
     */
    data: XOR<ProdutorCampanhaUpdateManyMutationInput, ProdutorCampanhaUncheckedUpdateManyInput>
    /**
     * Filter which ProdutorCampanhas to update
     */
    where?: ProdutorCampanhaWhereInput
    /**
     * Limit how many ProdutorCampanhas to update.
     */
    limit?: number
  }

  /**
   * ProdutorCampanha updateManyAndReturn
   */
  export type ProdutorCampanhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * The data used to update ProdutorCampanhas.
     */
    data: XOR<ProdutorCampanhaUpdateManyMutationInput, ProdutorCampanhaUncheckedUpdateManyInput>
    /**
     * Filter which ProdutorCampanhas to update
     */
    where?: ProdutorCampanhaWhereInput
    /**
     * Limit how many ProdutorCampanhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProdutorCampanha upsert
   */
  export type ProdutorCampanhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProdutorCampanha to update in case it exists.
     */
    where: ProdutorCampanhaWhereUniqueInput
    /**
     * In case the ProdutorCampanha found by the `where` argument doesn't exist, create a new ProdutorCampanha with this data.
     */
    create: XOR<ProdutorCampanhaCreateInput, ProdutorCampanhaUncheckedCreateInput>
    /**
     * In case the ProdutorCampanha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutorCampanhaUpdateInput, ProdutorCampanhaUncheckedUpdateInput>
  }

  /**
   * ProdutorCampanha delete
   */
  export type ProdutorCampanhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
    /**
     * Filter which ProdutorCampanha to delete.
     */
    where: ProdutorCampanhaWhereUniqueInput
  }

  /**
   * ProdutorCampanha deleteMany
   */
  export type ProdutorCampanhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutorCampanhas to delete
     */
    where?: ProdutorCampanhaWhereInput
    /**
     * Limit how many ProdutorCampanhas to delete.
     */
    limit?: number
  }

  /**
   * ProdutorCampanha without action
   */
  export type ProdutorCampanhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCampanha
     */
    select?: ProdutorCampanhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutorCampanha
     */
    omit?: ProdutorCampanhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorCampanhaInclude<ExtArgs> | null
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


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    telefone: 'telefone',
    email: 'email'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const CampanhaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    empresaId: 'empresaId',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim'
  };

  export type CampanhaScalarFieldEnum = (typeof CampanhaScalarFieldEnum)[keyof typeof CampanhaScalarFieldEnum]


  export const TecnicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    campanhaId: 'campanhaId'
  };

  export type TecnicoScalarFieldEnum = (typeof TecnicoScalarFieldEnum)[keyof typeof TecnicoScalarFieldEnum]


  export const ProdutorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    localizacao: 'localizacao'
  };

  export type ProdutorScalarFieldEnum = (typeof ProdutorScalarFieldEnum)[keyof typeof ProdutorScalarFieldEnum]


  export const ProdutorCampanhaScalarFieldEnum: {
    id: 'id',
    produtorId: 'produtorId',
    campanhaId: 'campanhaId',
    tecnicoId: 'tecnicoId',
    dataRegistro: 'dataRegistro',
    dataTransferencia: 'dataTransferencia'
  };

  export type ProdutorCampanhaScalarFieldEnum = (typeof ProdutorCampanhaScalarFieldEnum)[keyof typeof ProdutorCampanhaScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: IntFilter<"Empresa"> | number
    nome?: StringFilter<"Empresa"> | string
    cnpj?: StringFilter<"Empresa"> | string
    telefone?: StringNullableFilter<"Empresa"> | string | null
    email?: StringFilter<"Empresa"> | string
    campanhas?: CampanhaListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    campanhas?: CampanhaOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nome?: StringFilter<"Empresa"> | string
    telefone?: StringNullableFilter<"Empresa"> | string | null
    email?: StringFilter<"Empresa"> | string
    campanhas?: CampanhaListRelationFilter
  }, "id" | "cnpj">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _avg?: EmpresaAvgOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
    _sum?: EmpresaSumOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empresa"> | number
    nome?: StringWithAggregatesFilter<"Empresa"> | string
    cnpj?: StringWithAggregatesFilter<"Empresa"> | string
    telefone?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    email?: StringWithAggregatesFilter<"Empresa"> | string
  }

  export type CampanhaWhereInput = {
    AND?: CampanhaWhereInput | CampanhaWhereInput[]
    OR?: CampanhaWhereInput[]
    NOT?: CampanhaWhereInput | CampanhaWhereInput[]
    id?: IntFilter<"Campanha"> | number
    nome?: StringFilter<"Campanha"> | string
    empresaId?: IntFilter<"Campanha"> | number
    dataInicio?: DateTimeFilter<"Campanha"> | Date | string
    dataFim?: DateTimeNullableFilter<"Campanha"> | Date | string | null
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    tecnicos?: TecnicoListRelationFilter
    produtoresCampanhas?: ProdutorCampanhaListRelationFilter
  }

  export type CampanhaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    tecnicos?: TecnicoOrderByRelationAggregateInput
    produtoresCampanhas?: ProdutorCampanhaOrderByRelationAggregateInput
  }

  export type CampanhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampanhaWhereInput | CampanhaWhereInput[]
    OR?: CampanhaWhereInput[]
    NOT?: CampanhaWhereInput | CampanhaWhereInput[]
    nome?: StringFilter<"Campanha"> | string
    empresaId?: IntFilter<"Campanha"> | number
    dataInicio?: DateTimeFilter<"Campanha"> | Date | string
    dataFim?: DateTimeNullableFilter<"Campanha"> | Date | string | null
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    tecnicos?: TecnicoListRelationFilter
    produtoresCampanhas?: ProdutorCampanhaListRelationFilter
  }, "id">

  export type CampanhaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    _count?: CampanhaCountOrderByAggregateInput
    _avg?: CampanhaAvgOrderByAggregateInput
    _max?: CampanhaMaxOrderByAggregateInput
    _min?: CampanhaMinOrderByAggregateInput
    _sum?: CampanhaSumOrderByAggregateInput
  }

  export type CampanhaScalarWhereWithAggregatesInput = {
    AND?: CampanhaScalarWhereWithAggregatesInput | CampanhaScalarWhereWithAggregatesInput[]
    OR?: CampanhaScalarWhereWithAggregatesInput[]
    NOT?: CampanhaScalarWhereWithAggregatesInput | CampanhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campanha"> | number
    nome?: StringWithAggregatesFilter<"Campanha"> | string
    empresaId?: IntWithAggregatesFilter<"Campanha"> | number
    dataInicio?: DateTimeWithAggregatesFilter<"Campanha"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"Campanha"> | Date | string | null
  }

  export type TecnicoWhereInput = {
    AND?: TecnicoWhereInput | TecnicoWhereInput[]
    OR?: TecnicoWhereInput[]
    NOT?: TecnicoWhereInput | TecnicoWhereInput[]
    id?: IntFilter<"Tecnico"> | number
    nome?: StringFilter<"Tecnico"> | string
    campanhaId?: IntFilter<"Tecnico"> | number
    campanha?: XOR<CampanhaScalarRelationFilter, CampanhaWhereInput>
    produtoresCampanhas?: ProdutorCampanhaListRelationFilter
  }

  export type TecnicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    campanhaId?: SortOrder
    campanha?: CampanhaOrderByWithRelationInput
    produtoresCampanhas?: ProdutorCampanhaOrderByRelationAggregateInput
  }

  export type TecnicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TecnicoWhereInput | TecnicoWhereInput[]
    OR?: TecnicoWhereInput[]
    NOT?: TecnicoWhereInput | TecnicoWhereInput[]
    nome?: StringFilter<"Tecnico"> | string
    campanhaId?: IntFilter<"Tecnico"> | number
    campanha?: XOR<CampanhaScalarRelationFilter, CampanhaWhereInput>
    produtoresCampanhas?: ProdutorCampanhaListRelationFilter
  }, "id">

  export type TecnicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    campanhaId?: SortOrder
    _count?: TecnicoCountOrderByAggregateInput
    _avg?: TecnicoAvgOrderByAggregateInput
    _max?: TecnicoMaxOrderByAggregateInput
    _min?: TecnicoMinOrderByAggregateInput
    _sum?: TecnicoSumOrderByAggregateInput
  }

  export type TecnicoScalarWhereWithAggregatesInput = {
    AND?: TecnicoScalarWhereWithAggregatesInput | TecnicoScalarWhereWithAggregatesInput[]
    OR?: TecnicoScalarWhereWithAggregatesInput[]
    NOT?: TecnicoScalarWhereWithAggregatesInput | TecnicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tecnico"> | number
    nome?: StringWithAggregatesFilter<"Tecnico"> | string
    campanhaId?: IntWithAggregatesFilter<"Tecnico"> | number
  }

  export type ProdutorWhereInput = {
    AND?: ProdutorWhereInput | ProdutorWhereInput[]
    OR?: ProdutorWhereInput[]
    NOT?: ProdutorWhereInput | ProdutorWhereInput[]
    id?: IntFilter<"Produtor"> | number
    nome?: StringFilter<"Produtor"> | string
    localizacao?: StringFilter<"Produtor"> | string
    produtoresCampanhas?: ProdutorCampanhaListRelationFilter
  }

  export type ProdutorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    produtoresCampanhas?: ProdutorCampanhaOrderByRelationAggregateInput
  }

  export type ProdutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutorWhereInput | ProdutorWhereInput[]
    OR?: ProdutorWhereInput[]
    NOT?: ProdutorWhereInput | ProdutorWhereInput[]
    nome?: StringFilter<"Produtor"> | string
    localizacao?: StringFilter<"Produtor"> | string
    produtoresCampanhas?: ProdutorCampanhaListRelationFilter
  }, "id">

  export type ProdutorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    _count?: ProdutorCountOrderByAggregateInput
    _avg?: ProdutorAvgOrderByAggregateInput
    _max?: ProdutorMaxOrderByAggregateInput
    _min?: ProdutorMinOrderByAggregateInput
    _sum?: ProdutorSumOrderByAggregateInput
  }

  export type ProdutorScalarWhereWithAggregatesInput = {
    AND?: ProdutorScalarWhereWithAggregatesInput | ProdutorScalarWhereWithAggregatesInput[]
    OR?: ProdutorScalarWhereWithAggregatesInput[]
    NOT?: ProdutorScalarWhereWithAggregatesInput | ProdutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produtor"> | number
    nome?: StringWithAggregatesFilter<"Produtor"> | string
    localizacao?: StringWithAggregatesFilter<"Produtor"> | string
  }

  export type ProdutorCampanhaWhereInput = {
    AND?: ProdutorCampanhaWhereInput | ProdutorCampanhaWhereInput[]
    OR?: ProdutorCampanhaWhereInput[]
    NOT?: ProdutorCampanhaWhereInput | ProdutorCampanhaWhereInput[]
    id?: IntFilter<"ProdutorCampanha"> | number
    produtorId?: IntFilter<"ProdutorCampanha"> | number
    campanhaId?: IntFilter<"ProdutorCampanha"> | number
    tecnicoId?: IntFilter<"ProdutorCampanha"> | number
    dataRegistro?: DateTimeFilter<"ProdutorCampanha"> | Date | string
    dataTransferencia?: DateTimeNullableFilter<"ProdutorCampanha"> | Date | string | null
    produtor?: XOR<ProdutorScalarRelationFilter, ProdutorWhereInput>
    campanha?: XOR<CampanhaScalarRelationFilter, CampanhaWhereInput>
    tecnico?: XOR<TecnicoScalarRelationFilter, TecnicoWhereInput>
  }

  export type ProdutorCampanhaOrderByWithRelationInput = {
    id?: SortOrder
    produtorId?: SortOrder
    campanhaId?: SortOrder
    tecnicoId?: SortOrder
    dataRegistro?: SortOrder
    dataTransferencia?: SortOrderInput | SortOrder
    produtor?: ProdutorOrderByWithRelationInput
    campanha?: CampanhaOrderByWithRelationInput
    tecnico?: TecnicoOrderByWithRelationInput
  }

  export type ProdutorCampanhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutorCampanhaWhereInput | ProdutorCampanhaWhereInput[]
    OR?: ProdutorCampanhaWhereInput[]
    NOT?: ProdutorCampanhaWhereInput | ProdutorCampanhaWhereInput[]
    produtorId?: IntFilter<"ProdutorCampanha"> | number
    campanhaId?: IntFilter<"ProdutorCampanha"> | number
    tecnicoId?: IntFilter<"ProdutorCampanha"> | number
    dataRegistro?: DateTimeFilter<"ProdutorCampanha"> | Date | string
    dataTransferencia?: DateTimeNullableFilter<"ProdutorCampanha"> | Date | string | null
    produtor?: XOR<ProdutorScalarRelationFilter, ProdutorWhereInput>
    campanha?: XOR<CampanhaScalarRelationFilter, CampanhaWhereInput>
    tecnico?: XOR<TecnicoScalarRelationFilter, TecnicoWhereInput>
  }, "id">

  export type ProdutorCampanhaOrderByWithAggregationInput = {
    id?: SortOrder
    produtorId?: SortOrder
    campanhaId?: SortOrder
    tecnicoId?: SortOrder
    dataRegistro?: SortOrder
    dataTransferencia?: SortOrderInput | SortOrder
    _count?: ProdutorCampanhaCountOrderByAggregateInput
    _avg?: ProdutorCampanhaAvgOrderByAggregateInput
    _max?: ProdutorCampanhaMaxOrderByAggregateInput
    _min?: ProdutorCampanhaMinOrderByAggregateInput
    _sum?: ProdutorCampanhaSumOrderByAggregateInput
  }

  export type ProdutorCampanhaScalarWhereWithAggregatesInput = {
    AND?: ProdutorCampanhaScalarWhereWithAggregatesInput | ProdutorCampanhaScalarWhereWithAggregatesInput[]
    OR?: ProdutorCampanhaScalarWhereWithAggregatesInput[]
    NOT?: ProdutorCampanhaScalarWhereWithAggregatesInput | ProdutorCampanhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProdutorCampanha"> | number
    produtorId?: IntWithAggregatesFilter<"ProdutorCampanha"> | number
    campanhaId?: IntWithAggregatesFilter<"ProdutorCampanha"> | number
    tecnicoId?: IntWithAggregatesFilter<"ProdutorCampanha"> | number
    dataRegistro?: DateTimeWithAggregatesFilter<"ProdutorCampanha"> | Date | string
    dataTransferencia?: DateTimeNullableWithAggregatesFilter<"ProdutorCampanha"> | Date | string | null
  }

  export type EmpresaCreateInput = {
    nome: string
    cnpj: string
    telefone?: string | null
    email: string
    campanhas?: CampanhaCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: number
    nome: string
    cnpj: string
    telefone?: string | null
    email: string
    campanhas?: CampanhaUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    campanhas?: CampanhaUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    campanhas?: CampanhaUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: number
    nome: string
    cnpj: string
    telefone?: string | null
    email: string
  }

  export type EmpresaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CampanhaCreateInput = {
    nome: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    empresa: EmpresaCreateNestedOneWithoutCampanhasInput
    tecnicos?: TecnicoCreateNestedManyWithoutCampanhaInput
    produtoresCampanhas?: ProdutorCampanhaCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateInput = {
    id?: number
    nome: string
    empresaId: number
    dataInicio: Date | string
    dataFim?: Date | string | null
    tecnicos?: TecnicoUncheckedCreateNestedManyWithoutCampanhaInput
    produtoresCampanhas?: ProdutorCampanhaUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutCampanhasNestedInput
    tecnicos?: TecnicoUpdateManyWithoutCampanhaNestedInput
    produtoresCampanhas?: ProdutorCampanhaUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnicos?: TecnicoUncheckedUpdateManyWithoutCampanhaNestedInput
    produtoresCampanhas?: ProdutorCampanhaUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaCreateManyInput = {
    id?: number
    nome: string
    empresaId: number
    dataInicio: Date | string
    dataFim?: Date | string | null
  }

  export type CampanhaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CampanhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TecnicoCreateInput = {
    nome: string
    campanha: CampanhaCreateNestedOneWithoutTecnicosInput
    produtoresCampanhas?: ProdutorCampanhaCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUncheckedCreateInput = {
    id?: number
    nome: string
    campanhaId: number
    produtoresCampanhas?: ProdutorCampanhaUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    campanha?: CampanhaUpdateOneRequiredWithoutTecnicosNestedInput
    produtoresCampanhas?: ProdutorCampanhaUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    campanhaId?: IntFieldUpdateOperationsInput | number
    produtoresCampanhas?: ProdutorCampanhaUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoCreateManyInput = {
    id?: number
    nome: string
    campanhaId: number
  }

  export type TecnicoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TecnicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    campanhaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutorCreateInput = {
    nome: string
    localizacao: string
    produtoresCampanhas?: ProdutorCampanhaCreateNestedManyWithoutProdutorInput
  }

  export type ProdutorUncheckedCreateInput = {
    id?: number
    nome: string
    localizacao: string
    produtoresCampanhas?: ProdutorCampanhaUncheckedCreateNestedManyWithoutProdutorInput
  }

  export type ProdutorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    produtoresCampanhas?: ProdutorCampanhaUpdateManyWithoutProdutorNestedInput
  }

  export type ProdutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    produtoresCampanhas?: ProdutorCampanhaUncheckedUpdateManyWithoutProdutorNestedInput
  }

  export type ProdutorCreateManyInput = {
    id?: number
    nome: string
    localizacao: string
  }

  export type ProdutorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutorCampanhaCreateInput = {
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
    produtor: ProdutorCreateNestedOneWithoutProdutoresCampanhasInput
    campanha: CampanhaCreateNestedOneWithoutProdutoresCampanhasInput
    tecnico: TecnicoCreateNestedOneWithoutProdutoresCampanhasInput
  }

  export type ProdutorCampanhaUncheckedCreateInput = {
    id?: number
    produtorId: number
    campanhaId: number
    tecnicoId: number
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
  }

  export type ProdutorCampanhaUpdateInput = {
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produtor?: ProdutorUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
    campanha?: CampanhaUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
    tecnico?: TecnicoUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
  }

  export type ProdutorCampanhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtorId?: IntFieldUpdateOperationsInput | number
    campanhaId?: IntFieldUpdateOperationsInput | number
    tecnicoId?: IntFieldUpdateOperationsInput | number
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutorCampanhaCreateManyInput = {
    id?: number
    produtorId: number
    campanhaId: number
    tecnicoId: number
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
  }

  export type ProdutorCampanhaUpdateManyMutationInput = {
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutorCampanhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtorId?: IntFieldUpdateOperationsInput | number
    campanhaId?: IntFieldUpdateOperationsInput | number
    tecnicoId?: IntFieldUpdateOperationsInput | number
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CampanhaListRelationFilter = {
    every?: CampanhaWhereInput
    some?: CampanhaWhereInput
    none?: CampanhaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampanhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type EmpresaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type EmpresaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type TecnicoListRelationFilter = {
    every?: TecnicoWhereInput
    some?: TecnicoWhereInput
    none?: TecnicoWhereInput
  }

  export type ProdutorCampanhaListRelationFilter = {
    every?: ProdutorCampanhaWhereInput
    some?: ProdutorCampanhaWhereInput
    none?: ProdutorCampanhaWhereInput
  }

  export type TecnicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutorCampanhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampanhaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type CampanhaAvgOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
  }

  export type CampanhaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type CampanhaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type CampanhaSumOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CampanhaScalarRelationFilter = {
    is?: CampanhaWhereInput
    isNot?: CampanhaWhereInput
  }

  export type TecnicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    campanhaId?: SortOrder
  }

  export type TecnicoAvgOrderByAggregateInput = {
    id?: SortOrder
    campanhaId?: SortOrder
  }

  export type TecnicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    campanhaId?: SortOrder
  }

  export type TecnicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    campanhaId?: SortOrder
  }

  export type TecnicoSumOrderByAggregateInput = {
    id?: SortOrder
    campanhaId?: SortOrder
  }

  export type ProdutorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
  }

  export type ProdutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProdutorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
  }

  export type ProdutorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
  }

  export type ProdutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProdutorScalarRelationFilter = {
    is?: ProdutorWhereInput
    isNot?: ProdutorWhereInput
  }

  export type TecnicoScalarRelationFilter = {
    is?: TecnicoWhereInput
    isNot?: TecnicoWhereInput
  }

  export type ProdutorCampanhaCountOrderByAggregateInput = {
    id?: SortOrder
    produtorId?: SortOrder
    campanhaId?: SortOrder
    tecnicoId?: SortOrder
    dataRegistro?: SortOrder
    dataTransferencia?: SortOrder
  }

  export type ProdutorCampanhaAvgOrderByAggregateInput = {
    id?: SortOrder
    produtorId?: SortOrder
    campanhaId?: SortOrder
    tecnicoId?: SortOrder
  }

  export type ProdutorCampanhaMaxOrderByAggregateInput = {
    id?: SortOrder
    produtorId?: SortOrder
    campanhaId?: SortOrder
    tecnicoId?: SortOrder
    dataRegistro?: SortOrder
    dataTransferencia?: SortOrder
  }

  export type ProdutorCampanhaMinOrderByAggregateInput = {
    id?: SortOrder
    produtorId?: SortOrder
    campanhaId?: SortOrder
    tecnicoId?: SortOrder
    dataRegistro?: SortOrder
    dataTransferencia?: SortOrder
  }

  export type ProdutorCampanhaSumOrderByAggregateInput = {
    id?: SortOrder
    produtorId?: SortOrder
    campanhaId?: SortOrder
    tecnicoId?: SortOrder
  }

  export type CampanhaCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<CampanhaCreateWithoutEmpresaInput, CampanhaUncheckedCreateWithoutEmpresaInput> | CampanhaCreateWithoutEmpresaInput[] | CampanhaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: CampanhaCreateOrConnectWithoutEmpresaInput | CampanhaCreateOrConnectWithoutEmpresaInput[]
    createMany?: CampanhaCreateManyEmpresaInputEnvelope
    connect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
  }

  export type CampanhaUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<CampanhaCreateWithoutEmpresaInput, CampanhaUncheckedCreateWithoutEmpresaInput> | CampanhaCreateWithoutEmpresaInput[] | CampanhaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: CampanhaCreateOrConnectWithoutEmpresaInput | CampanhaCreateOrConnectWithoutEmpresaInput[]
    createMany?: CampanhaCreateManyEmpresaInputEnvelope
    connect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CampanhaUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<CampanhaCreateWithoutEmpresaInput, CampanhaUncheckedCreateWithoutEmpresaInput> | CampanhaCreateWithoutEmpresaInput[] | CampanhaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: CampanhaCreateOrConnectWithoutEmpresaInput | CampanhaCreateOrConnectWithoutEmpresaInput[]
    upsert?: CampanhaUpsertWithWhereUniqueWithoutEmpresaInput | CampanhaUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: CampanhaCreateManyEmpresaInputEnvelope
    set?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    disconnect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    delete?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    connect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    update?: CampanhaUpdateWithWhereUniqueWithoutEmpresaInput | CampanhaUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: CampanhaUpdateManyWithWhereWithoutEmpresaInput | CampanhaUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: CampanhaScalarWhereInput | CampanhaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CampanhaUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<CampanhaCreateWithoutEmpresaInput, CampanhaUncheckedCreateWithoutEmpresaInput> | CampanhaCreateWithoutEmpresaInput[] | CampanhaUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: CampanhaCreateOrConnectWithoutEmpresaInput | CampanhaCreateOrConnectWithoutEmpresaInput[]
    upsert?: CampanhaUpsertWithWhereUniqueWithoutEmpresaInput | CampanhaUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: CampanhaCreateManyEmpresaInputEnvelope
    set?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    disconnect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    delete?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    connect?: CampanhaWhereUniqueInput | CampanhaWhereUniqueInput[]
    update?: CampanhaUpdateWithWhereUniqueWithoutEmpresaInput | CampanhaUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: CampanhaUpdateManyWithWhereWithoutEmpresaInput | CampanhaUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: CampanhaScalarWhereInput | CampanhaScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutCampanhasInput = {
    create?: XOR<EmpresaCreateWithoutCampanhasInput, EmpresaUncheckedCreateWithoutCampanhasInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutCampanhasInput
    connect?: EmpresaWhereUniqueInput
  }

  export type TecnicoCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<TecnicoCreateWithoutCampanhaInput, TecnicoUncheckedCreateWithoutCampanhaInput> | TecnicoCreateWithoutCampanhaInput[] | TecnicoUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutCampanhaInput | TecnicoCreateOrConnectWithoutCampanhaInput[]
    createMany?: TecnicoCreateManyCampanhaInputEnvelope
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
  }

  export type ProdutorCampanhaCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutCampanhaInput, ProdutorCampanhaUncheckedCreateWithoutCampanhaInput> | ProdutorCampanhaCreateWithoutCampanhaInput[] | ProdutorCampanhaUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutCampanhaInput | ProdutorCampanhaCreateOrConnectWithoutCampanhaInput[]
    createMany?: ProdutorCampanhaCreateManyCampanhaInputEnvelope
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
  }

  export type TecnicoUncheckedCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<TecnicoCreateWithoutCampanhaInput, TecnicoUncheckedCreateWithoutCampanhaInput> | TecnicoCreateWithoutCampanhaInput[] | TecnicoUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutCampanhaInput | TecnicoCreateOrConnectWithoutCampanhaInput[]
    createMany?: TecnicoCreateManyCampanhaInputEnvelope
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
  }

  export type ProdutorCampanhaUncheckedCreateNestedManyWithoutCampanhaInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutCampanhaInput, ProdutorCampanhaUncheckedCreateWithoutCampanhaInput> | ProdutorCampanhaCreateWithoutCampanhaInput[] | ProdutorCampanhaUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutCampanhaInput | ProdutorCampanhaCreateOrConnectWithoutCampanhaInput[]
    createMany?: ProdutorCampanhaCreateManyCampanhaInputEnvelope
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmpresaUpdateOneRequiredWithoutCampanhasNestedInput = {
    create?: XOR<EmpresaCreateWithoutCampanhasInput, EmpresaUncheckedCreateWithoutCampanhasInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutCampanhasInput
    upsert?: EmpresaUpsertWithoutCampanhasInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutCampanhasInput, EmpresaUpdateWithoutCampanhasInput>, EmpresaUncheckedUpdateWithoutCampanhasInput>
  }

  export type TecnicoUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<TecnicoCreateWithoutCampanhaInput, TecnicoUncheckedCreateWithoutCampanhaInput> | TecnicoCreateWithoutCampanhaInput[] | TecnicoUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutCampanhaInput | TecnicoCreateOrConnectWithoutCampanhaInput[]
    upsert?: TecnicoUpsertWithWhereUniqueWithoutCampanhaInput | TecnicoUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: TecnicoCreateManyCampanhaInputEnvelope
    set?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    disconnect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    delete?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    update?: TecnicoUpdateWithWhereUniqueWithoutCampanhaInput | TecnicoUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: TecnicoUpdateManyWithWhereWithoutCampanhaInput | TecnicoUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
  }

  export type ProdutorCampanhaUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutCampanhaInput, ProdutorCampanhaUncheckedCreateWithoutCampanhaInput> | ProdutorCampanhaCreateWithoutCampanhaInput[] | ProdutorCampanhaUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutCampanhaInput | ProdutorCampanhaCreateOrConnectWithoutCampanhaInput[]
    upsert?: ProdutorCampanhaUpsertWithWhereUniqueWithoutCampanhaInput | ProdutorCampanhaUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: ProdutorCampanhaCreateManyCampanhaInputEnvelope
    set?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    disconnect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    delete?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    update?: ProdutorCampanhaUpdateWithWhereUniqueWithoutCampanhaInput | ProdutorCampanhaUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: ProdutorCampanhaUpdateManyWithWhereWithoutCampanhaInput | ProdutorCampanhaUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: ProdutorCampanhaScalarWhereInput | ProdutorCampanhaScalarWhereInput[]
  }

  export type TecnicoUncheckedUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<TecnicoCreateWithoutCampanhaInput, TecnicoUncheckedCreateWithoutCampanhaInput> | TecnicoCreateWithoutCampanhaInput[] | TecnicoUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: TecnicoCreateOrConnectWithoutCampanhaInput | TecnicoCreateOrConnectWithoutCampanhaInput[]
    upsert?: TecnicoUpsertWithWhereUniqueWithoutCampanhaInput | TecnicoUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: TecnicoCreateManyCampanhaInputEnvelope
    set?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    disconnect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    delete?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    connect?: TecnicoWhereUniqueInput | TecnicoWhereUniqueInput[]
    update?: TecnicoUpdateWithWhereUniqueWithoutCampanhaInput | TecnicoUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: TecnicoUpdateManyWithWhereWithoutCampanhaInput | TecnicoUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
  }

  export type ProdutorCampanhaUncheckedUpdateManyWithoutCampanhaNestedInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutCampanhaInput, ProdutorCampanhaUncheckedCreateWithoutCampanhaInput> | ProdutorCampanhaCreateWithoutCampanhaInput[] | ProdutorCampanhaUncheckedCreateWithoutCampanhaInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutCampanhaInput | ProdutorCampanhaCreateOrConnectWithoutCampanhaInput[]
    upsert?: ProdutorCampanhaUpsertWithWhereUniqueWithoutCampanhaInput | ProdutorCampanhaUpsertWithWhereUniqueWithoutCampanhaInput[]
    createMany?: ProdutorCampanhaCreateManyCampanhaInputEnvelope
    set?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    disconnect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    delete?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    update?: ProdutorCampanhaUpdateWithWhereUniqueWithoutCampanhaInput | ProdutorCampanhaUpdateWithWhereUniqueWithoutCampanhaInput[]
    updateMany?: ProdutorCampanhaUpdateManyWithWhereWithoutCampanhaInput | ProdutorCampanhaUpdateManyWithWhereWithoutCampanhaInput[]
    deleteMany?: ProdutorCampanhaScalarWhereInput | ProdutorCampanhaScalarWhereInput[]
  }

  export type CampanhaCreateNestedOneWithoutTecnicosInput = {
    create?: XOR<CampanhaCreateWithoutTecnicosInput, CampanhaUncheckedCreateWithoutTecnicosInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutTecnicosInput
    connect?: CampanhaWhereUniqueInput
  }

  export type ProdutorCampanhaCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutTecnicoInput, ProdutorCampanhaUncheckedCreateWithoutTecnicoInput> | ProdutorCampanhaCreateWithoutTecnicoInput[] | ProdutorCampanhaUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutTecnicoInput | ProdutorCampanhaCreateOrConnectWithoutTecnicoInput[]
    createMany?: ProdutorCampanhaCreateManyTecnicoInputEnvelope
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
  }

  export type ProdutorCampanhaUncheckedCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutTecnicoInput, ProdutorCampanhaUncheckedCreateWithoutTecnicoInput> | ProdutorCampanhaCreateWithoutTecnicoInput[] | ProdutorCampanhaUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutTecnicoInput | ProdutorCampanhaCreateOrConnectWithoutTecnicoInput[]
    createMany?: ProdutorCampanhaCreateManyTecnicoInputEnvelope
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
  }

  export type CampanhaUpdateOneRequiredWithoutTecnicosNestedInput = {
    create?: XOR<CampanhaCreateWithoutTecnicosInput, CampanhaUncheckedCreateWithoutTecnicosInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutTecnicosInput
    upsert?: CampanhaUpsertWithoutTecnicosInput
    connect?: CampanhaWhereUniqueInput
    update?: XOR<XOR<CampanhaUpdateToOneWithWhereWithoutTecnicosInput, CampanhaUpdateWithoutTecnicosInput>, CampanhaUncheckedUpdateWithoutTecnicosInput>
  }

  export type ProdutorCampanhaUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutTecnicoInput, ProdutorCampanhaUncheckedCreateWithoutTecnicoInput> | ProdutorCampanhaCreateWithoutTecnicoInput[] | ProdutorCampanhaUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutTecnicoInput | ProdutorCampanhaCreateOrConnectWithoutTecnicoInput[]
    upsert?: ProdutorCampanhaUpsertWithWhereUniqueWithoutTecnicoInput | ProdutorCampanhaUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: ProdutorCampanhaCreateManyTecnicoInputEnvelope
    set?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    disconnect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    delete?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    update?: ProdutorCampanhaUpdateWithWhereUniqueWithoutTecnicoInput | ProdutorCampanhaUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: ProdutorCampanhaUpdateManyWithWhereWithoutTecnicoInput | ProdutorCampanhaUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: ProdutorCampanhaScalarWhereInput | ProdutorCampanhaScalarWhereInput[]
  }

  export type ProdutorCampanhaUncheckedUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutTecnicoInput, ProdutorCampanhaUncheckedCreateWithoutTecnicoInput> | ProdutorCampanhaCreateWithoutTecnicoInput[] | ProdutorCampanhaUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutTecnicoInput | ProdutorCampanhaCreateOrConnectWithoutTecnicoInput[]
    upsert?: ProdutorCampanhaUpsertWithWhereUniqueWithoutTecnicoInput | ProdutorCampanhaUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: ProdutorCampanhaCreateManyTecnicoInputEnvelope
    set?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    disconnect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    delete?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    update?: ProdutorCampanhaUpdateWithWhereUniqueWithoutTecnicoInput | ProdutorCampanhaUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: ProdutorCampanhaUpdateManyWithWhereWithoutTecnicoInput | ProdutorCampanhaUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: ProdutorCampanhaScalarWhereInput | ProdutorCampanhaScalarWhereInput[]
  }

  export type ProdutorCampanhaCreateNestedManyWithoutProdutorInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutProdutorInput, ProdutorCampanhaUncheckedCreateWithoutProdutorInput> | ProdutorCampanhaCreateWithoutProdutorInput[] | ProdutorCampanhaUncheckedCreateWithoutProdutorInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutProdutorInput | ProdutorCampanhaCreateOrConnectWithoutProdutorInput[]
    createMany?: ProdutorCampanhaCreateManyProdutorInputEnvelope
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
  }

  export type ProdutorCampanhaUncheckedCreateNestedManyWithoutProdutorInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutProdutorInput, ProdutorCampanhaUncheckedCreateWithoutProdutorInput> | ProdutorCampanhaCreateWithoutProdutorInput[] | ProdutorCampanhaUncheckedCreateWithoutProdutorInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutProdutorInput | ProdutorCampanhaCreateOrConnectWithoutProdutorInput[]
    createMany?: ProdutorCampanhaCreateManyProdutorInputEnvelope
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
  }

  export type ProdutorCampanhaUpdateManyWithoutProdutorNestedInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutProdutorInput, ProdutorCampanhaUncheckedCreateWithoutProdutorInput> | ProdutorCampanhaCreateWithoutProdutorInput[] | ProdutorCampanhaUncheckedCreateWithoutProdutorInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutProdutorInput | ProdutorCampanhaCreateOrConnectWithoutProdutorInput[]
    upsert?: ProdutorCampanhaUpsertWithWhereUniqueWithoutProdutorInput | ProdutorCampanhaUpsertWithWhereUniqueWithoutProdutorInput[]
    createMany?: ProdutorCampanhaCreateManyProdutorInputEnvelope
    set?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    disconnect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    delete?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    update?: ProdutorCampanhaUpdateWithWhereUniqueWithoutProdutorInput | ProdutorCampanhaUpdateWithWhereUniqueWithoutProdutorInput[]
    updateMany?: ProdutorCampanhaUpdateManyWithWhereWithoutProdutorInput | ProdutorCampanhaUpdateManyWithWhereWithoutProdutorInput[]
    deleteMany?: ProdutorCampanhaScalarWhereInput | ProdutorCampanhaScalarWhereInput[]
  }

  export type ProdutorCampanhaUncheckedUpdateManyWithoutProdutorNestedInput = {
    create?: XOR<ProdutorCampanhaCreateWithoutProdutorInput, ProdutorCampanhaUncheckedCreateWithoutProdutorInput> | ProdutorCampanhaCreateWithoutProdutorInput[] | ProdutorCampanhaUncheckedCreateWithoutProdutorInput[]
    connectOrCreate?: ProdutorCampanhaCreateOrConnectWithoutProdutorInput | ProdutorCampanhaCreateOrConnectWithoutProdutorInput[]
    upsert?: ProdutorCampanhaUpsertWithWhereUniqueWithoutProdutorInput | ProdutorCampanhaUpsertWithWhereUniqueWithoutProdutorInput[]
    createMany?: ProdutorCampanhaCreateManyProdutorInputEnvelope
    set?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    disconnect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    delete?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    connect?: ProdutorCampanhaWhereUniqueInput | ProdutorCampanhaWhereUniqueInput[]
    update?: ProdutorCampanhaUpdateWithWhereUniqueWithoutProdutorInput | ProdutorCampanhaUpdateWithWhereUniqueWithoutProdutorInput[]
    updateMany?: ProdutorCampanhaUpdateManyWithWhereWithoutProdutorInput | ProdutorCampanhaUpdateManyWithWhereWithoutProdutorInput[]
    deleteMany?: ProdutorCampanhaScalarWhereInput | ProdutorCampanhaScalarWhereInput[]
  }

  export type ProdutorCreateNestedOneWithoutProdutoresCampanhasInput = {
    create?: XOR<ProdutorCreateWithoutProdutoresCampanhasInput, ProdutorUncheckedCreateWithoutProdutoresCampanhasInput>
    connectOrCreate?: ProdutorCreateOrConnectWithoutProdutoresCampanhasInput
    connect?: ProdutorWhereUniqueInput
  }

  export type CampanhaCreateNestedOneWithoutProdutoresCampanhasInput = {
    create?: XOR<CampanhaCreateWithoutProdutoresCampanhasInput, CampanhaUncheckedCreateWithoutProdutoresCampanhasInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutProdutoresCampanhasInput
    connect?: CampanhaWhereUniqueInput
  }

  export type TecnicoCreateNestedOneWithoutProdutoresCampanhasInput = {
    create?: XOR<TecnicoCreateWithoutProdutoresCampanhasInput, TecnicoUncheckedCreateWithoutProdutoresCampanhasInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutProdutoresCampanhasInput
    connect?: TecnicoWhereUniqueInput
  }

  export type ProdutorUpdateOneRequiredWithoutProdutoresCampanhasNestedInput = {
    create?: XOR<ProdutorCreateWithoutProdutoresCampanhasInput, ProdutorUncheckedCreateWithoutProdutoresCampanhasInput>
    connectOrCreate?: ProdutorCreateOrConnectWithoutProdutoresCampanhasInput
    upsert?: ProdutorUpsertWithoutProdutoresCampanhasInput
    connect?: ProdutorWhereUniqueInput
    update?: XOR<XOR<ProdutorUpdateToOneWithWhereWithoutProdutoresCampanhasInput, ProdutorUpdateWithoutProdutoresCampanhasInput>, ProdutorUncheckedUpdateWithoutProdutoresCampanhasInput>
  }

  export type CampanhaUpdateOneRequiredWithoutProdutoresCampanhasNestedInput = {
    create?: XOR<CampanhaCreateWithoutProdutoresCampanhasInput, CampanhaUncheckedCreateWithoutProdutoresCampanhasInput>
    connectOrCreate?: CampanhaCreateOrConnectWithoutProdutoresCampanhasInput
    upsert?: CampanhaUpsertWithoutProdutoresCampanhasInput
    connect?: CampanhaWhereUniqueInput
    update?: XOR<XOR<CampanhaUpdateToOneWithWhereWithoutProdutoresCampanhasInput, CampanhaUpdateWithoutProdutoresCampanhasInput>, CampanhaUncheckedUpdateWithoutProdutoresCampanhasInput>
  }

  export type TecnicoUpdateOneRequiredWithoutProdutoresCampanhasNestedInput = {
    create?: XOR<TecnicoCreateWithoutProdutoresCampanhasInput, TecnicoUncheckedCreateWithoutProdutoresCampanhasInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutProdutoresCampanhasInput
    upsert?: TecnicoUpsertWithoutProdutoresCampanhasInput
    connect?: TecnicoWhereUniqueInput
    update?: XOR<XOR<TecnicoUpdateToOneWithWhereWithoutProdutoresCampanhasInput, TecnicoUpdateWithoutProdutoresCampanhasInput>, TecnicoUncheckedUpdateWithoutProdutoresCampanhasInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CampanhaCreateWithoutEmpresaInput = {
    nome: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    tecnicos?: TecnicoCreateNestedManyWithoutCampanhaInput
    produtoresCampanhas?: ProdutorCampanhaCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateWithoutEmpresaInput = {
    id?: number
    nome: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    tecnicos?: TecnicoUncheckedCreateNestedManyWithoutCampanhaInput
    produtoresCampanhas?: ProdutorCampanhaUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaCreateOrConnectWithoutEmpresaInput = {
    where: CampanhaWhereUniqueInput
    create: XOR<CampanhaCreateWithoutEmpresaInput, CampanhaUncheckedCreateWithoutEmpresaInput>
  }

  export type CampanhaCreateManyEmpresaInputEnvelope = {
    data: CampanhaCreateManyEmpresaInput | CampanhaCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type CampanhaUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: CampanhaWhereUniqueInput
    update: XOR<CampanhaUpdateWithoutEmpresaInput, CampanhaUncheckedUpdateWithoutEmpresaInput>
    create: XOR<CampanhaCreateWithoutEmpresaInput, CampanhaUncheckedCreateWithoutEmpresaInput>
  }

  export type CampanhaUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: CampanhaWhereUniqueInput
    data: XOR<CampanhaUpdateWithoutEmpresaInput, CampanhaUncheckedUpdateWithoutEmpresaInput>
  }

  export type CampanhaUpdateManyWithWhereWithoutEmpresaInput = {
    where: CampanhaScalarWhereInput
    data: XOR<CampanhaUpdateManyMutationInput, CampanhaUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type CampanhaScalarWhereInput = {
    AND?: CampanhaScalarWhereInput | CampanhaScalarWhereInput[]
    OR?: CampanhaScalarWhereInput[]
    NOT?: CampanhaScalarWhereInput | CampanhaScalarWhereInput[]
    id?: IntFilter<"Campanha"> | number
    nome?: StringFilter<"Campanha"> | string
    empresaId?: IntFilter<"Campanha"> | number
    dataInicio?: DateTimeFilter<"Campanha"> | Date | string
    dataFim?: DateTimeNullableFilter<"Campanha"> | Date | string | null
  }

  export type EmpresaCreateWithoutCampanhasInput = {
    nome: string
    cnpj: string
    telefone?: string | null
    email: string
  }

  export type EmpresaUncheckedCreateWithoutCampanhasInput = {
    id?: number
    nome: string
    cnpj: string
    telefone?: string | null
    email: string
  }

  export type EmpresaCreateOrConnectWithoutCampanhasInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutCampanhasInput, EmpresaUncheckedCreateWithoutCampanhasInput>
  }

  export type TecnicoCreateWithoutCampanhaInput = {
    nome: string
    produtoresCampanhas?: ProdutorCampanhaCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUncheckedCreateWithoutCampanhaInput = {
    id?: number
    nome: string
    produtoresCampanhas?: ProdutorCampanhaUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoCreateOrConnectWithoutCampanhaInput = {
    where: TecnicoWhereUniqueInput
    create: XOR<TecnicoCreateWithoutCampanhaInput, TecnicoUncheckedCreateWithoutCampanhaInput>
  }

  export type TecnicoCreateManyCampanhaInputEnvelope = {
    data: TecnicoCreateManyCampanhaInput | TecnicoCreateManyCampanhaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutorCampanhaCreateWithoutCampanhaInput = {
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
    produtor: ProdutorCreateNestedOneWithoutProdutoresCampanhasInput
    tecnico: TecnicoCreateNestedOneWithoutProdutoresCampanhasInput
  }

  export type ProdutorCampanhaUncheckedCreateWithoutCampanhaInput = {
    id?: number
    produtorId: number
    tecnicoId: number
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
  }

  export type ProdutorCampanhaCreateOrConnectWithoutCampanhaInput = {
    where: ProdutorCampanhaWhereUniqueInput
    create: XOR<ProdutorCampanhaCreateWithoutCampanhaInput, ProdutorCampanhaUncheckedCreateWithoutCampanhaInput>
  }

  export type ProdutorCampanhaCreateManyCampanhaInputEnvelope = {
    data: ProdutorCampanhaCreateManyCampanhaInput | ProdutorCampanhaCreateManyCampanhaInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutCampanhasInput = {
    update: XOR<EmpresaUpdateWithoutCampanhasInput, EmpresaUncheckedUpdateWithoutCampanhasInput>
    create: XOR<EmpresaCreateWithoutCampanhasInput, EmpresaUncheckedCreateWithoutCampanhasInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutCampanhasInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutCampanhasInput, EmpresaUncheckedUpdateWithoutCampanhasInput>
  }

  export type EmpresaUpdateWithoutCampanhasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaUncheckedUpdateWithoutCampanhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type TecnicoUpsertWithWhereUniqueWithoutCampanhaInput = {
    where: TecnicoWhereUniqueInput
    update: XOR<TecnicoUpdateWithoutCampanhaInput, TecnicoUncheckedUpdateWithoutCampanhaInput>
    create: XOR<TecnicoCreateWithoutCampanhaInput, TecnicoUncheckedCreateWithoutCampanhaInput>
  }

  export type TecnicoUpdateWithWhereUniqueWithoutCampanhaInput = {
    where: TecnicoWhereUniqueInput
    data: XOR<TecnicoUpdateWithoutCampanhaInput, TecnicoUncheckedUpdateWithoutCampanhaInput>
  }

  export type TecnicoUpdateManyWithWhereWithoutCampanhaInput = {
    where: TecnicoScalarWhereInput
    data: XOR<TecnicoUpdateManyMutationInput, TecnicoUncheckedUpdateManyWithoutCampanhaInput>
  }

  export type TecnicoScalarWhereInput = {
    AND?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
    OR?: TecnicoScalarWhereInput[]
    NOT?: TecnicoScalarWhereInput | TecnicoScalarWhereInput[]
    id?: IntFilter<"Tecnico"> | number
    nome?: StringFilter<"Tecnico"> | string
    campanhaId?: IntFilter<"Tecnico"> | number
  }

  export type ProdutorCampanhaUpsertWithWhereUniqueWithoutCampanhaInput = {
    where: ProdutorCampanhaWhereUniqueInput
    update: XOR<ProdutorCampanhaUpdateWithoutCampanhaInput, ProdutorCampanhaUncheckedUpdateWithoutCampanhaInput>
    create: XOR<ProdutorCampanhaCreateWithoutCampanhaInput, ProdutorCampanhaUncheckedCreateWithoutCampanhaInput>
  }

  export type ProdutorCampanhaUpdateWithWhereUniqueWithoutCampanhaInput = {
    where: ProdutorCampanhaWhereUniqueInput
    data: XOR<ProdutorCampanhaUpdateWithoutCampanhaInput, ProdutorCampanhaUncheckedUpdateWithoutCampanhaInput>
  }

  export type ProdutorCampanhaUpdateManyWithWhereWithoutCampanhaInput = {
    where: ProdutorCampanhaScalarWhereInput
    data: XOR<ProdutorCampanhaUpdateManyMutationInput, ProdutorCampanhaUncheckedUpdateManyWithoutCampanhaInput>
  }

  export type ProdutorCampanhaScalarWhereInput = {
    AND?: ProdutorCampanhaScalarWhereInput | ProdutorCampanhaScalarWhereInput[]
    OR?: ProdutorCampanhaScalarWhereInput[]
    NOT?: ProdutorCampanhaScalarWhereInput | ProdutorCampanhaScalarWhereInput[]
    id?: IntFilter<"ProdutorCampanha"> | number
    produtorId?: IntFilter<"ProdutorCampanha"> | number
    campanhaId?: IntFilter<"ProdutorCampanha"> | number
    tecnicoId?: IntFilter<"ProdutorCampanha"> | number
    dataRegistro?: DateTimeFilter<"ProdutorCampanha"> | Date | string
    dataTransferencia?: DateTimeNullableFilter<"ProdutorCampanha"> | Date | string | null
  }

  export type CampanhaCreateWithoutTecnicosInput = {
    nome: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    empresa: EmpresaCreateNestedOneWithoutCampanhasInput
    produtoresCampanhas?: ProdutorCampanhaCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateWithoutTecnicosInput = {
    id?: number
    nome: string
    empresaId: number
    dataInicio: Date | string
    dataFim?: Date | string | null
    produtoresCampanhas?: ProdutorCampanhaUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaCreateOrConnectWithoutTecnicosInput = {
    where: CampanhaWhereUniqueInput
    create: XOR<CampanhaCreateWithoutTecnicosInput, CampanhaUncheckedCreateWithoutTecnicosInput>
  }

  export type ProdutorCampanhaCreateWithoutTecnicoInput = {
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
    produtor: ProdutorCreateNestedOneWithoutProdutoresCampanhasInput
    campanha: CampanhaCreateNestedOneWithoutProdutoresCampanhasInput
  }

  export type ProdutorCampanhaUncheckedCreateWithoutTecnicoInput = {
    id?: number
    produtorId: number
    campanhaId: number
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
  }

  export type ProdutorCampanhaCreateOrConnectWithoutTecnicoInput = {
    where: ProdutorCampanhaWhereUniqueInput
    create: XOR<ProdutorCampanhaCreateWithoutTecnicoInput, ProdutorCampanhaUncheckedCreateWithoutTecnicoInput>
  }

  export type ProdutorCampanhaCreateManyTecnicoInputEnvelope = {
    data: ProdutorCampanhaCreateManyTecnicoInput | ProdutorCampanhaCreateManyTecnicoInput[]
    skipDuplicates?: boolean
  }

  export type CampanhaUpsertWithoutTecnicosInput = {
    update: XOR<CampanhaUpdateWithoutTecnicosInput, CampanhaUncheckedUpdateWithoutTecnicosInput>
    create: XOR<CampanhaCreateWithoutTecnicosInput, CampanhaUncheckedCreateWithoutTecnicosInput>
    where?: CampanhaWhereInput
  }

  export type CampanhaUpdateToOneWithWhereWithoutTecnicosInput = {
    where?: CampanhaWhereInput
    data: XOR<CampanhaUpdateWithoutTecnicosInput, CampanhaUncheckedUpdateWithoutTecnicosInput>
  }

  export type CampanhaUpdateWithoutTecnicosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutCampanhasNestedInput
    produtoresCampanhas?: ProdutorCampanhaUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateWithoutTecnicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produtoresCampanhas?: ProdutorCampanhaUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type ProdutorCampanhaUpsertWithWhereUniqueWithoutTecnicoInput = {
    where: ProdutorCampanhaWhereUniqueInput
    update: XOR<ProdutorCampanhaUpdateWithoutTecnicoInput, ProdutorCampanhaUncheckedUpdateWithoutTecnicoInput>
    create: XOR<ProdutorCampanhaCreateWithoutTecnicoInput, ProdutorCampanhaUncheckedCreateWithoutTecnicoInput>
  }

  export type ProdutorCampanhaUpdateWithWhereUniqueWithoutTecnicoInput = {
    where: ProdutorCampanhaWhereUniqueInput
    data: XOR<ProdutorCampanhaUpdateWithoutTecnicoInput, ProdutorCampanhaUncheckedUpdateWithoutTecnicoInput>
  }

  export type ProdutorCampanhaUpdateManyWithWhereWithoutTecnicoInput = {
    where: ProdutorCampanhaScalarWhereInput
    data: XOR<ProdutorCampanhaUpdateManyMutationInput, ProdutorCampanhaUncheckedUpdateManyWithoutTecnicoInput>
  }

  export type ProdutorCampanhaCreateWithoutProdutorInput = {
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
    campanha: CampanhaCreateNestedOneWithoutProdutoresCampanhasInput
    tecnico: TecnicoCreateNestedOneWithoutProdutoresCampanhasInput
  }

  export type ProdutorCampanhaUncheckedCreateWithoutProdutorInput = {
    id?: number
    campanhaId: number
    tecnicoId: number
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
  }

  export type ProdutorCampanhaCreateOrConnectWithoutProdutorInput = {
    where: ProdutorCampanhaWhereUniqueInput
    create: XOR<ProdutorCampanhaCreateWithoutProdutorInput, ProdutorCampanhaUncheckedCreateWithoutProdutorInput>
  }

  export type ProdutorCampanhaCreateManyProdutorInputEnvelope = {
    data: ProdutorCampanhaCreateManyProdutorInput | ProdutorCampanhaCreateManyProdutorInput[]
    skipDuplicates?: boolean
  }

  export type ProdutorCampanhaUpsertWithWhereUniqueWithoutProdutorInput = {
    where: ProdutorCampanhaWhereUniqueInput
    update: XOR<ProdutorCampanhaUpdateWithoutProdutorInput, ProdutorCampanhaUncheckedUpdateWithoutProdutorInput>
    create: XOR<ProdutorCampanhaCreateWithoutProdutorInput, ProdutorCampanhaUncheckedCreateWithoutProdutorInput>
  }

  export type ProdutorCampanhaUpdateWithWhereUniqueWithoutProdutorInput = {
    where: ProdutorCampanhaWhereUniqueInput
    data: XOR<ProdutorCampanhaUpdateWithoutProdutorInput, ProdutorCampanhaUncheckedUpdateWithoutProdutorInput>
  }

  export type ProdutorCampanhaUpdateManyWithWhereWithoutProdutorInput = {
    where: ProdutorCampanhaScalarWhereInput
    data: XOR<ProdutorCampanhaUpdateManyMutationInput, ProdutorCampanhaUncheckedUpdateManyWithoutProdutorInput>
  }

  export type ProdutorCreateWithoutProdutoresCampanhasInput = {
    nome: string
    localizacao: string
  }

  export type ProdutorUncheckedCreateWithoutProdutoresCampanhasInput = {
    id?: number
    nome: string
    localizacao: string
  }

  export type ProdutorCreateOrConnectWithoutProdutoresCampanhasInput = {
    where: ProdutorWhereUniqueInput
    create: XOR<ProdutorCreateWithoutProdutoresCampanhasInput, ProdutorUncheckedCreateWithoutProdutoresCampanhasInput>
  }

  export type CampanhaCreateWithoutProdutoresCampanhasInput = {
    nome: string
    dataInicio: Date | string
    dataFim?: Date | string | null
    empresa: EmpresaCreateNestedOneWithoutCampanhasInput
    tecnicos?: TecnicoCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaUncheckedCreateWithoutProdutoresCampanhasInput = {
    id?: number
    nome: string
    empresaId: number
    dataInicio: Date | string
    dataFim?: Date | string | null
    tecnicos?: TecnicoUncheckedCreateNestedManyWithoutCampanhaInput
  }

  export type CampanhaCreateOrConnectWithoutProdutoresCampanhasInput = {
    where: CampanhaWhereUniqueInput
    create: XOR<CampanhaCreateWithoutProdutoresCampanhasInput, CampanhaUncheckedCreateWithoutProdutoresCampanhasInput>
  }

  export type TecnicoCreateWithoutProdutoresCampanhasInput = {
    nome: string
    campanha: CampanhaCreateNestedOneWithoutTecnicosInput
  }

  export type TecnicoUncheckedCreateWithoutProdutoresCampanhasInput = {
    id?: number
    nome: string
    campanhaId: number
  }

  export type TecnicoCreateOrConnectWithoutProdutoresCampanhasInput = {
    where: TecnicoWhereUniqueInput
    create: XOR<TecnicoCreateWithoutProdutoresCampanhasInput, TecnicoUncheckedCreateWithoutProdutoresCampanhasInput>
  }

  export type ProdutorUpsertWithoutProdutoresCampanhasInput = {
    update: XOR<ProdutorUpdateWithoutProdutoresCampanhasInput, ProdutorUncheckedUpdateWithoutProdutoresCampanhasInput>
    create: XOR<ProdutorCreateWithoutProdutoresCampanhasInput, ProdutorUncheckedCreateWithoutProdutoresCampanhasInput>
    where?: ProdutorWhereInput
  }

  export type ProdutorUpdateToOneWithWhereWithoutProdutoresCampanhasInput = {
    where?: ProdutorWhereInput
    data: XOR<ProdutorUpdateWithoutProdutoresCampanhasInput, ProdutorUncheckedUpdateWithoutProdutoresCampanhasInput>
  }

  export type ProdutorUpdateWithoutProdutoresCampanhasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutorUncheckedUpdateWithoutProdutoresCampanhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type CampanhaUpsertWithoutProdutoresCampanhasInput = {
    update: XOR<CampanhaUpdateWithoutProdutoresCampanhasInput, CampanhaUncheckedUpdateWithoutProdutoresCampanhasInput>
    create: XOR<CampanhaCreateWithoutProdutoresCampanhasInput, CampanhaUncheckedCreateWithoutProdutoresCampanhasInput>
    where?: CampanhaWhereInput
  }

  export type CampanhaUpdateToOneWithWhereWithoutProdutoresCampanhasInput = {
    where?: CampanhaWhereInput
    data: XOR<CampanhaUpdateWithoutProdutoresCampanhasInput, CampanhaUncheckedUpdateWithoutProdutoresCampanhasInput>
  }

  export type CampanhaUpdateWithoutProdutoresCampanhasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutCampanhasNestedInput
    tecnicos?: TecnicoUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateWithoutProdutoresCampanhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: IntFieldUpdateOperationsInput | number
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnicos?: TecnicoUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type TecnicoUpsertWithoutProdutoresCampanhasInput = {
    update: XOR<TecnicoUpdateWithoutProdutoresCampanhasInput, TecnicoUncheckedUpdateWithoutProdutoresCampanhasInput>
    create: XOR<TecnicoCreateWithoutProdutoresCampanhasInput, TecnicoUncheckedCreateWithoutProdutoresCampanhasInput>
    where?: TecnicoWhereInput
  }

  export type TecnicoUpdateToOneWithWhereWithoutProdutoresCampanhasInput = {
    where?: TecnicoWhereInput
    data: XOR<TecnicoUpdateWithoutProdutoresCampanhasInput, TecnicoUncheckedUpdateWithoutProdutoresCampanhasInput>
  }

  export type TecnicoUpdateWithoutProdutoresCampanhasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    campanha?: CampanhaUpdateOneRequiredWithoutTecnicosNestedInput
  }

  export type TecnicoUncheckedUpdateWithoutProdutoresCampanhasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    campanhaId?: IntFieldUpdateOperationsInput | number
  }

  export type CampanhaCreateManyEmpresaInput = {
    id?: number
    nome: string
    dataInicio: Date | string
    dataFim?: Date | string | null
  }

  export type CampanhaUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnicos?: TecnicoUpdateManyWithoutCampanhaNestedInput
    produtoresCampanhas?: ProdutorCampanhaUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tecnicos?: TecnicoUncheckedUpdateManyWithoutCampanhaNestedInput
    produtoresCampanhas?: ProdutorCampanhaUncheckedUpdateManyWithoutCampanhaNestedInput
  }

  export type CampanhaUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TecnicoCreateManyCampanhaInput = {
    id?: number
    nome: string
  }

  export type ProdutorCampanhaCreateManyCampanhaInput = {
    id?: number
    produtorId: number
    tecnicoId: number
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
  }

  export type TecnicoUpdateWithoutCampanhaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    produtoresCampanhas?: ProdutorCampanhaUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateWithoutCampanhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    produtoresCampanhas?: ProdutorCampanhaUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateManyWithoutCampanhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutorCampanhaUpdateWithoutCampanhaInput = {
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produtor?: ProdutorUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
    tecnico?: TecnicoUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
  }

  export type ProdutorCampanhaUncheckedUpdateWithoutCampanhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtorId?: IntFieldUpdateOperationsInput | number
    tecnicoId?: IntFieldUpdateOperationsInput | number
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutorCampanhaUncheckedUpdateManyWithoutCampanhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtorId?: IntFieldUpdateOperationsInput | number
    tecnicoId?: IntFieldUpdateOperationsInput | number
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutorCampanhaCreateManyTecnicoInput = {
    id?: number
    produtorId: number
    campanhaId: number
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
  }

  export type ProdutorCampanhaUpdateWithoutTecnicoInput = {
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produtor?: ProdutorUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
    campanha?: CampanhaUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
  }

  export type ProdutorCampanhaUncheckedUpdateWithoutTecnicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtorId?: IntFieldUpdateOperationsInput | number
    campanhaId?: IntFieldUpdateOperationsInput | number
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutorCampanhaUncheckedUpdateManyWithoutTecnicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtorId?: IntFieldUpdateOperationsInput | number
    campanhaId?: IntFieldUpdateOperationsInput | number
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutorCampanhaCreateManyProdutorInput = {
    id?: number
    campanhaId: number
    tecnicoId: number
    dataRegistro?: Date | string
    dataTransferencia?: Date | string | null
  }

  export type ProdutorCampanhaUpdateWithoutProdutorInput = {
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campanha?: CampanhaUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
    tecnico?: TecnicoUpdateOneRequiredWithoutProdutoresCampanhasNestedInput
  }

  export type ProdutorCampanhaUncheckedUpdateWithoutProdutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    campanhaId?: IntFieldUpdateOperationsInput | number
    tecnicoId?: IntFieldUpdateOperationsInput | number
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutorCampanhaUncheckedUpdateManyWithoutProdutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    campanhaId?: IntFieldUpdateOperationsInput | number
    tecnicoId?: IntFieldUpdateOperationsInput | number
    dataRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataTransferencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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