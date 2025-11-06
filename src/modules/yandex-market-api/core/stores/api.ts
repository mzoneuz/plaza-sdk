import { CallerParam, pasteApiKeyHeader } from "@/common";
import { CampaignIdBasedParams, PagedParams } from "@/modules/yandex-market-api/common/params";

import * as Types from "./types";

export const Campaigns: CallerParam<PagedParams, Types.StoresApi.Campaigns.Response> = (http, params) => {
  return http.get("/v2/campaigns", { headers: pasteApiKeyHeader(params.apiKey) });
};

export const Campaign: CallerParam<CampaignIdBasedParams, Types.StoresApi.Campaign.Response> = (http, params) => {
  return http.get(`/v2/campaigns/${params.campaignId}`, { headers: pasteApiKeyHeader(params.apiKey) });
};
