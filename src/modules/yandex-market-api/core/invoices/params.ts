import { CampaignIdBasedParams } from "@/modules/yandex-market-api/common";

export interface GetSupplyRequestsParams extends CampaignIdBasedParams {
  limit?: number;
  page_token?: string;
}
