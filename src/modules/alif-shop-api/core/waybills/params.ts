import { TokenParams } from "@/common";

export interface WaybillsListParams extends TokenParams {
  page: number;
  perPage: number;
}

export interface ShipmentIdBasedParams extends TokenParams {
  shipmentId: string;
}
