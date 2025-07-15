
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
 * Model Proyecto
 * 
 */
export type Proyecto = $Result.DefaultSelection<Prisma.$ProyectoPayload>
/**
 * Model Archivo
 * 
 */
export type Archivo = $Result.DefaultSelection<Prisma.$ArchivoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Proyectos
 * const proyectos = await prisma.proyecto.findMany()
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
   * // Fetch zero or more Proyectos
   * const proyectos = await prisma.proyecto.findMany()
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
   * `prisma.proyecto`: Exposes CRUD operations for the **Proyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proyectos
    * const proyectos = await prisma.proyecto.findMany()
    * ```
    */
  get proyecto(): Prisma.ProyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archivo`: Exposes CRUD operations for the **Archivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archivos
    * const archivos = await prisma.archivo.findMany()
    * ```
    */
  get archivo(): Prisma.ArchivoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    Proyecto: 'Proyecto',
    Archivo: 'Archivo'
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
      modelProps: "proyecto" | "archivo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Proyecto: {
        payload: Prisma.$ProyectoPayload<ExtArgs>
        fields: Prisma.ProyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          findFirst: {
            args: Prisma.ProyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          findMany: {
            args: Prisma.ProyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>[]
          }
          create: {
            args: Prisma.ProyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          createMany: {
            args: Prisma.ProyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          update: {
            args: Prisma.ProyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          deleteMany: {
            args: Prisma.ProyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProyectoPayload>
          }
          aggregate: {
            args: Prisma.ProyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProyecto>
          }
          groupBy: {
            args: Prisma.ProyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProyectoCountArgs<ExtArgs>
            result: $Utils.Optional<ProyectoCountAggregateOutputType> | number
          }
        }
      }
      Archivo: {
        payload: Prisma.$ArchivoPayload<ExtArgs>
        fields: Prisma.ArchivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          findFirst: {
            args: Prisma.ArchivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          findMany: {
            args: Prisma.ArchivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>[]
          }
          create: {
            args: Prisma.ArchivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          createMany: {
            args: Prisma.ArchivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArchivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          update: {
            args: Prisma.ArchivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          deleteMany: {
            args: Prisma.ArchivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArchivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivoPayload>
          }
          aggregate: {
            args: Prisma.ArchivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivo>
          }
          groupBy: {
            args: Prisma.ArchivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchivoCountArgs<ExtArgs>
            result: $Utils.Optional<ArchivoCountAggregateOutputType> | number
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
    proyecto?: ProyectoOmit
    archivo?: ArchivoOmit
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
   * Count Type ProyectoCountOutputType
   */

  export type ProyectoCountOutputType = {
    archivos: number
  }

  export type ProyectoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivos?: boolean | ProyectoCountOutputTypeCountArchivosArgs
  }

  // Custom InputTypes
  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProyectoCountOutputType
     */
    select?: ProyectoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Proyecto
   */

  export type AggregateProyecto = {
    _count: ProyectoCountAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  export type ProyectoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type ProyectoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type ProyectoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    fechaCreacion: number
    fechaActualizacion: number
    _all: number
  }


  export type ProyectoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type ProyectoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type ProyectoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    _all?: true
  }

  export type ProyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proyecto to aggregate.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proyectos
    **/
    _count?: true | ProyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProyectoMaxAggregateInputType
  }

  export type GetProyectoAggregateType<T extends ProyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateProyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProyecto[P]>
      : GetScalarType<T[P], AggregateProyecto[P]>
  }




  export type ProyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProyectoWhereInput
    orderBy?: ProyectoOrderByWithAggregationInput | ProyectoOrderByWithAggregationInput[]
    by: ProyectoScalarFieldEnum[] | ProyectoScalarFieldEnum
    having?: ProyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProyectoCountAggregateInputType | true
    _min?: ProyectoMinAggregateInputType
    _max?: ProyectoMaxAggregateInputType
  }

  export type ProyectoGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    fechaCreacion: Date
    fechaActualizacion: Date
    _count: ProyectoCountAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  type GetProyectoGroupByPayload<T extends ProyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
            : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
        }
      >
    >


  export type ProyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    archivos?: boolean | Proyecto$archivosArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyecto"]>



  export type ProyectoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
  }

  export type ProyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "fechaCreacion" | "fechaActualizacion", ExtArgs["result"]["proyecto"]>
  export type ProyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivos?: boolean | Proyecto$archivosArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proyecto"
    objects: {
      archivos: Prisma.$ArchivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      fechaCreacion: Date
      fechaActualizacion: Date
    }, ExtArgs["result"]["proyecto"]>
    composites: {}
  }

  type ProyectoGetPayload<S extends boolean | null | undefined | ProyectoDefaultArgs> = $Result.GetResult<Prisma.$ProyectoPayload, S>

  type ProyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProyectoCountAggregateInputType | true
    }

  export interface ProyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proyecto'], meta: { name: 'Proyecto' } }
    /**
     * Find zero or one Proyecto that matches the filter.
     * @param {ProyectoFindUniqueArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProyectoFindUniqueArgs>(args: SelectSubset<T, ProyectoFindUniqueArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProyectoFindUniqueOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindFirstArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProyectoFindFirstArgs>(args?: SelectSubset<T, ProyectoFindFirstArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindFirstOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proyectos
     * const proyectos = await prisma.proyecto.findMany()
     * 
     * // Get first 10 Proyectos
     * const proyectos = await prisma.proyecto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proyectoWithIdOnly = await prisma.proyecto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProyectoFindManyArgs>(args?: SelectSubset<T, ProyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proyecto.
     * @param {ProyectoCreateArgs} args - Arguments to create a Proyecto.
     * @example
     * // Create one Proyecto
     * const Proyecto = await prisma.proyecto.create({
     *   data: {
     *     // ... data to create a Proyecto
     *   }
     * })
     * 
     */
    create<T extends ProyectoCreateArgs>(args: SelectSubset<T, ProyectoCreateArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proyectos.
     * @param {ProyectoCreateManyArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProyectoCreateManyArgs>(args?: SelectSubset<T, ProyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proyecto.
     * @param {ProyectoDeleteArgs} args - Arguments to delete one Proyecto.
     * @example
     * // Delete one Proyecto
     * const Proyecto = await prisma.proyecto.delete({
     *   where: {
     *     // ... filter to delete one Proyecto
     *   }
     * })
     * 
     */
    delete<T extends ProyectoDeleteArgs>(args: SelectSubset<T, ProyectoDeleteArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proyecto.
     * @param {ProyectoUpdateArgs} args - Arguments to update one Proyecto.
     * @example
     * // Update one Proyecto
     * const proyecto = await prisma.proyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProyectoUpdateArgs>(args: SelectSubset<T, ProyectoUpdateArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proyectos.
     * @param {ProyectoDeleteManyArgs} args - Arguments to filter Proyectos to delete.
     * @example
     * // Delete a few Proyectos
     * const { count } = await prisma.proyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProyectoDeleteManyArgs>(args?: SelectSubset<T, ProyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProyectoUpdateManyArgs>(args: SelectSubset<T, ProyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proyecto.
     * @param {ProyectoUpsertArgs} args - Arguments to update or create a Proyecto.
     * @example
     * // Update or create a Proyecto
     * const proyecto = await prisma.proyecto.upsert({
     *   create: {
     *     // ... data to create a Proyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proyecto we want to update
     *   }
     * })
     */
    upsert<T extends ProyectoUpsertArgs>(args: SelectSubset<T, ProyectoUpsertArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoCountArgs} args - Arguments to filter Proyectos to count.
     * @example
     * // Count the number of Proyectos
     * const count = await prisma.proyecto.count({
     *   where: {
     *     // ... the filter for the Proyectos we want to count
     *   }
     * })
    **/
    count<T extends ProyectoCountArgs>(
      args?: Subset<T, ProyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProyectoAggregateArgs>(args: Subset<T, ProyectoAggregateArgs>): Prisma.PrismaPromise<GetProyectoAggregateType<T>>

    /**
     * Group by Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoGroupByArgs} args - Group by arguments.
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
      T extends ProyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProyectoGroupByArgs['orderBy'] }
        : { orderBy?: ProyectoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proyecto model
   */
  readonly fields: ProyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    archivos<T extends Proyecto$archivosArgs<ExtArgs> = {}>(args?: Subset<T, Proyecto$archivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Proyecto model
   */
  interface ProyectoFieldRefs {
    readonly id: FieldRef<"Proyecto", 'String'>
    readonly nombre: FieldRef<"Proyecto", 'String'>
    readonly descripcion: FieldRef<"Proyecto", 'String'>
    readonly fechaCreacion: FieldRef<"Proyecto", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Proyecto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proyecto findUnique
   */
  export type ProyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto findUniqueOrThrow
   */
  export type ProyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto findFirst
   */
  export type ProyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto findFirstOrThrow
   */
  export type ProyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyecto to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto findMany
   */
  export type ProyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter, which Proyectos to fetch.
     */
    where?: ProyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proyectos to fetch.
     */
    orderBy?: ProyectoOrderByWithRelationInput | ProyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proyectos.
     */
    cursor?: ProyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proyectos.
     */
    skip?: number
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * Proyecto create
   */
  export type ProyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a Proyecto.
     */
    data: XOR<ProyectoCreateInput, ProyectoUncheckedCreateInput>
  }

  /**
   * Proyecto createMany
   */
  export type ProyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proyectos.
     */
    data: ProyectoCreateManyInput | ProyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proyecto update
   */
  export type ProyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a Proyecto.
     */
    data: XOR<ProyectoUpdateInput, ProyectoUncheckedUpdateInput>
    /**
     * Choose, which Proyecto to update.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto updateMany
   */
  export type ProyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proyectos.
     */
    data: XOR<ProyectoUpdateManyMutationInput, ProyectoUncheckedUpdateManyInput>
    /**
     * Filter which Proyectos to update
     */
    where?: ProyectoWhereInput
    /**
     * Limit how many Proyectos to update.
     */
    limit?: number
  }

  /**
   * Proyecto upsert
   */
  export type ProyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the Proyecto to update in case it exists.
     */
    where: ProyectoWhereUniqueInput
    /**
     * In case the Proyecto found by the `where` argument doesn't exist, create a new Proyecto with this data.
     */
    create: XOR<ProyectoCreateInput, ProyectoUncheckedCreateInput>
    /**
     * In case the Proyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProyectoUpdateInput, ProyectoUncheckedUpdateInput>
  }

  /**
   * Proyecto delete
   */
  export type ProyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    /**
     * Filter which Proyecto to delete.
     */
    where: ProyectoWhereUniqueInput
  }

  /**
   * Proyecto deleteMany
   */
  export type ProyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proyectos to delete
     */
    where?: ProyectoWhereInput
    /**
     * Limit how many Proyectos to delete.
     */
    limit?: number
  }

  /**
   * Proyecto.archivos
   */
  export type Proyecto$archivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    where?: ArchivoWhereInput
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    cursor?: ArchivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Proyecto without action
   */
  export type ProyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
  }


  /**
   * Model Archivo
   */

  export type AggregateArchivo = {
    _count: ArchivoCountAggregateOutputType | null
    _avg: ArchivoAvgAggregateOutputType | null
    _sum: ArchivoSumAggregateOutputType | null
    _min: ArchivoMinAggregateOutputType | null
    _max: ArchivoMaxAggregateOutputType | null
  }

  export type ArchivoAvgAggregateOutputType = {
    tamano: number | null
  }

  export type ArchivoSumAggregateOutputType = {
    tamano: number | null
  }

  export type ArchivoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    ruta: string | null
    tipo: string | null
    tamano: number | null
    proyectoid: string | null
  }

  export type ArchivoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    ruta: string | null
    tipo: string | null
    tamano: number | null
    proyectoid: string | null
  }

  export type ArchivoCountAggregateOutputType = {
    id: number
    nombre: number
    ruta: number
    tipo: number
    tamano: number
    proyectoid: number
    _all: number
  }


  export type ArchivoAvgAggregateInputType = {
    tamano?: true
  }

  export type ArchivoSumAggregateInputType = {
    tamano?: true
  }

  export type ArchivoMinAggregateInputType = {
    id?: true
    nombre?: true
    ruta?: true
    tipo?: true
    tamano?: true
    proyectoid?: true
  }

  export type ArchivoMaxAggregateInputType = {
    id?: true
    nombre?: true
    ruta?: true
    tipo?: true
    tamano?: true
    proyectoid?: true
  }

  export type ArchivoCountAggregateInputType = {
    id?: true
    nombre?: true
    ruta?: true
    tipo?: true
    tamano?: true
    proyectoid?: true
    _all?: true
  }

  export type ArchivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archivo to aggregate.
     */
    where?: ArchivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Archivos
    **/
    _count?: true | ArchivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivoMaxAggregateInputType
  }

  export type GetArchivoAggregateType<T extends ArchivoAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivo[P]>
      : GetScalarType<T[P], AggregateArchivo[P]>
  }




  export type ArchivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivoWhereInput
    orderBy?: ArchivoOrderByWithAggregationInput | ArchivoOrderByWithAggregationInput[]
    by: ArchivoScalarFieldEnum[] | ArchivoScalarFieldEnum
    having?: ArchivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivoCountAggregateInputType | true
    _avg?: ArchivoAvgAggregateInputType
    _sum?: ArchivoSumAggregateInputType
    _min?: ArchivoMinAggregateInputType
    _max?: ArchivoMaxAggregateInputType
  }

  export type ArchivoGroupByOutputType = {
    id: string
    nombre: string
    ruta: string
    tipo: string | null
    tamano: number | null
    proyectoid: string | null
    _count: ArchivoCountAggregateOutputType | null
    _avg: ArchivoAvgAggregateOutputType | null
    _sum: ArchivoSumAggregateOutputType | null
    _min: ArchivoMinAggregateOutputType | null
    _max: ArchivoMaxAggregateOutputType | null
  }

  type GetArchivoGroupByPayload<T extends ArchivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivoGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivoGroupByOutputType[P]>
        }
      >
    >


  export type ArchivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ruta?: boolean
    tipo?: boolean
    tamano?: boolean
    proyectoid?: boolean
    proyecto?: boolean | Archivo$proyectoArgs<ExtArgs>
  }, ExtArgs["result"]["archivo"]>



  export type ArchivoSelectScalar = {
    id?: boolean
    nombre?: boolean
    ruta?: boolean
    tipo?: boolean
    tamano?: boolean
    proyectoid?: boolean
  }

  export type ArchivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "ruta" | "tipo" | "tamano" | "proyectoid", ExtArgs["result"]["archivo"]>
  export type ArchivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | Archivo$proyectoArgs<ExtArgs>
  }

  export type $ArchivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Archivo"
    objects: {
      proyecto: Prisma.$ProyectoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      ruta: string
      tipo: string | null
      tamano: number | null
      proyectoid: string | null
    }, ExtArgs["result"]["archivo"]>
    composites: {}
  }

  type ArchivoGetPayload<S extends boolean | null | undefined | ArchivoDefaultArgs> = $Result.GetResult<Prisma.$ArchivoPayload, S>

  type ArchivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchivoCountAggregateInputType | true
    }

  export interface ArchivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Archivo'], meta: { name: 'Archivo' } }
    /**
     * Find zero or one Archivo that matches the filter.
     * @param {ArchivoFindUniqueArgs} args - Arguments to find a Archivo
     * @example
     * // Get one Archivo
     * const archivo = await prisma.archivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchivoFindUniqueArgs>(args: SelectSubset<T, ArchivoFindUniqueArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchivoFindUniqueOrThrowArgs} args - Arguments to find a Archivo
     * @example
     * // Get one Archivo
     * const archivo = await prisma.archivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchivoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoFindFirstArgs} args - Arguments to find a Archivo
     * @example
     * // Get one Archivo
     * const archivo = await prisma.archivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchivoFindFirstArgs>(args?: SelectSubset<T, ArchivoFindFirstArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoFindFirstOrThrowArgs} args - Arguments to find a Archivo
     * @example
     * // Get one Archivo
     * const archivo = await prisma.archivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchivoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archivos
     * const archivos = await prisma.archivo.findMany()
     * 
     * // Get first 10 Archivos
     * const archivos = await prisma.archivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archivoWithIdOnly = await prisma.archivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchivoFindManyArgs>(args?: SelectSubset<T, ArchivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archivo.
     * @param {ArchivoCreateArgs} args - Arguments to create a Archivo.
     * @example
     * // Create one Archivo
     * const Archivo = await prisma.archivo.create({
     *   data: {
     *     // ... data to create a Archivo
     *   }
     * })
     * 
     */
    create<T extends ArchivoCreateArgs>(args: SelectSubset<T, ArchivoCreateArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archivos.
     * @param {ArchivoCreateManyArgs} args - Arguments to create many Archivos.
     * @example
     * // Create many Archivos
     * const archivo = await prisma.archivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchivoCreateManyArgs>(args?: SelectSubset<T, ArchivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Archivo.
     * @param {ArchivoDeleteArgs} args - Arguments to delete one Archivo.
     * @example
     * // Delete one Archivo
     * const Archivo = await prisma.archivo.delete({
     *   where: {
     *     // ... filter to delete one Archivo
     *   }
     * })
     * 
     */
    delete<T extends ArchivoDeleteArgs>(args: SelectSubset<T, ArchivoDeleteArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archivo.
     * @param {ArchivoUpdateArgs} args - Arguments to update one Archivo.
     * @example
     * // Update one Archivo
     * const archivo = await prisma.archivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchivoUpdateArgs>(args: SelectSubset<T, ArchivoUpdateArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archivos.
     * @param {ArchivoDeleteManyArgs} args - Arguments to filter Archivos to delete.
     * @example
     * // Delete a few Archivos
     * const { count } = await prisma.archivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchivoDeleteManyArgs>(args?: SelectSubset<T, ArchivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archivos
     * const archivo = await prisma.archivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchivoUpdateManyArgs>(args: SelectSubset<T, ArchivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Archivo.
     * @param {ArchivoUpsertArgs} args - Arguments to update or create a Archivo.
     * @example
     * // Update or create a Archivo
     * const archivo = await prisma.archivo.upsert({
     *   create: {
     *     // ... data to create a Archivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archivo we want to update
     *   }
     * })
     */
    upsert<T extends ArchivoUpsertArgs>(args: SelectSubset<T, ArchivoUpsertArgs<ExtArgs>>): Prisma__ArchivoClient<$Result.GetResult<Prisma.$ArchivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoCountArgs} args - Arguments to filter Archivos to count.
     * @example
     * // Count the number of Archivos
     * const count = await prisma.archivo.count({
     *   where: {
     *     // ... the filter for the Archivos we want to count
     *   }
     * })
    **/
    count<T extends ArchivoCountArgs>(
      args?: Subset<T, ArchivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArchivoAggregateArgs>(args: Subset<T, ArchivoAggregateArgs>): Prisma.PrismaPromise<GetArchivoAggregateType<T>>

    /**
     * Group by Archivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivoGroupByArgs} args - Group by arguments.
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
      T extends ArchivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchivoGroupByArgs['orderBy'] }
        : { orderBy?: ArchivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArchivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Archivo model
   */
  readonly fields: ArchivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Archivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyecto<T extends Archivo$proyectoArgs<ExtArgs> = {}>(args?: Subset<T, Archivo$proyectoArgs<ExtArgs>>): Prisma__ProyectoClient<$Result.GetResult<Prisma.$ProyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Archivo model
   */
  interface ArchivoFieldRefs {
    readonly id: FieldRef<"Archivo", 'String'>
    readonly nombre: FieldRef<"Archivo", 'String'>
    readonly ruta: FieldRef<"Archivo", 'String'>
    readonly tipo: FieldRef<"Archivo", 'String'>
    readonly tamano: FieldRef<"Archivo", 'Int'>
    readonly proyectoid: FieldRef<"Archivo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Archivo findUnique
   */
  export type ArchivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivo to fetch.
     */
    where: ArchivoWhereUniqueInput
  }

  /**
   * Archivo findUniqueOrThrow
   */
  export type ArchivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivo to fetch.
     */
    where: ArchivoWhereUniqueInput
  }

  /**
   * Archivo findFirst
   */
  export type ArchivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivo to fetch.
     */
    where?: ArchivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archivos.
     */
    cursor?: ArchivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archivos.
     */
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Archivo findFirstOrThrow
   */
  export type ArchivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivo to fetch.
     */
    where?: ArchivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archivos.
     */
    cursor?: ArchivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archivos.
     */
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Archivo findMany
   */
  export type ArchivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter, which Archivos to fetch.
     */
    where?: ArchivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivoOrderByWithRelationInput | ArchivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Archivos.
     */
    cursor?: ArchivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    distinct?: ArchivoScalarFieldEnum | ArchivoScalarFieldEnum[]
  }

  /**
   * Archivo create
   */
  export type ArchivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Archivo.
     */
    data: XOR<ArchivoCreateInput, ArchivoUncheckedCreateInput>
  }

  /**
   * Archivo createMany
   */
  export type ArchivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Archivos.
     */
    data: ArchivoCreateManyInput | ArchivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Archivo update
   */
  export type ArchivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Archivo.
     */
    data: XOR<ArchivoUpdateInput, ArchivoUncheckedUpdateInput>
    /**
     * Choose, which Archivo to update.
     */
    where: ArchivoWhereUniqueInput
  }

  /**
   * Archivo updateMany
   */
  export type ArchivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Archivos.
     */
    data: XOR<ArchivoUpdateManyMutationInput, ArchivoUncheckedUpdateManyInput>
    /**
     * Filter which Archivos to update
     */
    where?: ArchivoWhereInput
    /**
     * Limit how many Archivos to update.
     */
    limit?: number
  }

  /**
   * Archivo upsert
   */
  export type ArchivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Archivo to update in case it exists.
     */
    where: ArchivoWhereUniqueInput
    /**
     * In case the Archivo found by the `where` argument doesn't exist, create a new Archivo with this data.
     */
    create: XOR<ArchivoCreateInput, ArchivoUncheckedCreateInput>
    /**
     * In case the Archivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchivoUpdateInput, ArchivoUncheckedUpdateInput>
  }

  /**
   * Archivo delete
   */
  export type ArchivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
    /**
     * Filter which Archivo to delete.
     */
    where: ArchivoWhereUniqueInput
  }

  /**
   * Archivo deleteMany
   */
  export type ArchivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archivos to delete
     */
    where?: ArchivoWhereInput
    /**
     * Limit how many Archivos to delete.
     */
    limit?: number
  }

  /**
   * Archivo.proyecto
   */
  export type Archivo$proyectoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proyecto
     */
    select?: ProyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proyecto
     */
    omit?: ProyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProyectoInclude<ExtArgs> | null
    where?: ProyectoWhereInput
  }

  /**
   * Archivo without action
   */
  export type ArchivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivo
     */
    select?: ArchivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archivo
     */
    omit?: ArchivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchivoInclude<ExtArgs> | null
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


  export const ProyectoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fechaCreacion: 'fechaCreacion',
    fechaActualizacion: 'fechaActualizacion'
  };

  export type ProyectoScalarFieldEnum = (typeof ProyectoScalarFieldEnum)[keyof typeof ProyectoScalarFieldEnum]


  export const ArchivoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    ruta: 'ruta',
    tipo: 'tipo',
    tamano: 'tamano',
    proyectoid: 'proyectoid'
  };

  export type ArchivoScalarFieldEnum = (typeof ArchivoScalarFieldEnum)[keyof typeof ArchivoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProyectoOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type ProyectoOrderByRelevanceFieldEnum = (typeof ProyectoOrderByRelevanceFieldEnum)[keyof typeof ProyectoOrderByRelevanceFieldEnum]


  export const ArchivoOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    ruta: 'ruta',
    tipo: 'tipo',
    proyectoid: 'proyectoid'
  };

  export type ArchivoOrderByRelevanceFieldEnum = (typeof ArchivoOrderByRelevanceFieldEnum)[keyof typeof ArchivoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProyectoWhereInput = {
    AND?: ProyectoWhereInput | ProyectoWhereInput[]
    OR?: ProyectoWhereInput[]
    NOT?: ProyectoWhereInput | ProyectoWhereInput[]
    id?: StringFilter<"Proyecto"> | string
    nombre?: StringFilter<"Proyecto"> | string
    descripcion?: StringNullableFilter<"Proyecto"> | string | null
    fechaCreacion?: DateTimeFilter<"Proyecto"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Proyecto"> | Date | string
    archivos?: ArchivoListRelationFilter
  }

  export type ProyectoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    archivos?: ArchivoOrderByRelationAggregateInput
    _relevance?: ProyectoOrderByRelevanceInput
  }

  export type ProyectoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProyectoWhereInput | ProyectoWhereInput[]
    OR?: ProyectoWhereInput[]
    NOT?: ProyectoWhereInput | ProyectoWhereInput[]
    nombre?: StringFilter<"Proyecto"> | string
    descripcion?: StringNullableFilter<"Proyecto"> | string | null
    fechaCreacion?: DateTimeFilter<"Proyecto"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Proyecto"> | Date | string
    archivos?: ArchivoListRelationFilter
  }, "id">

  export type ProyectoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: ProyectoCountOrderByAggregateInput
    _max?: ProyectoMaxOrderByAggregateInput
    _min?: ProyectoMinOrderByAggregateInput
  }

  export type ProyectoScalarWhereWithAggregatesInput = {
    AND?: ProyectoScalarWhereWithAggregatesInput | ProyectoScalarWhereWithAggregatesInput[]
    OR?: ProyectoScalarWhereWithAggregatesInput[]
    NOT?: ProyectoScalarWhereWithAggregatesInput | ProyectoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proyecto"> | string
    nombre?: StringWithAggregatesFilter<"Proyecto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Proyecto"> | string | null
    fechaCreacion?: DateTimeWithAggregatesFilter<"Proyecto"> | Date | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"Proyecto"> | Date | string
  }

  export type ArchivoWhereInput = {
    AND?: ArchivoWhereInput | ArchivoWhereInput[]
    OR?: ArchivoWhereInput[]
    NOT?: ArchivoWhereInput | ArchivoWhereInput[]
    id?: StringFilter<"Archivo"> | string
    nombre?: StringFilter<"Archivo"> | string
    ruta?: StringFilter<"Archivo"> | string
    tipo?: StringNullableFilter<"Archivo"> | string | null
    tamano?: IntNullableFilter<"Archivo"> | number | null
    proyectoid?: StringNullableFilter<"Archivo"> | string | null
    proyecto?: XOR<ProyectoNullableScalarRelationFilter, ProyectoWhereInput> | null
  }

  export type ArchivoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruta?: SortOrder
    tipo?: SortOrderInput | SortOrder
    tamano?: SortOrderInput | SortOrder
    proyectoid?: SortOrderInput | SortOrder
    proyecto?: ProyectoOrderByWithRelationInput
    _relevance?: ArchivoOrderByRelevanceInput
  }

  export type ArchivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ruta?: string
    AND?: ArchivoWhereInput | ArchivoWhereInput[]
    OR?: ArchivoWhereInput[]
    NOT?: ArchivoWhereInput | ArchivoWhereInput[]
    nombre?: StringFilter<"Archivo"> | string
    tipo?: StringNullableFilter<"Archivo"> | string | null
    tamano?: IntNullableFilter<"Archivo"> | number | null
    proyectoid?: StringNullableFilter<"Archivo"> | string | null
    proyecto?: XOR<ProyectoNullableScalarRelationFilter, ProyectoWhereInput> | null
  }, "id" | "ruta">

  export type ArchivoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruta?: SortOrder
    tipo?: SortOrderInput | SortOrder
    tamano?: SortOrderInput | SortOrder
    proyectoid?: SortOrderInput | SortOrder
    _count?: ArchivoCountOrderByAggregateInput
    _avg?: ArchivoAvgOrderByAggregateInput
    _max?: ArchivoMaxOrderByAggregateInput
    _min?: ArchivoMinOrderByAggregateInput
    _sum?: ArchivoSumOrderByAggregateInput
  }

  export type ArchivoScalarWhereWithAggregatesInput = {
    AND?: ArchivoScalarWhereWithAggregatesInput | ArchivoScalarWhereWithAggregatesInput[]
    OR?: ArchivoScalarWhereWithAggregatesInput[]
    NOT?: ArchivoScalarWhereWithAggregatesInput | ArchivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Archivo"> | string
    nombre?: StringWithAggregatesFilter<"Archivo"> | string
    ruta?: StringWithAggregatesFilter<"Archivo"> | string
    tipo?: StringNullableWithAggregatesFilter<"Archivo"> | string | null
    tamano?: IntNullableWithAggregatesFilter<"Archivo"> | number | null
    proyectoid?: StringNullableWithAggregatesFilter<"Archivo"> | string | null
  }

  export type ProyectoCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    archivos?: ArchivoCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    archivos?: ArchivoUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type ProyectoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    archivos?: ArchivoUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    archivos?: ArchivoUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type ProyectoCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type ProyectoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProyectoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoCreateInput = {
    id?: string
    nombre: string
    ruta: string
    tipo?: string | null
    tamano?: number | null
    proyecto?: ProyectoCreateNestedOneWithoutArchivosInput
  }

  export type ArchivoUncheckedCreateInput = {
    id?: string
    nombre: string
    ruta: string
    tipo?: string | null
    tamano?: number | null
    proyectoid?: string | null
  }

  export type ArchivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    proyecto?: ProyectoUpdateOneWithoutArchivosNestedInput
  }

  export type ArchivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    proyectoid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArchivoCreateManyInput = {
    id?: string
    nombre: string
    ruta: string
    tipo?: string | null
    tamano?: number | null
    proyectoid?: string | null
  }

  export type ArchivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArchivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
    proyectoid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArchivoListRelationFilter = {
    every?: ArchivoWhereInput
    some?: ArchivoWhereInput
    none?: ArchivoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArchivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProyectoOrderByRelevanceInput = {
    fields: ProyectoOrderByRelevanceFieldEnum | ProyectoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProyectoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type ProyectoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type ProyectoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProyectoNullableScalarRelationFilter = {
    is?: ProyectoWhereInput | null
    isNot?: ProyectoWhereInput | null
  }

  export type ArchivoOrderByRelevanceInput = {
    fields: ArchivoOrderByRelevanceFieldEnum | ArchivoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArchivoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruta?: SortOrder
    tipo?: SortOrder
    tamano?: SortOrder
    proyectoid?: SortOrder
  }

  export type ArchivoAvgOrderByAggregateInput = {
    tamano?: SortOrder
  }

  export type ArchivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruta?: SortOrder
    tipo?: SortOrder
    tamano?: SortOrder
    proyectoid?: SortOrder
  }

  export type ArchivoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruta?: SortOrder
    tipo?: SortOrder
    tamano?: SortOrder
    proyectoid?: SortOrder
  }

  export type ArchivoSumOrderByAggregateInput = {
    tamano?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ArchivoCreateNestedManyWithoutProyectoInput = {
    create?: XOR<ArchivoCreateWithoutProyectoInput, ArchivoUncheckedCreateWithoutProyectoInput> | ArchivoCreateWithoutProyectoInput[] | ArchivoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutProyectoInput | ArchivoCreateOrConnectWithoutProyectoInput[]
    createMany?: ArchivoCreateManyProyectoInputEnvelope
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
  }

  export type ArchivoUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<ArchivoCreateWithoutProyectoInput, ArchivoUncheckedCreateWithoutProyectoInput> | ArchivoCreateWithoutProyectoInput[] | ArchivoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutProyectoInput | ArchivoCreateOrConnectWithoutProyectoInput[]
    createMany?: ArchivoCreateManyProyectoInputEnvelope
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArchivoUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<ArchivoCreateWithoutProyectoInput, ArchivoUncheckedCreateWithoutProyectoInput> | ArchivoCreateWithoutProyectoInput[] | ArchivoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutProyectoInput | ArchivoCreateOrConnectWithoutProyectoInput[]
    upsert?: ArchivoUpsertWithWhereUniqueWithoutProyectoInput | ArchivoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: ArchivoCreateManyProyectoInputEnvelope
    set?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    disconnect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    delete?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    update?: ArchivoUpdateWithWhereUniqueWithoutProyectoInput | ArchivoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: ArchivoUpdateManyWithWhereWithoutProyectoInput | ArchivoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
  }

  export type ArchivoUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<ArchivoCreateWithoutProyectoInput, ArchivoUncheckedCreateWithoutProyectoInput> | ArchivoCreateWithoutProyectoInput[] | ArchivoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: ArchivoCreateOrConnectWithoutProyectoInput | ArchivoCreateOrConnectWithoutProyectoInput[]
    upsert?: ArchivoUpsertWithWhereUniqueWithoutProyectoInput | ArchivoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: ArchivoCreateManyProyectoInputEnvelope
    set?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    disconnect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    delete?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    connect?: ArchivoWhereUniqueInput | ArchivoWhereUniqueInput[]
    update?: ArchivoUpdateWithWhereUniqueWithoutProyectoInput | ArchivoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: ArchivoUpdateManyWithWhereWithoutProyectoInput | ArchivoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
  }

  export type ProyectoCreateNestedOneWithoutArchivosInput = {
    create?: XOR<ProyectoCreateWithoutArchivosInput, ProyectoUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: ProyectoCreateOrConnectWithoutArchivosInput
    connect?: ProyectoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProyectoUpdateOneWithoutArchivosNestedInput = {
    create?: XOR<ProyectoCreateWithoutArchivosInput, ProyectoUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: ProyectoCreateOrConnectWithoutArchivosInput
    upsert?: ProyectoUpsertWithoutArchivosInput
    disconnect?: ProyectoWhereInput | boolean
    delete?: ProyectoWhereInput | boolean
    connect?: ProyectoWhereUniqueInput
    update?: XOR<XOR<ProyectoUpdateToOneWithWhereWithoutArchivosInput, ProyectoUpdateWithoutArchivosInput>, ProyectoUncheckedUpdateWithoutArchivosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ArchivoCreateWithoutProyectoInput = {
    id?: string
    nombre: string
    ruta: string
    tipo?: string | null
    tamano?: number | null
  }

  export type ArchivoUncheckedCreateWithoutProyectoInput = {
    id?: string
    nombre: string
    ruta: string
    tipo?: string | null
    tamano?: number | null
  }

  export type ArchivoCreateOrConnectWithoutProyectoInput = {
    where: ArchivoWhereUniqueInput
    create: XOR<ArchivoCreateWithoutProyectoInput, ArchivoUncheckedCreateWithoutProyectoInput>
  }

  export type ArchivoCreateManyProyectoInputEnvelope = {
    data: ArchivoCreateManyProyectoInput | ArchivoCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type ArchivoUpsertWithWhereUniqueWithoutProyectoInput = {
    where: ArchivoWhereUniqueInput
    update: XOR<ArchivoUpdateWithoutProyectoInput, ArchivoUncheckedUpdateWithoutProyectoInput>
    create: XOR<ArchivoCreateWithoutProyectoInput, ArchivoUncheckedCreateWithoutProyectoInput>
  }

  export type ArchivoUpdateWithWhereUniqueWithoutProyectoInput = {
    where: ArchivoWhereUniqueInput
    data: XOR<ArchivoUpdateWithoutProyectoInput, ArchivoUncheckedUpdateWithoutProyectoInput>
  }

  export type ArchivoUpdateManyWithWhereWithoutProyectoInput = {
    where: ArchivoScalarWhereInput
    data: XOR<ArchivoUpdateManyMutationInput, ArchivoUncheckedUpdateManyWithoutProyectoInput>
  }

  export type ArchivoScalarWhereInput = {
    AND?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
    OR?: ArchivoScalarWhereInput[]
    NOT?: ArchivoScalarWhereInput | ArchivoScalarWhereInput[]
    id?: StringFilter<"Archivo"> | string
    nombre?: StringFilter<"Archivo"> | string
    ruta?: StringFilter<"Archivo"> | string
    tipo?: StringNullableFilter<"Archivo"> | string | null
    tamano?: IntNullableFilter<"Archivo"> | number | null
    proyectoid?: StringNullableFilter<"Archivo"> | string | null
  }

  export type ProyectoCreateWithoutArchivosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type ProyectoUncheckedCreateWithoutArchivosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type ProyectoCreateOrConnectWithoutArchivosInput = {
    where: ProyectoWhereUniqueInput
    create: XOR<ProyectoCreateWithoutArchivosInput, ProyectoUncheckedCreateWithoutArchivosInput>
  }

  export type ProyectoUpsertWithoutArchivosInput = {
    update: XOR<ProyectoUpdateWithoutArchivosInput, ProyectoUncheckedUpdateWithoutArchivosInput>
    create: XOR<ProyectoCreateWithoutArchivosInput, ProyectoUncheckedCreateWithoutArchivosInput>
    where?: ProyectoWhereInput
  }

  export type ProyectoUpdateToOneWithWhereWithoutArchivosInput = {
    where?: ProyectoWhereInput
    data: XOR<ProyectoUpdateWithoutArchivosInput, ProyectoUncheckedUpdateWithoutArchivosInput>
  }

  export type ProyectoUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProyectoUncheckedUpdateWithoutArchivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivoCreateManyProyectoInput = {
    id?: string
    nombre: string
    ruta: string
    tipo?: string | null
    tamano?: number | null
  }

  export type ArchivoUpdateWithoutProyectoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArchivoUncheckedUpdateWithoutProyectoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArchivoUncheckedUpdateManyWithoutProyectoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ruta?: StringFieldUpdateOperationsInput | string
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    tamano?: NullableIntFieldUpdateOperationsInput | number | null
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