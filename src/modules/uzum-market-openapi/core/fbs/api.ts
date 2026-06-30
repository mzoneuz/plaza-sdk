import { CallerParam, CallerParamPayload, pasteAuthHeaderWithoutAccessKey, TokenParams } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const FbsOrdersList: CallerParam<Params.FbsOrdersListParams, Types.FbsApi.FbsOrdersList.Response> = (http, params) => {
  // token apiKey sifatida faqat headerda boradi — query stringga tushib qolmasligi kerak
  const { token, ...query } = params;
  return http.get("/seller-openapi/v2/fbs/orders", {
    params: query,
    // shopIds massivini `shopIds=1&shopIds=2` ko'rinishida (OpenAPI form/explode) yuborish
    paramsSerializer: { indexes: null },
    headers: pasteAuthHeaderWithoutAccessKey(token),
  });
};

export const FbsOrdersCount: CallerParam<Params.FbsOrdersCountParams, Types.FbsApi.FbsOrdersCount.Response> = (http, params) => {
  const { token, ...query } = params;
  return http.get("/seller-openapi/v2/fbs/orders/count", {
    params: query,
    paramsSerializer: { indexes: null },
    headers: pasteAuthHeaderWithoutAccessKey(token),
  });
};

export const FbsStocksList: CallerParam<TokenParams, Types.FbsApi.FbsStocksList.Response> = (http, params) => {
  return http.get("/seller-openapi/v2/fbs/sku/stocks", {
    headers: pasteAuthHeaderWithoutAccessKey(params?.token),
  });
};

export const EditFbsStocks: CallerParamPayload<TokenParams, Types.FbsApi.EditFbsStocks.Request, Types.FbsApi.EditFbsStocks.Response> = (
  http,
  params,
  payload,
) => {
  return http.post<Types.FbsApi.EditFbsStocks.Response>(
    "/seller-openapi/v2/fbs/sku/stocks",
    { ...payload },
    { headers: pasteAuthHeaderWithoutAccessKey(params?.token) },
  );
};
