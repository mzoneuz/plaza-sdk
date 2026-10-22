import { CorePaginationParams } from "@/modules/uzum-market-api/common";
import { TokenParams } from "@/common";

import { StockAmountFilter, StockSortBy } from "./types";

export interface SellerIdParams extends TokenParams {
  sellerId: number;
}

export interface GetStockSkusParams extends SellerIdParams, CorePaginationParams {
  /** Vergul bilan ajratilgan yoki massiv ko'rinishidagi magazin IDlari */
  shopIds: number[] | string;
  /** true — faqat FBS/DBS ga ulangan SKUlar ("Только по FBS"), false — hammasi */
  linked?: boolean;
  amountFilter?: StockAmountFilter;
  sortBy?: StockSortBy;
  /** Nomi, SKU yoki shtrixkod bo'yicha qidiruv */
  searchQuery?: string;
}
