import { CallerParam, pasteApiKeyHeader } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

export const CampaignOrder: CallerParam<Params.CampaignOrderParams, Types.OrdersApi.CampaignOrder.Response> = (http, params) => {
  return http.get(`/v2/campaigns/${params.campaignId}/orders/${params.orderId}`, { headers: pasteApiKeyHeader(params.apiKey) });
};

export const CampaignOrders: CallerParam<Params.CampaignOrdersParams, Types.OrdersApi.CampaignOrders.Response> = (http, params) => {
  return http.get(`/v2/campaigns/${params.campaignId}/orders`, { headers: pasteApiKeyHeader(params.apiKey) });
};
