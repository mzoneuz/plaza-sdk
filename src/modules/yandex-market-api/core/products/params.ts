import * as Common from "@/modules/yandex-market-api/common";

export type CampaignStocksParams = Common.TokenPagedParams & Common.CampaignIdBasedParams;

export interface BusinessOfferMappingsParams extends Common.TokenPagedParams {
  businessId: number;
  language?: Common.Language;
}
