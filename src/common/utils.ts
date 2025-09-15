/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance } from "axios";

import { BoundFunction, TailParameters } from "./types";

export const getNumber = (value: unknown, defaultValue: number = 0): number => {
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  return defaultValue;
};

export const pasteAuthHeader = (token?: string) => {
  return { ...(token ? { Authorization: `Bearer ${token}` } : {}) };
};
export const pasteAuthHeaderAndApikey = (token?: string, apikey = "2qHIakuLe5", apikeyFieldName = "apikey") => {
  return { ...(token ? { Authorization: `Bearer ${token}` } : {}), [apikeyFieldName]: apikey, locale: "ru" };
};

export function bindHttp<F extends (http: AxiosInstance, ...args: any[]) => any>(fn: F, http: AxiosInstance): BoundFunction<F> {
  // @ts-expect-error - runtime ok, typings BoundFunction<F> qaytaradi
  return (...args: TailParameters<F>) => fn(http, ...args);
}

export const wrapWithHttp =
  (http: AxiosInstance) =>
  <F extends (http: AxiosInstance, ...args: any[]) => any>(fn: F) =>
    ((...args: TailParameters<F>) => fn(http, ...args)) as (...args: TailParameters<F>) => ReturnType<F>;

export function withHttp<H extends AxiosInstance, A extends any[], R>(fn: (http: H, ...args: A) => R, http: H) {
  return (...args: A) => fn(http, ...args);
}
