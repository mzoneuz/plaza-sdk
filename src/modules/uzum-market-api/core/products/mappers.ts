import { getNumber } from "@/common/utils";

import { ProductListParams } from "./params";
import { get } from "lodash";

export const ProductListParamsMapper = (params: ProductListParams) => {
  return {
    searchQuery: get(params, "searchQuery", "") || "",
    filter: get(params,"filter") || "ALL",
    sortBy: get(params,"sortBy") || "id",
    order: get(params,"order") || "descending",
    size: getNumber(get(params, "size"), 250),
    page: getNumber(get(params, "page"), 0),
  };
};
