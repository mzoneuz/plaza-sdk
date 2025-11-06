import { CallerParam, pasteApiKeyHeader } from "@/common";

import * as Params from "./params";
import { ReturnsApi } from "./types";

export const CampaignReturns: CallerParam<Params.CampaignReturnsParams, ReturnsApi.CampaignReturns.Response> = (http, { campaignId, apiKey, ...params }) => {
  return http.get(`/v2/campaigns/${campaignId}/returns`, { params, headers: pasteApiKeyHeader(apiKey) });
};
