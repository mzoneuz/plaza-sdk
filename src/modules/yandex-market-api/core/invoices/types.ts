import { AddressGps } from "@/common";
import { CurrencyValueCore, Paging, ResultResponse } from "@/modules/yandex-market-api/common";

export declare namespace InvoicesApi {
  export namespace GetSupplyRequests {
    export interface Request {
      requestDateFrom?: string;
      requestDateTo?: string;
      requestIds?: number[];
      requestStatuses?: InvoicesEntity.SupplyRequestStatus[];
      requestTypes?: InvoicesEntity.SupplyRequestType[];
      requestSubtypes?: InvoicesEntity.RequestSubtypes[];
      sorting?: InvoicesEntity.SupplyRequestSorting;
    }

    export type Response = ResultResponse<{
      paging: Paging;
      requests: InvoicesEntity.SupplyRequest[];
    }>;
  }

  export namespace GetSupplyRequestsItems {
    export interface Request {
      requestId: InvoicesEntity.SupplyRequestId;
    }

    export type Response = ResultResponse<{
      paging: Paging;
      items: InvoicesEntity.SupplyRequestItem[];
    }>;
  }
}

export declare namespace InvoicesEntity {
  export interface SupplyRequestItem {
    name: string;
    counters: CountersBase;
    offerId: string;
    price: CurrencyValueCore;
  }

  export interface SupplyRequest {
    id: SupplyRequestId;
    counters: Counters;
    status: SupplyRequestStatus;
    subtype: RequestSubtypes;
    type: SupplyRequestType;
    updatedAt: string;
    childrenLinks: SupplyRequestReference[];
    parentLink: SupplyRequestReference;
    transitLocation: TransitLocation;
  }

  export interface SupplyRequestReference {
    id: SupplyRequestId;
    type: SupplyRequestReferenceType;
  }

  export interface SupplyRequestId {
    id: number;
    marketplaceRequestId: string;
    warehouseRequestId: string;
  }

  export interface CountersBase {
    defectCount: number;
    factCount: number;
    planCount: number;
    shortageCount: number;
    surplusCount: number;
  }
  
  export interface Counters extends CountersBase {
    acceptableCount: number;
    actualBoxCount: number;
    actualPalletsCount: number;
    unacceptableCount: number;
    undefinedCount: number;
  }

  export interface SupplyRequestSorting {
    attribute: "ID" | "REQUESTED_DATE" | "UPDATED_AT" | "STATUS";
    direction: "ASC" | "DESC";
  }

  export interface TransitLocation {
    address: LocationAddress;
    name: string;
    serviceId: number;
    type: TransitLocationType;
    requestedDate: string;
  }

  export interface LocationAddress {
    fullAddress: string;
    gps: AddressGps;
  }

  export type TransitLocationType = "FULFILLMENT" | "XDOC" | "PICKUP_POINT";

  export type SupplyRequestReferenceType = "VIRTUAL_DISTRIBUTION" | "WITHDRAW" | "UTILIZATION" | "ADDITIONAL_SUPPLY";

  export type SupplyRequestStatus =
    | "CREATED"
    | "FINISHED"
    | "CANCELLED"
    | "INVALID"
    | "VALIDATED"
    | "PUBLISHED"
    | "ARRIVED_TO_SERVICE"
    | "ARRIVED_TO_XDOC_SERVICE"
    | "SHIPPED_TO_SERVICE"
    | "CANCELLATION_REQUESTED"
    | "CANCELLATION_REJECTED"
    | "REGISTERED_IN_ELECTRONIC_QUEUE"
    | "READY_FOR_UTILIZATION"
    | "TRANSIT_MOVING"
    | "WAREHOUSE_HANDLING"
    | "ACCEPTED_BY_WAREHOUSE_SYSTEM"
    | "READY_TO_WITHDRAW"
    | "NEED_PREPARATION";

  export type SupplyRequestType = "SUPPLY" | "WITHDRAW" | "UTILIZATION";

  export type RequestSubtypes =
    | "DEFAULT"
    | "XDOC"
    | "INVENTORYING_SUPPLY"
    | "INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER"
    | "MOVEMENT_SUPPLY"
    | "ADDITIONAL_SUPPLY"
    | "VIRTUAL_DISTRIBUTION_CENTER"
    | "VIRTUAL_DISTRIBUTION_CENTER_CHILD"
    | "FORCE_PLAN"
    | "FORCE_PLAN_ANOMALY_PER_SUPPLY"
    | "PLAN_BY_SUPPLIER"
    | "ANOMALY_WITHDRAW"
    | "FIX_LOST_INVENTORYING"
    | "OPER_LOST_INVENTORYING"
    | "MOVEMENT_WITHDRAW"
    | "MISGRADING_SUPPLY"
    | "MISGRADING_WITHDRAW"
    | "MAN_UTIL"
    | "WITHDRAW_AUTO_UTILIZATION";
}
