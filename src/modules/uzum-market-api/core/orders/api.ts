import { CallerParam, pasteAuthHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const OrdersList: CallerParam<Params.OrdersListParams, Types.OrdersApi.OrdersList.Response> = (http, params) => {
  return http.get("/seller/fbs/orders", { params, headers: pasteAuthHeader(params?.token) });
};

export const OrdersListV2: CallerParam<Params.OrdersListV2Params, Types.OrdersApi.OrdersList.Response> = (http, params) => {
  return http.get("/seller/fbs/v2/orders", { params, headers: pasteAuthHeader(params?.token) });
};

export const SingleOrder: CallerParam<Params.OrderIdBasedParams, Types.OrdersApi.SingleOrder.Response> = (http, params) => {
  return http.get(`/seller/fbs/order/${params.orderId}`, { headers: pasteAuthHeader(params?.token) });
};

export const ChangeDeliverUntilPrice: CallerParam<Params.OrderIdsBasedParams, Types.OrdersApi.ChangeDeliverUntilPrice.Response> = (http, params) => {
  return http.get("/seller/fbs/v1/penalties/order/seller-change-deliver-until/price", { params, headers: pasteAuthHeader(params?.token) });
};

export const CancelOrderPrice: CallerParam<Params.OrderIdBasedParams, Types.OrdersApi.CancelOrderPrice.Response> = (http, params) => {
  return http.get("/seller/fbs/v1/penalties/order/seller-cancel/price", { params, headers: pasteAuthHeader(params?.token) });
};
