import { CallerParamPayload, pasteApiKeyHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const CampaignStocks: CallerParamPayload<
  Params.CampaignStocksParams,
  Types.ProductsApi.CampaignStocks.Request,
  Types.ProductsApi.CampaignStocks.Response
> = (http, params, payload) => {
  const { campaignId, apiKey, ...paramsRest } = params;
  return http.post(`/v2/campaigns/${campaignId}/offers/stocks`, payload, { params: paramsRest, headers: pasteApiKeyHeader(apiKey) });
};

export const BusinessOfferMappings: CallerParamPayload<
  Params.BusinessOfferMappingsParams,
  Types.ProductsApi.BusinessOfferMappings.Request,
  Types.ProductsApi.BusinessOfferMappings.Response
> = (http, params) => {
  const { businessId, apiKey, ...paramsRest } = params;
  return http.post(`/v2/businesses/${businessId}/offer-mappings`, null, { params: paramsRest, headers: pasteApiKeyHeader(apiKey) });
};

export const UpdateOfferPrices: CallerParamPayload<
  Params.UpdateOfferPricesParams,
  Types.ProductsApi.UpdateOfferPrices.Request,
  Types.ProductsApi.UpdateOfferPrices.Response
> = (http, params, payload) => {
  return http.post(`/v2/businesses/${params.businessId}/offer-prices/updates`, payload, { headers: pasteApiKeyHeader(params.apiKey) });
};

export const GetSelectedProductsPrices: CallerParamPayload<
  Params.GetSelectedProductsPrices,
  Types.ProductsApi.GetSelectedProductsPrices.Request,
  Types.ProductsApi.GetSelectedProductsPrices.Response
> = (http, params, payload) => {
  return http.post(`/v2/businesses/${params.businessId}/offer-prices`, payload, { headers: pasteApiKeyHeader(params.apiKey) });
};