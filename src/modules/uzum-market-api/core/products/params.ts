import { TokenParams } from "@/common";

export interface TokenAndShopId extends TokenParams {
  shopId: number;
}

export interface ProductIdBasedParams extends TokenAndShopId {
  productId: number;
}

export interface CorePaginationParams {
  page: number;
  size: number;
}

export interface SkuIdBasedParams extends TokenAndShopId {
  skuId: number;
}

export interface SkuBasedParams extends TokenAndShopId {
  sku: string;
}

export type ProductListParams = TokenAndShopId &
  CorePaginationParams & {
    searchQuery?: string;
    filter: "ALL" | (string & {});
    sortBy: "id" | (string & {});
    order: "ascending" | "descending";
  };

export type InvolvedProductsParams = TokenAndShopId &
  CorePaginationParams & {
    eventId: number;
  };
