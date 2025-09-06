import { CallerParam, CallerParamPayload, pasteAuthHeaderAndApikey, TokenParams } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const SingleWarehouseProduct: CallerParam<Params.ProductIdBasedParams, Types.ProductsApi.SingleWarehouse.Response> = async (http, params) => {
  return http.get(`/warehouse/items/${params.productId}`, {
    headers: pasteAuthHeaderAndApikey(params.token),
  });
};

export const UpdateWarehouseProduct: CallerParamPayload<
  Params.ProductIdBasedParams,
  Types.ProductsApi.UpdateWarehouse.Request,
  Types.ProductsApi.UpdateWarehouse.Response
> = (http, params, payload) => {
  return http.put(`/warehouse/items/${params.productId}`, payload, { headers: pasteAuthHeaderAndApikey(params.token) });
};

export const WarehouseList: CallerParam<Params.WarehouseProductsListParams, Types.ProductsApi.WarehouseList.Response> = (http, { token = "", ...params }) => {
  return http.get("/warehouse/items", {
    params: { ...params, q: params.q || "" },
    headers: pasteAuthHeaderAndApikey(token),
  });
};

export const WarehouseCategoriesList: CallerParam<TokenParams, Types.ProductsApi.WarehouseCategoriesList.Response> = (http, params) => {
  return http.get("/warehouse/app", { headers: pasteAuthHeaderAndApikey(params.token) });
};
