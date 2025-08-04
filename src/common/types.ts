import { AxiosInstance, AxiosPromise } from "axios";

// eslint-disable-next-line
export type CallerNoParam<T = any> = (uzumHttp: AxiosInstance) => AxiosPromise<T>;

// eslint-disable-next-line
export type CallerParam<R, T = any> = (uzumHttp: AxiosInstance, params: R) => AxiosPromise<T>;

// eslint-disable-next-line
export type CallerPayload<S, T = any> = (uzumHttp: AxiosInstance, payload: S) => AxiosPromise<T>;

// eslint-disable-next-line
export type CallerParamPayload<R, S, T = any> = (uzumHttp: AxiosInstance, params: R, payload: S) => AxiosPromise<T>;

export type StringNullable = string | null;

export type NumberNullable = number | null;

export type BooleanNullable = boolean | null;
