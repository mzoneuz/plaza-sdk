/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SearchOffersListParams {
  page: number;
  price_range?: { min?: string; max?: string };
  brands?: never[];
  order: string | null;
  query: string;
  filters?: Record<string, any[]>;
}

export interface CategoryOffersListParams {
  page: number;
  category: string;
}
