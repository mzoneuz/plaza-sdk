import { AxiosInstance, AxiosPromise } from "axios";

// eslint-disable-next-line
export type CallerNoParam<T = any> = (http: AxiosInstance) => AxiosPromise<T>;

// eslint-disable-next-line
export type CallerParam<R, T = any> = (http: AxiosInstance, params: R) => AxiosPromise<T>;

// eslint-disable-next-line
export type CallerPayload<S, T = any> = (http: AxiosInstance, payload: S) => AxiosPromise<T>;

// eslint-disable-next-line
export type CallerParamPayload<R, S, T = any> = (http: AxiosInstance, params: R, payload: S) => AxiosPromise<T>;

export type StringNullable = string | null;

export type NumberNullable = number | null;

export type BooleanNullable = boolean | null;

export type NumberRange<From extends number, To extends number, Acc extends number[] = [], Result extends number[] = []> = Acc["length"] extends To
  ? [...Result, To][number]
  : Acc["length"] extends From
    ? NumberRange<From, To, [...Acc, 1], [Acc["length"]]>
    : Result extends []
      ? NumberRange<From, To, [...Acc, 1], []>
      : NumberRange<From, To, [...Acc, 1], [...Result, Acc["length"]]>;

// eslint-disable-next-line
export type TailParameters<T> = T extends (x: any, ...rest: infer P) => any ? P : never;

export type BoundFunction<F> = F extends (http: AxiosInstance, ...args: infer P) => infer R ? (...args: P) => R : never;
