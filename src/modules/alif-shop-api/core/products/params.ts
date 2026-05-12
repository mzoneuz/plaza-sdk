import { NumberRange, TokenParams } from "@/common";

export interface ProductIdBasedParams extends TokenParams {
  productId: number;
}

export interface WarehouseProductsListParams extends TokenParams {
  per_page: number;
  page: number;
  category_id?: number;
  quantity?: number;
  has_offer?: NumberRange<0, 1>;
  is_visible?: NumberRange<0, 1>;
  q?: string;
}

export interface WarehouseOfferDemandsList extends TokenParams {
  page: number;
  per_page: number;
  category_id?: number;
  status?: string;
  in_stock?: string;
  search?: string;
}
