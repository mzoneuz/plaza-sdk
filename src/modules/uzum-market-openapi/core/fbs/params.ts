import { TokenParams } from "@/common";

// OpenAPI `/v2/fbs/orders` status to'plami (swagger: GET /v2/fbs/orders -> status enum)
export type FbsOpenapiOrderStatus =
  | "CREATED"
  | "PACKING"
  | "PENDING_DELIVERY"
  | "DELIVERING"
  | "DELIVERED"
  | "ACCEPTED_AT_DP"
  | "DELIVERED_TO_CUSTOMER_DELIVERY_POINT"
  | "COMPLETED"
  | "CANCELED"
  | "PENDING_CANCELLATION"
  | "RETURNED";

export interface FbsOrdersListParams extends TokenParams {
  /** Magazin idlari — majburiy (swagger: shopIds required array<int64>) */
  shopIds: number[];
  /** default: CREATED */
  status?: FbsOpenapiOrderStatus;
  scheme?: "FBS" | "DBS";
  /** Unix epoch millisekundlarda */
  dateFrom?: number;
  dateTo?: number;
  /** default: 0 */
  page?: number;
  /** default: 20, maksimum: 50 */
  size?: number;
}

export interface FbsOrdersCountParams extends TokenParams {
  shopIds?: number[];
  /** default: CREATED */
  status?: FbsOpenapiOrderStatus;
  dateFrom?: number;
  dateTo?: number;
}
