import { CallerParam, pasteAuthHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const GetReturns: CallerParam<Params.GetReturnsParams, Types.ReturnsApi.GetReturns.Response> = (http, { shopId, token, ...params }) => {
  return http.get(`/seller/shop/${shopId}/return`, { params, headers: pasteAuthHeader(token) });
};
