import { CorePaginationParams, TokenAndShopId } from "@/modules/uzum-market-api/common";

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
