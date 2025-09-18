import { TokenParams } from "@/common";
import { OrderStatuses } from "@/modules/uzum-market-api/common/types";

export interface OrderIdBasedParams extends TokenParams {
  orderId: number;
}
export interface OrderIdsBasedParams extends TokenParams {
  orderIds: string;
}



export interface OrdersListParams extends TokenParams {
  page?: number;
  size?: number;
  sortBy?: "CREATED_DATE";
  sortOrder?: "DESC" | "ASC";
  scheme: "FBS" | "DBS";
  statuses: OrderStatuses;
  shopIds?: string;
  places?: "STOCK" | "DROP_OFF" | (string & {});
}
