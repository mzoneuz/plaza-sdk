import { CorePaginationParams, ReturnStatuses, ReturnTypes, TokenAndShopId } from "@/modules/uzum-market-api/common";

export interface GetReturnsParams extends CorePaginationParams, TokenAndShopId {
  types?: ReturnTypes | (string & {});
  statuses?: ReturnStatuses | (string & {});
}

export interface GetReturnByIdParams extends TokenAndShopId {
  returnId: number;
}