import { ResultStatus } from "./types";

export interface Paging {
  prevPageToken?: string;
  nextPageToken?: string;
}

export interface Pager {
  total: number;
  from: number;
  to: number;
  currentPage: number;
  pagesCount: number;
  pageSize: number;
}

export interface ResultResponse<T> {
  status: ResultStatus;
  result: T;
}

export interface CommodityCode {
  code: string;
  type: string;
}

export interface TimePeriod {
  timePeriod: number;
  timeUnit: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";
  comment?: string;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  weight: number;
}
