import { CallerParam, CallerParamPayload, pasteAuthHeaderAndApikey } from "@/common";

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

export const WarehouseList: CallerParam<Params.WarehouseProductsListParams, Types.ProductsApi.WarehouseList.Response> = (http, { token, ...params }) => {
  return http.post("/warehouse/items", {
    params: { ...params, q: params.q || "" },
    headers: pasteAuthHeaderAndApikey(token),
  });
};
