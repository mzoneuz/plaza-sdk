/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SearchListParams {
  page: number;
  price_range?: { min?: string; max?: string };
  brands?: never[];
  order: string | null;
  query: string;
  filters?: Record<string, any[]>;
}
