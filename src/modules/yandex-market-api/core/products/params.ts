import { ApiKeyParams } from "@/common";
import * as Common from "@/modules/yandex-market-api/common";

export type CampaignStocksParams = Common.TokenPagedParams & Common.CampaignIdBasedParams;

export interface BusinessOfferMappingsParams extends Common.TokenPagedParams {
  businessId: number;
  language?: Common.Language;
}

export interface UpdateOfferPricesParams extends ApiKeyParams {
  businessId: number;
}

export interface GetSelectedProductsPricesParams extends Common.TokenPagedParams {
  businessId: number;
}
