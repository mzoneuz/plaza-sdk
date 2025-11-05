import { Language } from "@/modules/yandex-market-api/common/types";
import { TokenPagedParams } from "@/modules/yandex-market-api/common/params";

export interface CampaignStocksParams extends TokenPagedParams {
  campaignId: number;
}

export interface BusinessOfferMappingsParams extends TokenPagedParams {
  businessId: number;
  language?: Language;
}
