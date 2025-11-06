import * as Common from "@/modules/yandex-market-api/common";

export interface CampaignReturnsParams extends Common.TokenPagedParams, Common.CampaignIdBasedParams {
  fromDate?: string;
  toDate?: string;
  orderIds?: number[];
  shipmentStatuses?: Common.ReturnShipmentStatus[];
  statuses?: Common.ReturnStatus[];
  type?: Common.ReturnType;
}
