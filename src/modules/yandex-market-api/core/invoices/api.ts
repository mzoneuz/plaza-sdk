import { CallerParamPayload, pasteApiKeyHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const GetSupplyRequests: CallerParamPayload<
  Params.GetSupplyRequestsParams,
  Types.InvoicesApi.GetSupplyRequests.Request,
  Types.InvoicesApi.GetSupplyRequests.Response
> = (http, { campaignId, apiKey, ...params }, payload) => {
  return http.post(`/v2/campaigns/${campaignId}/supply-requests`, payload, { params, headers: pasteApiKeyHeader(apiKey) });
};

export const GetSupplyRequestsItems: CallerParamPayload<
  Params.GetSupplyRequestsParams,
  Types.InvoicesApi.GetSupplyRequestsItems.Request,
  Types.InvoicesApi.GetSupplyRequestsItems.Response
> = (http, { campaignId, apiKey, ...params }, payload) => {
  return http.post(`/v2/campaigns/${campaignId}/supply-requests/items`, payload, { params, headers: pasteApiKeyHeader(apiKey) });
};
