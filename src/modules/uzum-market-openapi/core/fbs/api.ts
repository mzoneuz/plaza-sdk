import { CallerParam, CallerParamPayload, pasteAuthHeader, TokenParams } from "@/common";

import * as Types from "./types";

export const FbsStocksList: CallerParam<TokenParams, Types.FbsApi.FbsStocksList.Response> = (http, params) => {
  return http.get("/seller-openapi/v2/fbs/sku/stocks", {
    headers: pasteAuthHeader(params?.token),
  });
};

export const EditFbsStocks: CallerParamPayload<TokenParams, Types.FbsApi.EditFbsStocks.Request, Types.FbsApi.EditFbsStocks.Response> = (
  http,
  params,
  payload,
) => {
  return http.post<Types.FbsApi.EditFbsStocks.Response>("/seller-openapi/v2/fbs/sku/stocks", { ...payload }, { headers: pasteAuthHeader(params?.token) });
};
