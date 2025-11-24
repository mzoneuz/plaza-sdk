/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance } from "axios";

import { BoundFunction, TailParameters } from "./types";
import { DateRange } from "./interfaces";

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

export const pasteApiKeyHeader = (apiKey?: string, apiKeyFieldName = "Api-Key") => {
  return { ...(apiKey ? { [apiKeyFieldName]: apiKey } : {}) };
};

export const pasteAuthHeaderWithoutAccessKey = (token?: string) => {
  return { ...(token ? { Authorization: token } : {}) };
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

/**
 * Format a Date object as "YYYY-MM-DD".
 * @param d - Date to format
 * @returns A string in "YYYY-MM-DD" format
 */
export const formatDate = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${y}-${m}-${day}`;
};

/**
 * Kiritilgan `day` sanasidan boshlab,
 *   - `dateTo` = o‘sha kun
 *   - `dateFrom` = aniq 1 oy oldingi sana (kalendardagi 1 oy)
 * ni "YYYY-MM-DD" formatida qaytaradi.
 * @returns {DateRange}
 */
export const getOneMonthRange = (day: Date = new Date()): DateRange => {
  const dateTo = formatDate(day);

  const year = day.getFullYear();
  const month = day.getMonth();
  const date = day.getDate();

  const prevMonth = new Date(year, month - 1, 1);

  const lastDayOfPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();

  const safeDay = Math.min(date, lastDayOfPrevMonth);
  prevMonth.setDate(safeDay);

  const dateFrom = formatDate(prevMonth);

  return { dateFrom, dateTo };
};
