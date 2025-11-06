import * as Common from "@/modules/yandex-market-api/common";

export interface CampaignOrderParams extends Common.CampaignIdBasedParams {
  orderId: string;
}

export interface CampaignOrdersParams extends Common.PagedParams, Common.TokenPagedParams, Common.CampaignIdBasedParams {
  fake?: boolean;
  toDate?: string;
  hasCis?: boolean;
  fromDate?: string;
  orderIds?: number[];
  updatedAtTo?: string;
  updatedAtFrom?: string;
  status?: Common.OrderStatus;
  onlyEstimatedDelivery?: boolean;
  supplierShipmentDateTo?: string;
  substatus?: Common.OrderSubstatus;
  supplierShipmentDateFrom?: string;
  buyerType?: Common.OrderBuyerType;
  onlyWaitingForCancellationApprove?: boolean;
  dispatchType?: Common.OrderDeliveryDispatchType;
}
