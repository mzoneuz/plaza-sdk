export interface TokenAndShopId {
  token: string;
  shopId: number;
}

export interface SkuIdBasedParams extends TokenAndShopId {
  skuId: number;
}

export interface ProductListParams extends TokenAndShopId {
  page: number;
  size: number;
  searchQuery?: string;
  filter: "ALL" & (string & {});
  sortBy: "id" & (string & {});
  order: "ascending" | "descending";
}
